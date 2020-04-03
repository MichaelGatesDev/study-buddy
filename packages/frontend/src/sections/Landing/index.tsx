import React from "react";

import "./style.scss";
import Button from "../../components/Button";

const LandingSection = () => {
  return (
    <section id="landing-section">
      <div className ="landing-section container-fluid">
        <div className="d-flex ">
          <div className="ml-auto p-2">
          <Button title =" submit" value ="Login /Sign Up"></Button>
          </div>
        </div>
        <h1>Educate You</h1>
        <p>Our Slogan would go here</p>
        <h3>Highlights</h3>
        <div className= "row align-items-start"> 
        <div className= "row justify-content-start">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Highlight</h5>
                <h6 className="card-subtitle mb-2 text-muted">Somethine about how its useful</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Learn More</a>
                <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Highlight</h5>
              <h6 className="card-subtitle mb-2 text-muted">Somethine about how its useful</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Learn More</a>
                <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Highlight</h5>
              <h6 className="card-subtitle mb-2 text-muted">Somethine about how its useful</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Learn More</a>
                <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Highlight</h5>
              <h6 className="card-subtitle mb-2 text-muted">Somethine about how its useful</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Learn More</a>
                <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        </div>
        <div className="col-4">
        <img src={"/../../images/layout.png"} id="layout" alt="" />
        </div>
      </div>
      </div>
     

    </div>
    <footer className="footer mt-auto py-3 navbar-dark bg-dark">
        <div className="container-fluid text-center">
          <span className="text-muted">&copy; 2020 Copyright EdYOU </span>
        </div>
    </footer>
    </section>
  );
};

export default LandingSection;
