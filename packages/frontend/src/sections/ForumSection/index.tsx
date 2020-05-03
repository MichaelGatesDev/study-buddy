import React from "react";
import "./style.scss";
import chat from "../../images/chat.png"

const ForumSection = (): JSX.Element => {
  return (
    <section>
      <div className="ForumSection container">
        <div className="title">
          <h3> Welcome to the Course Forums </h3>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">FORUM</li>
          </ol>
        </nav>
        <div className="row">
          <div className ="col">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="icon">
                 
                </div>
                <div className="card-body">
                  <h5 className="card-title course"><a href="#" >Course Name</a></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course"><a href="#" >Course Name</a></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course"><a href="#" >Course Name</a></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
            </ul> 
          </div>
          <div className ="col">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course"><a href="#" > Course Name</a></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course"><a href="#" >Course Name</a></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course"><a href="#">Course Name</a></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
            </ul> 
          </div>

          <div className ="col">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course"><a href="#" > Course Name</a></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course"><a href="#" >Course Name</a></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="card-body">
                  <h5 className="card-title course"><a href="#">Course Name</a></h5>
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

export default ForumSection;
