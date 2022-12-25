import React from 'react'
import '../style/Course-detail.css'

import CourseDetailTop from '../components/CourseDetail-top'
import CourseDetailNav from '../components/CourseDetail-nav'

const CourseDetail = () => {
    return (
        <div>
            <div className="my-5">
            <CourseDetailTop/>
            </div>
            <div className="my-5">
            <CourseDetailNav/>
            </div>
        </div>
    )
}

export default CourseDetail;