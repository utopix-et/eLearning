import React from "react";
import '../style/Login.css';

const Login = () => {
    return(
        <div className="container-fluid bg-secondary">
            <div className="row w-50 bg-warning mx-auto">
                <div className="col-6 text-center">
                    <button>Left Side</button>
                </div>
                <div className="col-6  text-center">
                    <button>Right Side</button>
                </div>
            </div>
        </div>
    );
}

export default Login;