import React from "react";

import "./style.scss";
import Button from "../../components/Button";

const LandingSection = () => {
  return (
    <section id="landing-section">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <div className="d-flex "> 
          <img src={"/../../images/logo.png"} id ="logo"/>
          <div className="ml-auto p-2">
           
          <button type="button" className="btn btn-secondary btn-sm"id="button" > 
            {" "}
            LOGIN / SIGN UP
          </button>
          </div>
        </div>
      </nav>
       
        <div className= "landingImg d-flex align-content-end flex-wrap"> 
        
          <div className= "container-fluid d-flex justify-content-center">
            <button type="button" className="btn btn-secondary btn-lg" id="learnMore">Learn More</button>
          </div>  
        </div>

        <div className ="container-fluid">
        <h1 className="display-2" >Educate You</h1>
       
        <h2> Slogan would go here</h2>
        <hr></hr>
        <div className= "row d-flex justify-content-center"> 
        <div className= "row justify-content-start">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Highlight 1</h5>
                <h6 className="card-subtitle mb-2 text-muted">Something about how its useful</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Learn More</a>
                <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Highlight 2</h5>
              <h6 className="card-subtitle mb-2 text-muted">Something about how its useful</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Learn More</a>
                <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>  
        </div>
        <div className= "row justify-content-start">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Highlight 3</h5>
              <h6 className="card-subtitle mb-2 text-muted">Something about how its useful</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Learn More</a>
                <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Highlight 4</h5>
              <h6 className="card-subtitle mb-2 text-muted">Something about how its useful</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Learn More</a>
                <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>

      </div>
        <div className= "row justify-content-center ">
        <div className="col-8">
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
