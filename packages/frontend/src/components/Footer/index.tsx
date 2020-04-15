import React from "react";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

export const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 border-top">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md">
            <Nav.Link as={Link} to={"/"} className="navbar-brand">
              <img className="mb-2" src={logo} alt="" height="24" />
            </Nav.Link>
            <small className="d-block mb-3 text-muted">
              Copyright edYou &copy; {new Date().getFullYear()}
            </small>
          </div>
          <div className="col-6 col-md">
            <h5>Support</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Contact</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Support Forum
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Phone +1 (234)-567-8910
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Live Chat
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  support@edyou.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
