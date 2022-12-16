import React from "react";
import "../style/Login.css";
import {FcGoogle} from "react-icons/fc";

const Login = () => {
  return (
    <div className="container-fluid-custom bg-secondary">
      <div className="menu-row mx-auto">
        <div className="col-md-6 col-6 text-center">
          <button className="menu-button active">SIGN UP</button>
        </div>
        <div className="col-md-6 col-6 text-center">
          <button className="menu-button">SIGN IN</button>
        </div>
      </div>
      <div className="input-row mx-auto bg-white">
        <div className="col-md-12 col-12 mx-auto">
          <div className="row mx-auto">
            <div className="col-md-5 col-5 border rounded social-button">
            <FcGoogle className="google-icon" size={30}/>
                <span className="social-text ps-2">Continue with Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
