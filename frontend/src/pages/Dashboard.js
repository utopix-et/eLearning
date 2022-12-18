import React from "react";

import img1 from "../assets/Images/courseImages/1.jpg";
import {GoPrimitiveDot} from "react-icons/go";

import "../style/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="row bg-primary text-center py-5">
        <h3>Dashboard</h3>
      </div>
      <div className="row bg-warning py-3">
        <div className="col-3">
          <div className="card">
                <img src="https://images.unsplash.com/photo-1617720000000-1c1c1c1c1c1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title bg-dark">
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
