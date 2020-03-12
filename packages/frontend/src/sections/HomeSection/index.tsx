import React from 'react'
import "./style.scss";
    import Button from '../../components/Button';



const HomeSection = () => {
    return (
        <section>
            <div className = "HomeSection">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">
                            <h1><img src={'/../../images/logo.png'} id="logo" alt ="" /></h1>
                        </a>
                        <div>
                            <form>
                                <button type="button" className="btn btn-secondary"> Login / Sign Up</button>
                            </form>
                        </div>
                    </nav>
                <div className="container">
                    <div className="row">
                        <div> 
                            <form>
                                <h2>Login</h2>
                                <div className="login-group">
                                    <p>Username</p>
                                    <input type="text" className="login-control" />
                                </div>
                                <div className="login-group">
                                    <p>Password</p>
                                    <input type="password" className="login-control"/>
                                </div>
                                <Button title="submit" value ="Login"></Button>
                                <p className="forgot-password text-right">
                                <a href="#"> Forgot password?</a>
                                </p>
                            </form>
                        </div>
                        <div>
                            <form>
                                <div className = "SignUp-group">
                                    <h2>Sign Up</h2>
                                        <p>School Email</p>
                                        <input type="text" className="signup-control" />
                                        <p>Password</p>
                                    <input type="password" name="" id="PwdSignUp"/>
                                    <p>Repeat Password</p>
                                    <input type="password" name="" id="PwdSignUp2"/>
                                    <Button title = "Signup" value ="Sign Up"></Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
