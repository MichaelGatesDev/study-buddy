import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { Switch, withRouter, useLocation } from "react-router";

import { IAuthInfo, IUser } from "@study-buddy/common";

import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
import { AppState } from "./redux/store";
import {
  authenticate,
  fetchAuthenticatedUser,
  unauthenticate,
} from "./redux/auth/actions";
import {
  AuthState,
  AuthSuccessPayload,
  AuthFailurePayload,
  AUTH_SUCCESS,
  FetchAuthenticatedUserSuccessPayload,
  FetchAuthenticatedUserFailurePayload,
  FETCH_AUTHENTICATED_USER_SUCCESS,
} from "./redux/auth/types";
import NavBarTop from "./components/NavBarTop";
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
  const { authState, authenticate, fetchAuthenticatedUser } = props;

  const location = useLocation();

  useEffect(() => {
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

    const performFetchUser = async (
      email: string,
      googleID: string
    ): Promise<IUser> => {
      let payload = await fetchAuthenticatedUser(email, googleID);
      if (payload.type !== FETCH_AUTHENTICATED_USER_SUCCESS) {
        payload = payload as FetchAuthenticatedUserFailurePayload;
        throw new Error(payload.error);
      }

      payload = payload as FetchAuthenticatedUserSuccessPayload;
      const authedUser = payload.data as IUser;
      return authedUser;
    };

    const checkAuth = async (): Promise<void> => {
      const idToken = localStorage.getItem("google_id_token");
      if (idToken && idToken !== "") {
        const authInfo = await performAuth(idToken);
        console.log(
          `Authenticated as ${authInfo.email} (${authInfo.google_id})`
        );

        const user = performFetchUser(authInfo.email, authInfo.google_id);
        console.log("Fetched user!");
      } else {
        console.log("No id token found! Logged out or cleared storage..");
      }
    };
    checkAuth();
  }, [location]);

  return (
    <>
      <NavBarTop />
      {authState?.authenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      <Footer />
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
    tokenID: string
  ): Promise<AuthSuccessPayload | AuthFailurePayload> {
    return dispatch(authenticate(tokenID));
  },
  unauthenticate(): Promise<void> {
    return dispatch(unauthenticate());
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppBase)
);
