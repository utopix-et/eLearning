import React from 'react'
import '../style/Course-detail.css'

const CourseDetailNav = () => {
    return (
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-gray">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-3">
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
            </div>
        </nav>
        </div>
    )
}

export default CourseDetailNav;