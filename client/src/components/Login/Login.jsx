import React from 'react'
import "./login.css"

export const Login = () => {
    var isShowLogin,isShowSignup = true;

    function Login() {
        return (
            <form
                className="form-content"
            >
                <h2>Login</h2>
                <div className="group-input">
                    <div className='username input-box'>
                        <label>
                            <b>Username</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            name="uname"
                            required=""
                        />
                    </div>

                    <div className='password  input-box'>
                        <label>
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            required=""
                        />
                    </div>
                </div>


                <button className='login-btn' type="submit">Login</button>
                <label className='checkbox-remenber'>
                    <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
                    Remember me
                </label>


                <div className='signup-password'>
                    <span >signup</span>

                    <span className="psw">
                        Forgot <a href="#">password?</a>
                    </span>
                </div>

                <span className="close-btn" title="Close Modal">&times;</span>
            </form>


        )
    }

    function Signup() {
        return (
            <form
                className="form-content"
            >
                <h2>Signup</h2>
                <div className="group-input">
                    <div className='username input-box'>
                        <label>
                            <b>Username</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            name="uname"
                            required=""
                        />
                    </div>

                    <div className='password  input-box'>
                        <label>
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            required=""
                        />
                    </div>

                    <div className='repeat-password  input-box'>
                        <label>
                            <b>Repeat Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            name="psw"
                            required=""
                        /> 
                    </div>
                </div>


                <button className='login-btn' type="submit">Signup</button>
                <label className='checkbox-remenber'>
                    <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
                    Remember me
                </label>


                <div className='signup-password'>
                    <span>Login</span>

                    <span className="psw">
                        Forgot <a href="#">password?</a>
                    </span>
                </div>

                <span className="close-btn" title="Close Modal">&times;</span>
            </form>
        )
    }

    function ShowForm(_isShowLogin = true,_isShowSignup = false){
        if(_isShowLogin){
            document.getElementById("modal").innerHTML = Login();
        }

        if(_isShowSignup){
            Signup();
        }
    }

    return (
        <div className='login-modal' id='modal'>
            <div className='overplay'></div>
            {ShowForm()}
        </div>
    )
}
