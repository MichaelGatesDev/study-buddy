import React, { useEffect } from "react";
import { connect } from "react-redux";

import { AppState } from "../../redux/store";
import { performAuth } from "../../redux/auth/actions";
import { AuthState } from "../../redux/auth/types";

interface Props {
  authState?: AuthState;
  performAuth: (tokenID: string) => void;
}

const AutoAuthenticator = (props: Props) => {
  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
    if (idToken) {
      console.log("Auth token cached, performing auto-connect");
      props.performAuth(idToken);
    } else {
      console.log("No auth token cached");
    }
  }, []);
  return <div className="authenticator"></div>;
};

const mapStateToProps = (state: AppState) => ({
  authState: state.auth,
});

export default connect(mapStateToProps, {
  performAuth,
})(AutoAuthenticator);
