import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/login_logo.png';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="logo-login">
                    <img src={Logo} alt="Logo" className="logo-image"/>
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
                        <button className="login-screen-button" onClick={()=>{
                            navigate('/work-list');
                        }}>LOGIN</button>
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
