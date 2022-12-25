import React from "react";
import "../style/Course-detail.css";

import { GoPrimitiveDot } from "react-icons/go";
import { WiMoonWaningCrescent1 } from "react-icons/wi";
import { BsFillTriangleFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import Yidnek from "../assets/Images/Instructer/yidnek.jpg";

const CourseDetail = () => {
  return (
    <div className="container bg-primary">
      <div className="row">
        <div className="col-md-6 left-detail">
          <p className="text-white course-title">
            Frontend Foundation HTML + CSS
          </p>
          <GoPrimitiveDot className="text-success" />
          <span className="text-white"> Beginner </span>

          <div className="d-flex justify-content-between mt-4">
            <div className="d-flex">
              <img
                src={Yidnek}
                className="rounded-circle"
                alt="profile-img"
                width="30px"
                height="30px"
              />
              <p className="ms-2 text-white">John Doe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
