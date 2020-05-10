import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";

import { ICourse } from "@study-buddy/common";

import { AppState } from "../../redux/store";
import { AuthState } from "../../redux/auth/types";
import {
  CoursesState,
  FetchCoursesSuccessPayload,
  FetchCoursesFailurePayload,
} from "../../redux/courses/types";

import { SimpleAlert } from "../../components/SimpleAlert";
import { SimpleDropdown } from "../../components/SimpleDropdown";
import { fetchCourses } from "../../redux/courses/actions";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { ConfirmationModal } from "../../components/SimpleModal";
import {
  UserState,
  UpdateUserSuccessPayload,
  UpdateUserFailurePayload,
  UPDATE_USER_SUCCESS,
} from "../../redux/users/types";
import {
  UpdateUserCourseAction,
  updateUserCourse,
} from "../../redux/users/actions";

interface Props {
  authState: AuthState;

  coursesState: CoursesState;
  fetchCourses: (
    schoolID: number
  ) => Promise<FetchCoursesSuccessPayload | FetchCoursesFailurePayload>;

  usersState: UserState;
  updateUserCourse: (
    userID: number,
    courseID: number,
    action: UpdateUserCourseAction
  ) => Promise<UpdateUserSuccessPayload | UpdateUserFailurePayload>;
}

const HomeSection = (props: Props): JSX.Element => {
  const history = useHistory();

  const [courseModalVisible, setCourseModalVisible] = useState<boolean>(false);
  const [selectedCourseID, setSelectedCourseID] = useState(-1);

  const user = props.authState.authedUser;
  const school = user?.school;

  useEffect(() => {
    if (user && school) {
      props.fetchCourses(school.id!);
    }
  }, [user, school]);

  if (user === undefined) {
    return (
      <SimpleAlert
        title="Failed to find the user object!"
        variant="danger"
        content="This probably occurred because the web client thinks that it is authenticated when infact it is not.. at least not properly."
      />
    );
  }

  if (school === undefined || school == null) {
    // wrapped in a timeout to prevent state update error
    setTimeout(() => {
      console.log("Redirecting to settings...");
      history.push("/settings");
    }, 0);
    return <p>Redirecting to settings...</p>;
  }

  const courses = user.courses;

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
            {courses !== undefined && courses != null && courses.length > 0 ? (
              user.courses?.map((course: ICourse) => {
                return (
                  <Card
                    key={course.id}
                    bg={"light"}
                    // key={idx}
                    text={"dark"}
                    style={{ width: "18rem" }}
                    className="mb-4 d-inline-block mr-2"
                  >
                    <Card.Header>
                      {course.course_number} - {course.course_title}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>Students: 0</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <p>You are not subscribed to any courses!</p>
            )}
            <div>
              <Button
                variant="success"
                className="mb-4"
                onClick={() => {
                  setCourseModalVisible(true);
                }}
              >
                Add Course
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmationModal
        visible={courseModalVisible}
        onHide={async (success?: boolean): Promise<void> => {
          if (success) {
            if (selectedCourseID === -1) {
              alert("You must select a course to add or close this window!");
              return;
            }
            console.log("TODO: register user in course " + selectedCourseID);

            try {
              let payload = await props.updateUserCourse(
                user.id!,
                selectedCourseID,
                "add"
              );
              if (payload.type === UPDATE_USER_SUCCESS) {
                // const user = payload.data;
                console.log("Succesfully Updated user!");
                // alert("Settings saved!");

                // reload so we can fetch newest
                window.location.reload();
              } else {
                payload = payload as UpdateUserFailurePayload;
                console.error("Failed to update user!");
                console.error(payload.error);
              }
            } catch (error) {
              console.error("Failed to update user!");
              console.error(error);
            }
          } else {
            setSelectedCourseID(-1);
          }
          setCourseModalVisible(false);
        }}
        headerContents={<span>Select a course</span>}
        contents={
          <SimpleDropdown
            controlID="course-dropdown"
            label="Course"
            selectLabel="Select a course..."
            options={
              // options are the school's offered courses
              props.coursesState.fetchedCourses
                // don't show courses the user is already enrolled in
                ?.filter(courseA => {
                  return (
                    user.courses?.find(courseB => courseB.id === courseA.id) ==
                    null
                  );
                })
                // map each course to a dropdown item
                .map(course => {
                  return {
                    label: `${course.course_number} ${course.course_title}`,
                    value: course.id,
                  };
                }) ?? []
            }
            value={selectedCourseID}
            onChange={(newValue): void => {
              console.debug("Selected course ID: " + (newValue as number));
              setSelectedCourseID(newValue as number);
            }}
          />
        }
        confirmButtonText="Add"
        closeButtonText="Cancel"
      />
    </section>
  );
};

const mapStateToProps = (state: AppState) => ({
  authState: state.auth,
  coursesState: state.courses,
  usersState: state.users,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AuthState, void, Action>
) => ({
  fetchCourses(
    schoolID: number
  ): Promise<FetchCoursesSuccessPayload | FetchCoursesFailurePayload> {
    return dispatch(fetchCourses({ school_id: schoolID }));
  },
  updateUserCourse(
    userID: number,
    courseID: number,
    action: UpdateUserCourseAction
  ): Promise<UpdateUserSuccessPayload | UpdateUserFailurePayload> {
    return dispatch(updateUserCourse(userID, courseID, action));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeSection)
);
