import React from "react";
import '../style/Login.css';

const Login = () => {
    return(
        <div className="container-fluid-custom bg-secondary">
            <div className="row menu-row mx-auto">
                <div className="col-md-6 col-6 text-center">
                    <button className="menu-button active">SIGN UP</button>
                </div>
                <div className="col-md-6 col-6 text-center">
                    <button className="menu-button">SIGN IN</button>
                </div>
            </div>
        </div>
    );
}

export default Login;