import "./style.scss";

import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import { IUser } from "@study-buddy/common";

import logo from "../../images/logo.png";

interface Props {
  authedUser?: IUser;
}

export const NavBarTop = (props: Props): JSX.Element => {
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
        {props.authedUser === undefined ? (
          <UnauthedNavBar />
        ) : (
          <AuthedNavBar user={props.authedUser} />
        )}
      </Navbar>
    </div>
  );
};

const UnauthedNavBar = () => {
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
}

const AuthedNavBar = (props: AuthedNavBarProps) => {
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
            onClick={() => {
              localStorage.removeItem("google_id_token");
              console.log("Disconnected!");
              history.push("/");
              window.location.reload();
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
