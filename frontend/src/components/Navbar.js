import React from "react";

const Navbar = () => {
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
        </div>
    );
    };

    export default Navbar;
