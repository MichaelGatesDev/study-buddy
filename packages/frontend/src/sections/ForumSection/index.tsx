import "./style.scss";
import React from "react";
import { connect } from "react-redux";

import { AuthState } from "../../redux/auth/types";
import { SchoolsState } from "../../redux/schools/types";
import { AppState } from "../../redux/store";
import { useHistory, withRouter } from "react-router";

interface Props {
  authState: AuthState;
  schoolsState: SchoolsState;
}

const ForumSection = (props: Props): JSX.Element => {
  const history = useHistory();

  const user = props.authState.authedUser;
  if (user === undefined) {
    return <h1>Could not find the user object!</h1>;
  }

  const school = user.school;
  if (school === undefined || school == null) {
    history.push("/settings");
    console.log("Redirecing to settings from forum list...");
    return <p>Redirecting to settings...</p>;
  }

  return (
    <section>
      <div className="ForumSection container">
        <div className="title">
          <h3> Welcome to the Course Forums </h3>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              FORUM
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="icon"></div>
                <div className="card-body">
                  <h5 className="card-title course">
                    <a href="/">Course Name</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course">
                    <a href="/">Course Name</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course">
                    <a href="/">Course Name</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course">
                    <a href="/"> Course Name</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course">
                    <a href="/">Course Name</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course">
                    <a href="/">Course Name</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course">
                    <a href="/"> Course Name</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course">
                    <a href="/">Course Name</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course">
                    <a href="/">Course Name</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: AppState) => ({
  authState: state.auth,
  schoolsState: state.schools,
});

const mapDispatchToProps = () => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ForumSection)
);
