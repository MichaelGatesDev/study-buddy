import "./style.scss";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Col, Container, Row, Alert } from "react-bootstrap";

import { User } from "@study-buddy/common";

import logo from "../../images/logo.png";
import { performAuth } from "../../redux/auth/actions";
import { AppState } from "../../redux/store";
import SimpleAccordion from "../../components/SimpleAccordion";
import { AuthState } from "../../redux/auth/types";

interface Props {
  authState: AuthState;
  performAuth: (tokenID: string) => void;
}

const ConnectSection = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const [authedUser, setAuthedUser] = useState<User | undefined>(undefined);

  const performDisconnect = () => {
    localStorage.removeItem("idToken");
    setAuthedUser(undefined);
    console.log("Disconnected account!");
  };

  const { performAuth } = props;

  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
    if (idToken) {
      // console.log("Found cached id token");
      performAuth(idToken);
    }
  }, []);

  const onConnectSuccess = (response: any): void => {
    const googleID = response.googleId;
    const tokenID = response.tokenId;
    const accessToken = response.accessToken;

    // console.log(`
    // Google ID: ${googleID}
    // Token ID: ${tokenID}
    // Access Token: ${accessToken}
    //     `);
    performAuth(tokenID);
  };

  const onConnectFailure = (response: any): void => {
    const error = response.error;
    console.error("Failed to login!");
    console.error(error);
    setErrorMessage(error);
  };

  const onDisconnectSuccess = (): void => {
    performDisconnect();
  };

  const onDisconnectFailure = (): void => {
    console.error("Failed to disconnect");
  };

  return (
    <>
      <section id="notifications-section" className="container-fluid">
        <Row>
          <Col>
            {props.authState.error !== undefined && (
              <Alert variant={"danger"}>
                <Alert.Heading>Whoops!</Alert.Heading>
                <p> Error: {props.authState.error.toString()}</p>
              </Alert>
            )}
            {errorMessage !== undefined && (
              <Alert variant={"danger"}>
                <Alert.Heading>Whoops!</Alert.Heading>
                <p> Error: {errorMessage}</p>
              </Alert>
            )}
          </Col>
        </Row>
      </section>
      <section id="connect-section" className="container-fluid">
        <Row>
          <Col>
            <form className="form-signin">
              <img className="mb-4" src={logo} alt="edYou" height="72" />
              <h1 className="h3 mb-3 font-weight-normal">
                Connect Your Account
              </h1>
              <GoogleLogin
                className="mb-4 w-100"
                clientId="518840326133-s2tmf5d49tpkg32iac1ag6rvrsdudcfg.apps.googleusercontent.com"
                buttonText="Connect your Google Account"
                onSuccess={onConnectSuccess}
                onFailure={onConnectFailure}
                cookiePolicy={"single_host_origin"}
              />
            </form>
          </Col>
        </Row>
        <Row>
          <Col>
            <SimpleAccordion
              cards={[
                {
                  title: <div>Why do we require a Google Account?</div>,
                  content: (
                    <div>
                      There are a few reasons why we require a Google account.
                      <ul>
                        <li>
                          It is safer. For you. For us. As long as you keep your
                          Google account safe, your account can not be
                          compromised here.
                        </li>
                        <li>
                          It is reliable. When was the last time Google was
                          down?
                        </li>
                        <li>Fewer bots and spam.</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: <div>What if I do not have a Google Account?</div>,
                  content: <div></div>,
                },
                {
                  title: (
                    <div>
                      What if the email that belongs to my Google Account does
                      not end with .edu ?
                    </div>
                  ),
                  content: <div></div>,
                },
                {
                  title: <div>I am having issues connecting my account.</div>,
                  content: <div></div>,
                },
              ]}
            />
          </Col>
        </Row>
      </section>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  authState: state.auth,
});

export default connect(mapStateToProps, {
  performAuth,
})(ConnectSection);
