import "./style.scss";

import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, withRouter } from "react-router";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import { IUser, IAuthInfo } from "@study-buddy/common";

import logo from "../../images/logo.png";
import { unauthenticate } from "../../redux/auth/actions";
import { AuthState } from "../../redux/auth/types";
import { AppState } from "../../redux/store";
import AppBase from "../../AppBase";
import { connect } from "react-redux";

interface Props {
  authState: AuthState;
  unauthenticate: () => Promise<void>;
}

const NavBarTop = (props: Props): JSX.Element => {
  const { authState, unauthenticate } = props;
  return (
    <div className="NavBarTop">
      <Navbar bg="light">
        <Navbar.Brand>
          <h1 className="mx-0 my-0 d-flex justify-content-center">
            <Nav.Link as={Link} to={"/"} className="navbar-brand">
              <img
                src={logo}
                height="30"
                className="d-inline-block align-top"
                alt="edYou"
              />
            </Nav.Link>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {authState.authInfo === undefined ? (
          <UnauthedNavBar />
        ) : (
          <AuthedNavBar
            user={authState.authInfo}
            unauthenticate={unauthenticate}
          />
        )}
      </Navbar>
    </div>
  );
};

const UnauthedNavBar = (): JSX.Element => {
  return (
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Nav.Link as={Link} to={"/connect"}>
          Connect
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
};

interface AuthedNavBarProps {
  user: IUser;
  unauthenticate: () => Promise<void>;
}

const AuthedNavBar = (props: AuthedNavBarProps): JSX.Element => {
  const { unauthenticate } = props;
  const history = useHistory();

  return (
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to={"/"}>
          Home
        </Nav.Link>
        <Nav.Link as={Link} to={"/conversations"}>
          Conversations
        </Nav.Link>
        <Nav.Link as={Link} to={"/forum"}>
          Forum
        </Nav.Link>
        <Nav.Link as={Link} to={"/notifications"}>
          Notifications (-1)
        </Nav.Link>
      </Nav>
      <Nav>
        <NavDropdown
          title={"Connected as " + props.user.email}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item as={Link} to="/settings">
            Settings
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            href="#"
            onClick={(): boolean => {
              localStorage.removeItem("google_id_token");
              unauthenticate().then(() => {
                console.log("Disconnected!");
                history.push("/");
                window.location.reload(); // needed until this PR is merged https://github.com/anthonyjgrove/react-google-login/pull/247
              });
              return false;
            }}
          >
            Disconnect
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  );
};

const mapStateToProps = (state: AppState) => ({
  authState: state.auth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AuthState, void, Action>
) => ({
  unauthenticate(): Promise<void> {
    return dispatch(unauthenticate());
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavBarTop)
);
