import "./style.scss";
import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Col, Container } from "react-bootstrap";

import { User } from "@study-buddy/common";

import SimpleAccordion from "../../components/SimpleAccordion";

interface AuthSuccessResponse {
  error?: string;
  user?: User;
}

export const AuthSection = () => {
  const [authedUser, setAuthedUser] = useState<User | undefined>(undefined);

  const isAuthed = (): boolean => authedUser !== undefined;

  const performConnect = (tokenID: string): Promise<void> => {
    return fetch("http://localhost:3000/api/v1/auth/connect", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: tokenID,
      }),
    })
      .then(resp => resp.json())
      .then((json: AuthSuccessResponse) => {
        if (json.error !== undefined) {
          console.error("Failed to authenticate with server!");
          console.error(json.error);
          return;
        }
        console.log("Succesfully connected account!");
        console.log(json);
        setAuthedUser(json.user);
        localStorage.setItem("idToken", tokenID);
      })
      .catch((err: Error) => {
        console.error("Failed to authenticate with server!");
        console.error(err.message);
      });
  };

  const performDisconnect = () => {
    localStorage.removeItem("idToken");
    setAuthedUser(undefined);
    console.log("Disconnected account!");
  };

  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
    if (idToken) {
      // console.log("Found cached id token");
      performConnect(idToken);
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
    performConnect(tokenID);
  };

  const onConnectFailure = (response: any): void => {
    const details = response.details;

    console.error("Failed to login!");
    console.error(details);
    alert(details);
  };

  const onDisconnectSuccess = (): void => {
    performDisconnect();
  };

  const onDisconnectFailure = (): void => {
    console.error("Failed to disconnect");
  };

  return (
    <section id="auth-section">
      <Container fluid>
        <Col>
          <div className="connect-card">
            <h2>Connect your Account</h2>
            <p>
              Whether you are new here or a returning user, you can connect to
              your account by pressing the connect button.
            </p>

            <div>
              {!isAuthed() ? (
                <GoogleLogin
                  className="mb-4"
                  clientId="518840326133-s2tmf5d49tpkg32iac1ag6rvrsdudcfg.apps.googleusercontent.com"
                  buttonText="Connect"
                  onSuccess={onConnectSuccess}
                  onFailure={onConnectFailure}
                  cookiePolicy={"single_host_origin"}
                />
              ) : (
                <>
                  <GoogleLogout
                    clientId="518840326133-s2tmf5d49tpkg32iac1ag6rvrsdudcfg.apps.googleusercontent.com"
                    buttonText="Disconnect"
                    onFailure={onDisconnectFailure}
                    onLogoutSuccess={onDisconnectSuccess}
                  />
                  <p>Currently connected as {authedUser?.email}</p>
                </>
              )}
            </div>

            <h3>Account Connection FAQ</h3>
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
          </div>
        </Col>
      </Container>
    </section>
  );
};
