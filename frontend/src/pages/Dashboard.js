import React from "react";

import img1 from "../assets/Images/CourseImages/1.jpg";
import {GoPrimitiveDot} from "react-icons/go";

import "../style/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="row text-center pb-5 pt-4">
        <h3>Dashboard</h3>
      </div>
        <div className="card-row p-4">
        <div className="col-md-3 col-12">
          <div className="card">
                <img src={img1} className="card-img-top" alt="frontend-foundation-img" />
            <div className="card-body">
              <h5 className="card-title">
                Frontend Foundation HTML + CSS
              </h5>
              <div className="py-2">
                <GoPrimitiveDot className="text-success" />
                Beginner
                </div>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
