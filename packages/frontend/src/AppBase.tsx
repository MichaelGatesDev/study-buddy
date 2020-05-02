import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
import { AppState } from "./redux/store";
import { performAuth } from "./redux/auth/actions";
import { fetchSchool } from "./redux/schools/actions";
import {
  AuthState,
  AuthSuccessPayload,
  AuthFailurePayload,
  AUTH_SUCCESS,
} from "./redux/auth/types";
import {
  FetchSchoolSuccessPayload,
  FetchSchoolFailurePayload,
} from "./redux/schools/types";
import { HashRouter } from "react-router-dom";
import { NavBarTop } from "./components/NavBarTop";
import { Switch } from "react-router";
import { Footer } from "./components/Footer";

interface Props {
  authState?: AuthState;
  onPerformAuth?: (
    tokenID: string
  ) => Promise<AuthSuccessPayload | AuthFailurePayload>;
  fetchSchool?: (
    schoolID: number
  ) => Promise<FetchSchoolSuccessPayload | FetchSchoolFailurePayload>;
}

const AppBase = (props: Props): JSX.Element => {
  useEffect(() => {
    const idToken = localStorage.getItem("google_id_token");
    if (idToken && idToken !== "") {
      props
        .onPerformAuth?.(idToken)
        .then((payload: AuthSuccessPayload | AuthFailurePayload) => {
          if (payload.type === AUTH_SUCCESS) {
            const checkedPayload = payload as AuthSuccessPayload;
            console.log(`Authenticated as ${checkedPayload.data.email}`);
          } else {
            const checkedPayload = payload as AuthFailurePayload;
            console.error("Failed to authenticate!");
            console.error(checkedPayload.error);
            localStorage.removeItem("google_id_token");
          }
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
      <NavBarTop authedUser={props.authState?.authedUser} />
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
  onPerformAuth(
    tokenID: string
  ): Promise<AuthSuccessPayload | AuthFailurePayload> {
    return dispatch(performAuth(tokenID));
  },
  fetchSchool(
    schoolID: number
  ): Promise<FetchSchoolSuccessPayload | FetchSchoolFailurePayload> {
    return dispatch(fetchSchool(schoolID));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBase);
