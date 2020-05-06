import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { HashRouter } from "react-router-dom";
import { Switch } from "react-router";

import { IAuthInfo, IUser } from "@study-buddy/common";

import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
import { AppState } from "./redux/store";
import { authenticate, fetchAuthenticatedUser } from "./redux/auth/actions";
import {
  AuthState,
  AuthSuccessPayload,
  AuthFailurePayload,
  AUTH_SUCCESS,
  FetchAuthenticatedUserSuccessPayload,
  FetchAuthenticatedUserFailurePayload,
  FETCH_AUTHENTICATED_USER_SUCCESS,
} from "./redux/auth/types";
import { NavBarTop } from "./components/NavBarTop";
import { Footer } from "./components/Footer";

interface Props {
  authState: AuthState;
  authenticate: (
    tokenID: string
  ) => Promise<AuthSuccessPayload | AuthFailurePayload>;
  fetchAuthenticatedUser: (
    email: string,
    googleID: string
  ) => Promise<
    FetchAuthenticatedUserSuccessPayload | FetchAuthenticatedUserFailurePayload
  >;
}

const AppBase = (props: Props): JSX.Element => {
  const performAuth = async (tempAccessToken: string): Promise<IAuthInfo> => {
    let payload = await props.authenticate(tempAccessToken);
    if (payload.type !== AUTH_SUCCESS) {
      payload = payload as AuthFailurePayload;
      throw new Error(payload.error);
    }

    payload = payload as AuthSuccessPayload;
    const authInfo = payload.data as IAuthInfo;
    return authInfo;
  };

  const performFetchUser = async (
    email: string,
    googleID: string
  ): Promise<IUser> => {
    let payload = await props.fetchAuthenticatedUser(email, googleID);
    if (payload.type !== FETCH_AUTHENTICATED_USER_SUCCESS) {
      payload = payload as FetchAuthenticatedUserFailurePayload;
      throw new Error(payload.error);
    }

    payload = payload as FetchAuthenticatedUserSuccessPayload;
    const authedUser = payload.data as IUser;
    return authedUser;
  };

  useEffect(() => {
    const idToken = localStorage.getItem("google_id_token");
    if (idToken && idToken !== "") {
      performAuth(idToken)
        .then((authInfo: IAuthInfo) => {
          console.log(
            `Authenticated as ${authInfo.email} (${authInfo.google_id})`
          );

          performFetchUser(authInfo.email, authInfo.google_id)
            .then(() => {
              console.log("Fetched user!");
            })
            .catch(err => {
              console.error(err);
            });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, []);

  if (props.authState?.authenticating) {
    // TODO show waiting
    return (
      <div>
        <p>Authenticating...</p>
      </div>
    );
  }

  return (
    <HashRouter basename="/">
      <NavBarTop authInfo={props.authState?.authInfo} />
      <Switch>
        {props.authState?.authenticated ? (
          <AuthenticatedApp />
        ) : (
          <UnauthenticatedApp />
        )}
      </Switch>
      <Footer />
    </HashRouter>
  );
};

const mapStateToProps = (state: AppState) => ({
  authState: state.auth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AuthState, void, Action>
) => ({
  authenticate(
    tokenID: string
  ): Promise<AuthSuccessPayload | AuthFailurePayload> {
    return dispatch(authenticate(tokenID));
  },
  fetchAuthenticatedUser(
    email: string,
    googleID: string
  ): Promise<
    FetchAuthenticatedUserSuccessPayload | FetchAuthenticatedUserFailurePayload
  > {
    return dispatch(fetchAuthenticatedUser(email, googleID));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBase);
