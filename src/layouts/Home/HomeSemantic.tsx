/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";
import useAuth from "../../auth/useAuth";
import SwitchRoutes from "./Routes";
import Footer from "./Footer";
import { QuestionsProvider } from "../../store";

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

const menuItemsObj: { [name: string]: string } = { Home: "/", About: "/about" };

interface menuProps {
  items: typeof menuItemsObj;
}

const MenuItems: React.FC<menuProps> = (props: menuProps) => {
  const location = useLocation();
  return (
    <>
      {Object.keys(props.items).map((val, index) => {
        return (
          <Link key={index} to={props.items[val]}>
            {props.items[val] === location.pathname ? (
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
  setLogin: ReturnType<typeof useAuth>;
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
              <MenuItems items={menuItemsObj} />
              <Menu.Item position="right">
                {ContainerProps.setLogin?.loginInfo.isLoggedIn === false ? (
                  <>
                    <Button
                      as="a"
                      inverted={!fixed}
                      onClick={() => {
                        ContainerProps.setLogin?.signIn(() => {
                          //
                        });
                      }}
                    >
                      Log in
                    </Button>
                    <Button as="a" inverted={!fixed}>
                      Sign Up
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/dashboard">
                      <Button as="a" inverted={!fixed}>
                        Dashboard
                      </Button>
                    </Link>
                    <Button
                      as="a"
                      inverted={!fixed}
                      onClick={() => {
                        ContainerProps.setLogin?.signOut(() => {
                          //
                        });
                      }}
                    >
                      Logout
                    </Button>
                  </>
                )}
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
          <MenuItems items={menuItemsObj} />
          {ContainerProps.setLogin?.loginInfo.isLoggedIn === false ? (
            <>
              <Menu.Item
                as="a"
                onClick={() => {
                  ContainerProps.setLogin?.signIn(() => {
                    //
                  });
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
                  ContainerProps.setLogin?.signOut(() => {
                    //
                  });
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
                  {ContainerProps.setLogin?.loginInfo.isLoggedIn === false ? (
                    <>
                      <Button
                        as="a"
                        inverted
                        onClick={() => {
                          ContainerProps.setLogin?.signIn(() => {
                            //
                          });
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
                      <Link to="/dashboard">
                        <Button as="a" inverted>
                          Dashboard
                        </Button>
                      </Link>
                      <Button
                        as="a"
                        inverted
                        onClick={() => {
                          ContainerProps.setLogin?.signOut(() => {
                            //
                          });
                        }}
                      >
                        Logout
                      </Button>
                    </>
                  )}
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {ContainerProps.children}
          <Footer />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

const ResponsiveContainer: React.FC<ContainerProps> = (ContainerProps) => {
  const setLogin = useAuth();

  return (
    <QuestionsProvider>
      <MediaContextProvider>
        <DesktopContainer setLogin={setLogin}>
          {ContainerProps.children}
        </DesktopContainer>
        <MobileContainer setLogin={setLogin}>
          {ContainerProps.children}
        </MobileContainer>
      </MediaContextProvider>
    </QuestionsProvider>
  );
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <SwitchRoutes />
    <br />
  </ResponsiveContainer>
);

export default HomepageLayout;
