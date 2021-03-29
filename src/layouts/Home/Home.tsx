import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import routes from "../../routes";
import HomeView from "../../views/Home/Home";
import { Icon, Container, Header, Sidebar } from "semantic-ui-react";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout + prop.path === "/") {
        return <HomeView key={1} />;
      }
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    })}
  </Switch>
);

export default function Home() {
  return (
    <div>
      {/* <Container>
        <Header>
          <Navbar>
            <Navbar.Body>
              <Nav>
                <Link to="/">
                  <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
                </Link>
                <Link to="/about">
                  <Nav.Item title="About">About</Nav.Item>
                </Link>
              </Nav>
              <Nav pullRight>
                <Link to="/createquestion">
                  <Nav.Item>Create Question</Nav.Item>
                </Link>
                <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
              </Nav>
            </Navbar.Body>
          </Navbar>
        </Header>
        <Container>
          <Sidebar
            style={{ display: "flex", flexDirection: "column" }}
            collapsible
          >
            Sidebar
          </Sidebar>
          <Content>
            <div>{switchRoutes}</div>
          </Content>
        </Container>
        <Footer style={{ textAlign: "center" }}>
          <h6>gorank</h6>
        </Footer>
      </Container> */}
    </div>
  );
}
