/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel";
import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import routes from "../../routes";
import HomeView from "../../views/Home/Home";
import {
  LoginProvider,
  useLoginContext,
  SetLoginType,
  LoginInfo,
} from "../../store";
import {
  Button,
  Container,
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

const menuItemsObj: { [name: string]: string } = { Home: "/", About: "/about" };

interface menuProps {
  items: typeof menuItemsObj;
  active: number;
}

const MenuItems: React.FC<menuProps> = (props: menuProps) => {
  return (
    <>
      {Object.keys(props.items).map((val, index) => {
        return (
          <Link key={index} to={props.items[val]}>
            {index === props.active ? (
              <Menu.Item as="a" active>
                {val}
              </Menu.Item>
            ) : (
              <Menu.Item as="a">{val}</Menu.Item>
            )}
          </Link>
        );
      })}
    </>
  );
};

interface ContainerProps {
  children: React.ReactElement[];
}

interface DeviceContainerProps {
  children: React.ReactElement[];
  setLogin: SetLoginType;
  loginInfo: LoginInfo;
}

export const DesktopContainer: React.FC<DeviceContainerProps> = (
  ContainerProps
) => {
  const [state, setState] = useState({ fixed: false });

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
              <MenuItems items={menuItemsObj} active={0} />
              <Menu.Item position="right">
                {ContainerProps.loginInfo.isLoggedIn === false ? (
                  <>
                    <Button
                      as="a"
                      inverted
                      onClick={() => {
                        ContainerProps.setLogin({ isLoggedIn: true });
                      }}
                    >
                      Log in
                    </Button>
                    <Button as="a" inverted>
                      Sign Up
                    </Button>
                  </>
                ) : (
                  <>
                    <Button as="a" inverted>
                      Create Question
                    </Button>
                    <Button
                      as="a"
                      inverted
                      onClick={() => {
                        ContainerProps.setLogin({ isLoggedIn: false });
                      }}
                    >
                      Logout
                    </Button>
                  </>
                )}
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading mobile={false} />
        </Segment>
      </Visibility>

      {ContainerProps.children}
      <Footer />
    </Media>
  );
};

export const MobileContainer: React.FC<DeviceContainerProps> = (
  ContainerProps
) => {
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
          <MenuItems items={menuItemsObj} active={0} />
          {ContainerProps.loginInfo.isLoggedIn === false ? (
            <>
              <Menu.Item
                as="a"
                onClick={() => {
                  ContainerProps.setLogin({ isLoggedIn: true });
                }}
              >
                Log in
              </Menu.Item>
              <Menu.Item as="a">Sign Up</Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item
                as="a"
                onClick={() => {
                  ContainerProps.setLogin({ isLoggedIn: false });
                }}
              >
                Logout
              </Menu.Item>
              <Menu.Item as="a">Create Question</Menu.Item>
            </>
          )}
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
                  {ContainerProps.loginInfo.isLoggedIn === false ? (
                    <>
                      <Button
                        as="a"
                        inverted
                        onClick={() => {
                          ContainerProps.setLogin({ isLoggedIn: true });
                        }}
                      >
                        Log in
                      </Button>
                      <Button as="a" inverted>
                        Sign Up
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button as="a" inverted>
                        Create Question
                      </Button>
                      <Button
                        as="a"
                        inverted
                        onClick={() => {
                          ContainerProps.setLogin({ isLoggedIn: false });
                        }}
                      >
                        Logout
                      </Button>
                    </>
                  )}
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

const ResponsiveContainer: React.FC<ContainerProps> = (ContainerProps) => {
  const [loginInfo, setLogin] = useLoginContext();

  return (
    <MediaContextProvider>
      <DesktopContainer loginInfo={loginInfo} setLogin={setLogin}>
        {ContainerProps.children}
      </DesktopContainer>
      <MobileContainer loginInfo={loginInfo} setLogin={setLogin}>
        {ContainerProps.children}
      </MobileContainer>
    </MediaContextProvider>
  );
};

const HomepageLayout = () => (
  <LoginProvider>
    <ResponsiveContainer>
      {switchRoutes}
      <br />
    </ResponsiveContainer>
  </LoginProvider>
);

export default HomepageLayout;
