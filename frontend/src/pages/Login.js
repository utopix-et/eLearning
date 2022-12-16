import React from "react";
import Logo  from "../assets/Logo/logo.png";
import "../style/Login.css";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Login = () => {
  return (
    <div className="container-fluid mx-auto py-3">
        <div className="row my-4">
            <div className="col-12 col-md-12 mx-auto text-center">
                <img src={Logo} alt="Logo" className="img-fluid" />
            </div>
            </div>
      <div className="menu-row mx-auto bg-white">
        <div className="col-md-6 col-6 text-center">
          <button className="menu-button">SIGN UP</button>
        </div>
        <div className="col-md-6 col-6 text-center">
          <button className="menu-button active">SIGN IN</button>
        </div>
      </div>

      <div className="container-fluid-custom mx-auto">
        <div className="social-row mx-auto bg-white">
          <div className="col-md-12 col-12 mx-auto">
            <div className="row mx-auto">
              <div className="col-md-5 col-11 rounded social-button btn pt-2">
                <FcGoogle className="google-icon" size={30} />
                <span className="social-text ps-2">Continue with Google</span>
              </div>
              <div className="col-md-5 col-11 rounded social-button btn pt-2">
                <BsGithub className="github-icon " size={30} />
                <span className="social-text ps-2">Continue with Github</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center pb-3 bg-white">Or</div>
        
        <div className="form-row mx-auto bg-white mt-4">
          <div className="col-md-12 col-12 mx-auto">
            <div className="row mx-auto">
              <div className="col-md-10 col-12 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-10 col-12 mx-auto my-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="col-md-10 col-12 mx-auto my-4">
            <button className="btn btn-primary form-control">SIGN IN</button>
            </div>
            <div className="col-md-10 col-12 mx-auto text-center my-2">
            Forgot Password?
            <a className="text-decoration-none" href="#Forgot"> Reset</a>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
