import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";

import { ICourse, ISchool } from "@study-buddy/common";

import { AppState } from "../../redux/store";
import { AuthState } from "../../redux/auth/types";
import { SchoolState } from "../../redux/schools/types";
import { SimpleAlert } from "../../components/SimpleAlert";

interface Props {
  authState: AuthState;
  schoolsState: SchoolState;
}

const HomeSection = (props: Props): JSX.Element => {
  const history = useHistory();

  const user = props.authState.authedUser;
  if (user === undefined) {
    return (
      <SimpleAlert
        title="Failed to find the user object!"
        variant="danger"
        content="This probably occurred because the web client thinks that it is authenticated when infact it is not.. at least not properly."
      />
    );
  }

  const school = user.school;
  if (school === undefined || school == null) {
    // wrapped in a timeout to prevent state update error
    setTimeout(() => {
      console.log("Redirecting to settings...");
      history.push("/settings");
    }, 0);
    return <p>Redirecting to settings...</p>;
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="my-4">Your Courses at {school.display_name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {user.school?.courses?.map((course: ICourse) => {
              return (
                <Card
                  bg={"light"}
                  // key={idx}
                  text={"dark"}
                  style={{ width: "18rem" }}
                >
                  <Card.Header>{course.course_number}</Card.Header>
                  <Card.Body>
                    <Card.Title>{course.course_title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
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
  connect(mapStateToProps, mapDispatchToProps)(HomeSection)
);
