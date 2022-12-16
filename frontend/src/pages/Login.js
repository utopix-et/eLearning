import React from "react";
import '../style/Login.css';

const Login = () => {
    return(
        <div className="container-fluid bg-secondary">
            <div className="row menu-row bg-warning mx-auto">
                <div className="col-6 text-center">
                    <button className="menu-button">Left Side</button>
                </div>
                <div className="col-6 text-center">
                    <button className="menu-button">Right Side</button>
                </div>
            </div>
        </div>
    );
}

export default Login;