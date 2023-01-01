import React from "react";

import "../style/Profile.css";

import Cover from "../assets/Images/Profile/cover.jpg";

const Profile = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row">
     
        <div
          className="blue-gradient text-center text-white p-5 border rounded"
          style={{ fontSize: "1.6rem" }}
        >
           <div className="col-md-12 col-12 pb-3 ms-3">
          UTOPIX <span style={{ fontSize: "1rem" }}>E-LEARNING</span> COHORT#1
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle z-depth-0 mt-2 avatar-img"
            style={{width: '5.5rem'}}
            alt="Avatar"
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12 col-12 text-center text-dark mt-3">
          PROFILE INFORMATION{" "}
        </div>
      </div>
    </div>
  );
};

export default Profile;
