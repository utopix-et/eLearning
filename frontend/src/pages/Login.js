import React from "react";
import '../style/Login.css';
import 'font-awesome/css/font-awesome.min.css';

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
            <div className="row mx-auto">
                <div className="col-md-6 col-12 mx-auto">
                    <div className="row mx-auto">
                        <div className="col-md-3 col-3 mx-auto">
                        <i class="fa-brands fa-google"></i>
                            </div>
                            </div>
                            </div></div>
        </div>
    );
}

export default Login;