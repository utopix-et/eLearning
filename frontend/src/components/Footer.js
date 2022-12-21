import React from "react";
import Logo from '../assets/Logo/logo.png';
import LogoFooter from '../assets/Logo/logo-footer.png';

const Footer = () =>{
    return(
            <div className="row bg-dark">
                <div className="col-md-12">
                    <div className="footer">
                        <div className="row">
                            <div className="col-md-2 col-12">
                                <div className="footer-logo">
                                    <img src={LogoFooter} alt="logo" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 text-white mt-2">
                                  <p>Utopix @2022 </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
} 

export default Footer;