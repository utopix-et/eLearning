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
        <div className="col-md-12 col-12 mt-4 text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle text-center mx-auto d-block pb-1"
            style={{ width: "5.5rem" }}
            alt="Avatar"
          />
          <span className="text-decoration-underline">Edit</span>
        </div>
        <div className="col-md-3 col-6 mt-3 bg-dark text-white text-center mx-auto">
          <div className="row">
            <div className="col-md-6 col-12 border py-2">
                Rank
                <span className="badge bg-primary text-white ms-2">3</span>
            </div>
            <div className="col-md-6 col-12 py-2">
                Points
                <span className="badge bg-primary text-white ms-2">100</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-10 col-12 mx-auto text-dark">
          <form className="row g-3">
            <div className="col-md-4 mx-auto">
              <label className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="John Doe"
                disabled
              />
            </div>

            <div className="col-md-4 mx-auto">
              <label className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="johndoe@gmail.com"
                disabled
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
