import React from 'react'
import "./style.scss";
import {Container} from 'react-bootstrap';
    import Button from '../../components/Button';

const ProfileSection = () => {
    return (
        <section>
            <div className="ProfileSection">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <h1><img src={'/../../images/logo.png'} id="logo" alt ="" /></h1>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        </form>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Profile
                                </a>
                                <div className ="container-fluid">
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">View Profile</a>
                                        <a className="dropdown-item" href="#">Another Thing</a>
                                    <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Log Out</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">  
                    <div className="row">
                        <div className ="col-4">
                            <img src={'/../../images/penguin.png'} id="profilePhoto" alt =""/>
                        </div>
                        <div className = "col-8">
                            <p className="h2"> Display Name</p>
                            <hr></hr>
                            <form>
                                <fieldset disabled>
                                    <div className= "form-group">
                                        <label className="exampleInputEmail1">Username</label>
                                        <input type="text" id="disabledInput" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                                        <small  className="form-text text-muted">Username cannot be changed.</small>
                                    </div>
                                </fieldset>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" aria-label= "Password"/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Email"id="exampleInputEmail1" aria-label = "Email" aria-describedby="emailHelp"/>
                                </div>
                                <fieldset disabled>
                                    <div className="form-group">
                                        <label>School Id</label>
                                        <input type="text" id="disabledInput" className="form-control" placeholder="School Id" aria-label="School Id" aria-describedby="basic-addon1"/>
                                    </div>
                                </fieldset>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;