import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment,
  Placeholder,
} from "semantic-ui-react";

export default function Home() {
  return (
    <>
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
