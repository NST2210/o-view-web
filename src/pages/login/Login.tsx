import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="logo-login">
          <img src="/src/assets/img/login_logo.png" alt="Logo" className="logo-image" />
        </h1>
        <div className="login-form">
          <input type="text" placeholder="Insert ID" className="login-input" />
          <input type="password" placeholder="Insert Password" className="login-input" />
          <button className="login-screen-button">LOGIN</button>
          <div className="remember-container d-flex gap-6px">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember ID</label>
          </div>
          
        </div>
        <div className="input-container">
          <input className="id-input" type="text" placeholder="Insert ID" />
          <div className="top-right"></div>
          <div className="bottom-left"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
