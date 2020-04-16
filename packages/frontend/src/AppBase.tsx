import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
import { AppState } from "./redux/store";
import { performAuth } from "./redux/auth/actions";
import {
  AuthState,
  AuthSuccessPayload,
  AuthFailurePayload,
  AUTH_SUCCESS,
} from "./redux/auth/types";

interface Props {
  authState?: AuthState;
  onPerformAuth?: (
    tokenID: string
  ) => Promise<AuthSuccessPayload | AuthFailurePayload>;
}

const AppBase = (props: Props): JSX.Element => {
  useEffect(() => {
    const idToken = localStorage.getItem("google_id_token");
    if (idToken) {
      props
        .onPerformAuth?.(idToken)
        .then((payload: AuthSuccessPayload | AuthFailurePayload) => {
          if (payload.type === AUTH_SUCCESS) {
            const checkedPayload = payload as AuthSuccessPayload;
            console.log("Authenticated as " + checkedPayload.data.email);
          } else {
            const checkedPayload = payload as AuthFailurePayload;
            console.error("Failed to authenticate!");
            console.error(checkedPayload.error);
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
    <>
      {props.authState?.authenticated ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp />
      )}
    </>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBase);
