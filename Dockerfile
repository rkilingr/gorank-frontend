FROM node:lts-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
COPY ./yarn.lock /app/
RUN yarn --silent
COPY . /app
RUN yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY ./nginx/conf /etc/nginx

WORKDIR /usr/share/nginx/html
COPY ./scripts/env.sh .
COPY .env .
# Add bash
RUN apk add --no-cache bash
# Make env shell script executable
RUN chmod +x env.sh
EXPOSE 80
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
