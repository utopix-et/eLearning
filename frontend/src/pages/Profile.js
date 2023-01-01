import React from "react";

import "../style/Profile.css";

import Cover from "../assets/Images/Profile/cover.jpg";
import Avatar from "../assets/Images/Profile/yidnek.jpg";

const Profile = () => {
  return (
    <div className="container-fluid bg-light">
      <div
        className="row blue-gradient text-center text-white p-5 border rounded"
        style={{ fontSize: "1.6rem" }}
      >
        <div className="col-md-12 col-12">
          UTOPIX <span style={{ fontSize: "1rem" }}>E-LEARNING</span> COHORT#1
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12 col-12 mx-auto text-center text-dark">
          PROFILE INFORMATION{" "}
        </div>
        <div className="col-md-12 col-12 mt-3 text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle text-center mx-auto d-block pb-1"
            style={{ width: "5.5rem" }}
            alt="Avatar"
          />
          <span className="text-decoration-underline">Edit</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
