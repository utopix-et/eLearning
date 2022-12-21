import React from "react";

import Cards from "../components/CourseCard";

import img1 from "../assets/Images/CourseImages/1.jpg";
import img2 from "../assets/Images/CourseImages/2.jpg";
import img3 from "../assets/Images/CourseImages/3.jpg";
import img4 from "../assets/Images/CourseImages/4.jpg";
import img5 from "../assets/Images/CourseImages/5.jpg";
import img6 from "../assets/Images/CourseImages/6.jpg";

import "../style/Courses.css";

const Roadmap = () => {
  return (
    <>
      <div className="row Main-row p-4 mx-3">
        <div className="row">
          <h5>Programming Courses</h5>
        </div>

        <div className="row card-row">
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img1}
              levelIcon="Beginner"
              Title="Frontend Foundation HTML + CSS"
              DownloadbtnState="d-flex"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-flex"
            />
          </div>
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img2}
              levelIcon="Intermediate"
              Title="Javascript for Developer"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-flex"
            />
          </div>
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img3}
              levelIcon="Beginner"
              Title="Backend Basics"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-flex"
            />
          </div>
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img4}
              levelIcon="Advanced"
              Title="Advanced CSS + JavaScript"
              BadgeText="Coming Soon"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-flex"
            />
          </div>
        </div>

        <div className="row card-row">
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img5}
              levelIcon="Advanced"
              Title="API Development"
              BadgeText="Coming Soon"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-flex"
                          />
          </div>
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img2}
              levelIcon="Advanced"
              Title="Introduction to React"
              BadgeText="Coming Soon"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-flex"
            />
          </div>
        </div>

        <div className="row pt-3">
          <h5>Designing Courses</h5>
        </div>

        <div className="row card-row pb-4">
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img6}
              levelIcon="Beginner"
              Title="Intro to UI/UX Design"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-flex"
            />
          </div>
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img6}
              levelIcon="Intermediate"
              Title="UI/UX Design for Developers"
              BadgeText="Coming Soon"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-flex"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
