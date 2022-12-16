import React from "react";
import "../style/Login.css";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Login = () => {
  return (
    <div className="container-fluid mx-auto">
      <div className="menu-row mx-auto bg-white">
        <div className="col-md-6 col-6 text-center">
          <button className="menu-button active">SIGN UP</button>
        </div>
        <div className="col-md-6 col-6 text-center">
          <button className="menu-button">SIGN IN</button>
        </div>
      </div>
      
    <div className="container-fluid-custom mx-auto">
      <div className="social-row mx-auto bg-white">
        <div className="col-md-12 col-12 mx-auto">
          <div className="row mx-auto">
            <div className="col-md-5 col-10 rounded social-button btn">
              <FcGoogle className="google-icon" size={30} />
              <span className="social-text ps-2">Continue with Google</span>
            </div>
            <div className="col-md-5 col-10 rounded social-button btn">
              <BsGithub className="github-icon" size={30} />
              <span className="social-text ps-2">Continue with Github</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center mt-3 bg-white">
      Or
      </div>
      
    </div>
    </div>
  );
};

export default Login;
