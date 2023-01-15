import React from "react";

import Cards from "../components/CourseCard";

import img1 from "../assets/Images/CourseImages/1.jpg";
import img2 from "../assets/Images/CourseImages/2.jpg";
import img3 from "../assets/Images/CourseImages/3.jpg";
import img4 from "../assets/Images/CourseImages/4.jpg";
import img5 from "../assets/Images/CourseImages/5.jpg";
import img6 from "../assets/Images/CourseImages/6.jpg";

import "../style/Courses.css";
import Navbar from "../components/Navbar";

const Courses = ({LoginStat}) => {
  return (
    (LoginStat === 'true')?
    <>
    <Navbar/>
      <div className="row Main-row p-4 mx-3">
        <div className="row">
          <h5>Programming Courses</h5>
        </div>

        <div className="row card-row">
          { }
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img1}
              levelIcon="Beginner"
              Title="Frontend Foundation HTML + CSS"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-none"
            />
          </div>
         
        </div>

       
      </div>
    </>
    :
    window.location.href = "/Login"
  );
};

export default Courses;
