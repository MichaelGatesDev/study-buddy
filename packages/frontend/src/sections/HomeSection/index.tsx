import React from 'react'
import "./style.scss";
    import Button from '../../components/Button';


const HomeSection = () => {
    return (
        <section>
            <div className = "HomeSection">
            <img src={'/../../images/edYou.png'} alt ="" />
                    <div id = "Container">
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
        </section>
    );
};

export default HomeSection;
