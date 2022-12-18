import React from "react";

import Cards from "../components/Cards";

import img1 from "../assets/Images/CourseImages/1.jpg";
import img2 from "../assets/Images/CourseImages/2.jpg";

import "../style/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="row text-center pb-5 pt-4">
        <h3>Dashboard</h3>
      </div>

      <div className="row Main-row p-4">
        <div className="row py-2">
        <h3>My Courses</h3>
        
        </div>
      
      <div className="row pb-5 pt-4">
        <div className="col-md-3 col-12">
          <Cards img={img1} levelIcon="Beginner" Title="Frontend Foundation HTML + CSS"/>
        </div>
        <div className="col-md-3 col-12 ms-5">
          <Cards img={img2} levelIcon="Intermediate" Title="Javascript for Developer"/>
        </div>
      </div>
      
      </div>
      
    </>
  );
};

export default Dashboard;
