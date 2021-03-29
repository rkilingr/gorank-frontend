/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel";
import React, { useState } from "react";
// import { Switch, Route } from "react-router-dom";
// import routes from "../../routes";
// import HomeView from "../../views/Home/Home";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Placeholder,
} from "semantic-ui-react";

// const switchRoutes = (
//   <Switch>
//     {routes.map((prop, key) => {
//       if (prop.layout + prop.path === "/") {
//         return <HomeView key={1} />;
//       }
//       return (
//         <Route
//           path={prop.layout + prop.path}
//           component={prop.component}
//           key={key}
//         />
//       );
//     })}
//   </Switch>
// );

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
interface HomeProps {
  mobile: boolean;
}

const HomepageHeading = (prop: HomeProps) => (
  <Container text>
    <Header
      as="h1"
      content={
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      }
      inverted
      style={{
        fontSize: prop.mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: prop.mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h2"
      content={
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      }
      inverted
      style={{
        fontSize: prop.mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: prop.mobile ? "0.5em" : "1.5em",
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="arrow right" />
    </Button>
  </Container>
);

const Footer = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">Religious Ceremonies</List.Item>
              <List.Item as="a">Gazebo Plans</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Banana Pre-Order</List.Item>
              <List.Item as="a">DNA FAQ</List.Item>
              <List.Item as="a">How To Access</List.Item>
              <List.Item as="a">Favorite X-Men</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              <Placeholder>
                <Placeholder.Line />
              </Placeholder>
            </Header>
            <p>
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
interface ContainerProps {
  children: React.ReactElement[];
}

export const DesktopContainer: React.FC<ContainerProps> = (ContainerProps) => {
  const [state, setState] = useState({ fixed: true });

  const hideFixedMenu = () => setState({ fixed: false });
  const showFixedMenu = () => setState({ fixed: true });

  const { fixed } = state;

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment inverted textAlign="center" vertical>
          <Menu
            fixed={fixed ? "top" : undefined}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">Work</Menu.Item>
              <Menu.Item as="a">Company</Menu.Item>
              <Menu.Item as="a">Careers</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {ContainerProps.children}
      <Footer />
    </Media>
  );
};

export const MobileContainer: React.FC<ContainerProps> = (ContainerProps) => {
  const [state, setState] = useState({ sidebarOpened: false });

  const handleSidebarHide = () => setState({ sidebarOpened: false });

  const handleToggle = () => setState({ sidebarOpened: true });

  const { sidebarOpened } = state;

  return (
    <Media at="mobile">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {ContainerProps.children}
          <Footer />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

const ResponsiveContainer: React.FC<ContainerProps> = (ContainerProps) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{ContainerProps.children}</DesktopContainer>
    <MobileContainer>{ContainerProps.children}</MobileContainer>
  </MediaContextProvider>
);

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Placeholder>
                <Placeholder.Line />
              </Placeholder>
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Placeholder>
                <Placeholder.Line />
              </Placeholder>
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Placeholder>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Placeholder>
                <Placeholder.Line />
              </Placeholder>
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Placeholder>
                <Placeholder.Line />
              </Placeholder>
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Placeholder>
                <Placeholder.Line />
              </Placeholder>
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Placeholder>
                <Placeholder.Image />
                <Placeholder.Line />
              </Placeholder>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          <Placeholder>
            <Placeholder.Line />
          </Placeholder>
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          <Placeholder>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder>
        </p>
        <Button as="a" size="large">
          <Placeholder>
            <Placeholder.Line />
          </Placeholder>
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          <Placeholder>
            <Placeholder.Line />
          </Placeholder>
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          <Placeholder>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder>
        </p>
        <Button as="a" size="large">
          <Placeholder>
            <Placeholder.Line />
          </Placeholder>
        </Button>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
