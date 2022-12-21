import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { WiMoonWaningCrescent1 } from "react-icons/wi";
import {BsFillTriangleFill} from 'react-icons/bs';
import {AiOutlineDownload} from 'react-icons/ai';

import Yidnek from "../assets/Images/Instructer/yidnek.jpg";

import "../style/Courses.css";
const CourseCards = ({ img, levelIcon, Title, BadgeText, description, DownloadbtnState }) => {
  if (!img) {
    return <h1>Image not found</h1>;
  }

if(DownloadbtnState===true){
  document.getElementById("download-btn").style.display = "block";
}
else{
  document.getElementById("download-btn").style.display = "none";
}
    
  function Icon() {
    if (levelIcon === "Beginner") {
      return <GoPrimitiveDot className="text-success me-1" />;
    } else {
      if (levelIcon === "Intermediate") {
        return <WiMoonWaningCrescent1 className="text-orange me-2" style = {{transform: 'rotate(90deg)' }}/>;
      }
      else{
      return <BsFillTriangleFill className="text-warning me-2 mb-1"  />;
    }}
  }

  return (
    <>
      <div className="card shadow-lg">
        <img src={img} className="card-img-top" alt="frontend-foundation-img" />
        <span className="badge bg-warning text-white position-absolute bottom-50 start-60 end-0 mb-3">{BadgeText}</span>
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <div className="py-2">
            <Icon />
            <span>{levelIcon}</span>
          </div>
          <p className="card-text">
            {description}
          </p>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img
                src={Yidnek}
                className="rounded-circle"
                alt="profile-img"
                width="30px"
                height="30px"
              />
              <p className="ms-2">John Doe</p>
              </div>
              <div className="d-flex">
              <span id="download-btn">
                <AiOutlineDownload className="text-success me-1" />
                Download
              </span>
              </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default CourseCards;
