import React from "react";
import Logo from "../assets/Logo/logo.png";
import "../style/Navbar.css";
import {BsChevronDown} from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="container-fluid mx-auto py-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" width="170" height="30" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Assessment
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="btn btn-primary text-white nav-link px-3 text-center" href="#">
                  Tinsaye Simeneh
                    <BsChevronDown className="bg-primary text-white ms-2"/>
                  </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;