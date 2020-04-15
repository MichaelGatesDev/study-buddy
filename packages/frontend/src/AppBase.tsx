import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
import { AppState } from "./redux/store";
import { performAuth } from "./redux/auth/actions";
import { AuthState } from "./redux/auth/types";

interface Props {
  authState: AuthState;
  performAuth: (tokenID: string) => void;
}

const AppBase = (props: Props) => {
  const { performAuth } = props;

  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
    if (idToken) {
      performAuth(idToken);
    }
  }, []);

  return (
    <>
      {props.authState.authedUser !== undefined ? (
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

export default connect(mapStateToProps, {
  performAuth,
})(AppBase);
