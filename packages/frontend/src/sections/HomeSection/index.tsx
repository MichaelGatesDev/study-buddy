import React from 'react'
import "./style.scss";
    import Button from '../../components/Button';

const HomeSection = () => {
    return (
        <section>
            <div className = "HomeSection">
                <h1>edYOU</h1>
                <div id = "Container">
                    <form>
                        <div id = "Login">
                            <h2>Login</h2>
                            <p>Username</p>
                            <input type="text" name="Username" id="usr"/>
                            <p>Password</p>
                            <input type="password" name= "Password" id= "PwdLogin"/>
                            <Button title="Login" value="Login"></Button>
                        </div>
                    </form>
                    <form>
                        <div id = "SignUp">
                            <h2>Sign Up</h2>
                            <p>School Email</p>
                            <input type="email" name="" id=""/>
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
