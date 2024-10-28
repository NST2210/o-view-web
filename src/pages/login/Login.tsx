import React from 'react';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="logo-login">
                    <img src="/src/assets/img/login_logo.png" alt="Logo" className="logo-image"/>
                </h1>
                <div className="login-form">
                    <div className="d-flex gap-4 m-b-10 m-l-16 w-100">
                        <div className="input-container">
                            <input type="text" placeholder="Insert ID" className="login-input"/>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                        </div>
                        <div className="input-container">
                            <input type="password" placeholder="Insert Password" className="login-input"/>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                        </div>
                        <button className="login-screen-button">LOGIN</button>
                    </div>
                    <div className="remember-container d-flex gap-6px">
                        <input type="checkbox" id="remember"/>
                        <label htmlFor="remember">Remember ID</label>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
