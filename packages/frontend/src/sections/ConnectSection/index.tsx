import "./style.scss";

import React, { useState } from "react";
import { connect } from "react-redux";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { Col, Row, Alert } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import logo from "../../images/logo.png";
import { AppState } from "../../redux/store";
import SimpleAccordion from "../../components/SimpleAccordion";
import {
  AuthState,
  AuthFailurePayload,
  AuthSuccessPayload,
  AUTH_SUCCESS,
} from "../../redux/auth/types";
import { authenticate } from "../../redux/auth/actions";
import { IAuthInfo } from "@study-buddy/common";

interface Props {
  authState: AuthState;
  authenticate: (
    idToken: string
  ) => Promise<AuthSuccessPayload | AuthFailurePayload>;
}

const ConnectSection = (props: Props): JSX.Element => {
  const { authState, authenticate } = props;
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const performAuth = async (tempAccessToken: string): Promise<IAuthInfo> => {
    let payload = await authenticate(tempAccessToken);
    if (payload.type !== AUTH_SUCCESS) {
      payload = payload as AuthFailurePayload;
      throw new Error(payload.error);
    }

    payload = payload as AuthSuccessPayload;
    const authInfo = payload.data as IAuthInfo;
    return authInfo;
  };

  const onConnectSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): void => {
    if ((response as GoogleLoginResponseOffline).code !== undefined) {
      console.error("Why are we receiving an offline response?");
      return;
    }

    const responseOk = response as GoogleLoginResponse;
    const tempAccessToken = responseOk.tokenId;
    performAuth(tempAccessToken)
      .then((authInfo: IAuthInfo) => {
        console.log(`Connected as ${authInfo.email} (${authInfo.google_id})`);

        // cache the id token so we can auto-login later
        localStorage.setItem("google_id_token", tempAccessToken);

        // redirect to home
        history.push("/");
      })
      .catch(err => {
        console.error(err);
      });
  };

  const onConnectFailure = (response: any): void => {
    const error = response.error;
    console.error("Failed to login!");
    console.error(error);
    setErrorMessage(error);
  };

  return (
    <>
      <section id="notifications-section" className="container-fluid">
        <Row>
          <Col>
            {props.authState?.error !== undefined && (
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
        <>
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
                  isSignedIn={true}
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
                            It is safer. For you. For us. As long as you keep
                            your Google account safe, your account can not be
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
        </>
      </section>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  authState: state.auth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AuthState, void, Action>
) => ({
  authenticate(
    idToken: string
  ): Promise<AuthSuccessPayload | AuthFailurePayload> {
    return dispatch(authenticate(idToken));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ConnectSection)
);
