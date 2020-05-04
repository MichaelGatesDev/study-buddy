import "./style.scss";

import React from "react";

const LandingSection = (): JSX.Element => {
  return (
    <section id="landing-section">
      <main>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active landingImg">
              <div className="container">
                <div className="carousel-caption text-center">
                  <h1 id="slogan"></h1>
                  <p id="slogan">
                    edYou is a platform for students to learn more from their{" "}
                    <br />
                    peers without the fear fo being called dumb.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-dark" href="#" role="button">
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className="display-2">edYou</h1>
          <h2> Study Better</h2>
          <hr></hr>
        </div>
        <div className="container d-flex justify-content-center">
          <div className="row d-flex justify-content-between ">
            <div className="row justify-content-start">
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Anonymous Chatting</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Something about how its useful
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="card-link">
                      Learn More
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Highlight 2</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Something about how its useful
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="card-link">
                      Learn More
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-start">
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Highlight 3</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Something about how its useful
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="card-link">
                      Learn More
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Highlight 4</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Something about how its useful
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="card-link">
                      Learn More
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default LandingSection;
