import React from "react";
import '../style/Login.css';

const Login = () => {
    return(
        <div className="container-fluid bg-secondary">
            <div className="row menu-row mx-auto">
                <div className="col-md-6 col-6 text-center">
                    <button className="menu-button active">Left Side</button>
                </div>
                <div className="col-md-6 col-6 text-center">
                    <button className="menu-button">Right Side</button>
                </div>
            </div>
        </div>
    );
}

export default Login;