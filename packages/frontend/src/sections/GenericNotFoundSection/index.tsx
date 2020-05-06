import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

const GenericNotFoundSection = (): JSX.Element => {
  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <Jumbotron className="my-4">
            <h2>404 - Page Not Found</h2>
            <p>Sorry! The page you are looking for does not seem to exist.</p>
            <p>
              <Link to="/">Home</Link>
            </p>
          </Jumbotron>
        </div>
      </div>
    </section>
  );
};
export default GenericNotFoundSection;
