import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

import { ICourse, ISchool } from "@study-buddy/common";

import { AppState } from "../../redux/store";
import { AuthState } from "../../redux/auth/types";
import { SchoolState } from "../../redux/schools/types";

interface Props {
  authState?: AuthState;
  schoolsState?: SchoolState;
}

const HomeSection = (props: Props): JSX.Element => {
  const user = props.authState?.authedUser;
  if (user === undefined) {
    return <h1>Could not find the user object!</h1>;
  }

  const school: ISchool = (user as any).School;

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
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>Example Card Title </Card.Title>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeSection);
