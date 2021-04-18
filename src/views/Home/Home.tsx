import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment,
  Placeholder,
  Icon,
} from "semantic-ui-react";
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

export default function Home() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile: boolean = width <= 768;

  return (
    <>
      <Segment inverted textAlign="center" vertical>
        <HomepageHeading mobile={isMobile} />
      </Segment>
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
    </>
  );
}
