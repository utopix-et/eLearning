import React from 'react'
import '../style/Course-detail.css'

const CourseDetailNav = () => {
    return (
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-orange">
            <div className="container">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Course Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Resources</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Recommendations</a>
                        </li>
                    </ul>
            </div>
        </nav>
        </div>
    )
}

export default CourseDetailNav;