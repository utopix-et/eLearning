import React from "react";

import "../style/Profile.css";

import Cover from "../assets/Images/Profile/cover.jpg";

const Profile = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-md-12 col-12">
            <div
              className="bg-primary text-center text-white p-5 border rounded"
              style={{ fontSize: "1.6rem" }}
            >
              UTOPIX <span style={{ fontSize: "1rem" }}>E-LEARNING</span>{" "}
              COHORT#1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
