import "./style.scss";
import React, { Component, constructor } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from "react-redux";
import { AuthState } from "../../redux/auth/types";
import { SchoolState } from "../../redux/schools/types";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";


interface Props {
  authState?: AuthState;
  schoolsState?: SchoolState;
}

export default class Course extends Component {

  constructor(props: Readonly<{}>) {
      super(props);
      this.state = {
          title: '',
          content: '',
      };

      this.postThread = this.postThread.bind(this);
      this.changeTitle = this.changeTitle.bind(this);
      this.changeContent = this.changeContent.bind(this);
  }

  postThread() {
      axios.post('/threads', {
          title: this.state,
          content: this.state
      })
      .then(response => {
          this.setState({title: '', content: ''});
        
          (document.getElementById('new-thread-title')as HTMLInputElement).value = '';
          (document.getElementById('new-thread-content')as HTMLInputElement).value = '';
      });
  }

  changeTitle(event: { target: { value: any; }; }) {
      this.setState({title: event.target.value});
  }

  changeContent(event: { target: { value: any; }; }) {
      this.setState({content: event.target.value});
  }
render(){
  return (
    <section className = "content">
      <div className="CourseSection container">
        <div className="title">
          <h3> Welcome to the Course Forums </h3>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className=""><Nav.Link as={Link} to={"/forum"}>FORUM</Nav.Link></li>
            <li id="divider">|</li>
            <li className=" acxtive" aria-current="page"><Nav.Link as={Link} to={"/course"}>COURSE NAME</Nav.Link></li>
          </ol>
        </nav>
        <div className="row" >
          <div className="col">
           <div className ="card"  >
            <ul className="list-group list-group-flush">
              <li className="list-group-item" id="create-thread">
                <div className="card-body">
                  
                  <h5 className="card-title course"> </h5>
                      <p className="card-text"> 
                      
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    <h6>Author of Post <span className="badge">posted time</span></h6>
                  
                </div>
              </li>
              <li className="list-group-item">
                <div className="icon"></div>
                <div className="card-body">
                  <h5 className="card-title course"> Question Subject </h5>
                      <p className="card-text"> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    <h6>Author of Post <span className="badge">posted time</span></h6>
                  
                </div>
              </li>
              <li className="list-group-item">
                <div className="icon"></div>
                <div className="card-body">
                  <h5 className="card-title course"> Question Subject </h5>
                      <p className="card-text"> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    <h6>Author of Post <span className="badge">posted time</span></h6>
                  
                </div>
              </li>
            </ul>
            <div className="panel panel-default ca card-body">
              <div className="panel-heading">Make a post</div>

              <div className="panel-body ">
                  <form>
                      <div className="form-group">
                          <label htmlFor="new-thread-title">Title</label>
                          <input id="new-thread-title" className="form-control card-title" onChange={this.changeTitle}></input>
                      </div>
                      <div className="form-group">
                          <label htmlFor="new-thread-content">Content</label>
                          <textarea id="new-thread-content" className="form-control card-text" onChange={this.changeContent} ></textarea>
                      </div>
                  </form>
              </div>

              <div className="panel-footer">
                  <button className="btn btn-primary" onClick={this.postThread}>
                      Post
                  </button>
              </div>
          </div>
           </div>
           
        </div>
      </div>
      </div>
    </section>
  );
};
};

if (document.getElementById('create-thread')) {
  ReactDOM.render(<Course />, document.getElementById('create-thread'));
}
