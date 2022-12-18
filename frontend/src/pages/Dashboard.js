import React from "react";

import Cards from "../components/Cards";

import img1 from "../assets/Images/CourseImages/1.jpg";

import "../style/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="row text-center pb-5 pt-4">
        <h3>Dashboard</h3>
      </div>
        <Cards img={img1} levelIcon="beginner"/>
    </>
  );
};

export default Dashboard;
