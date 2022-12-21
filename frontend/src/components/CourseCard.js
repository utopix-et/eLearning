import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { WiMoonWaningCrescent1 } from "react-icons/wi";
import {BsFillTriangleFill} from 'react-icons/bs';

import "../style/Courses.css";
const CourseCards = ({ img, levelIcon, Title, BadgeText }) => {
  if (!img) {
    return <h1>Image not found</h1>;
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img
                src="https://images.unsplash.com/photo-1620922470003-8b8b2b2b2b1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="rounded-circle"
                alt="profile-img"
                width="30px"
                height="30px"
              />
              <p className="ms-2">John Doe</p>
              </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default CourseCards;
