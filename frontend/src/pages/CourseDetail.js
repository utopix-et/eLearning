import React from "react";
import '../style/Course-detail.css'

import { GoPrimitiveDot } from "react-icons/go";
import { WiMoonWaningCrescent1 } from "react-icons/wi";
import {BsFillTriangleFill} from 'react-icons/bs';
import {AiOutlineDownload} from 'react-icons/ai';

const CourseDetail = () => {
  return (
    <div className="container bg-primary">
      <div className="row">
        <div className="col-md-6 bg-warning left-detail">
          <p className="text-white course-title">Frontend Foundation HTML + CSS</p>
          <GoPrimitiveDot className="text-success"/> 
          <span className="text-white"> Beginner </span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
