import React from 'react';
import './CoursePreviewCard.css';
import { Link } from 'react-router-dom';

const CoursePreviewCard = ({ id, title, subtitle, image }) => (
    <div className="card course-card">
        <img src={image || `${process.env.PUBLIC_URL}/assets/images/courses/placeholder300.png`} className="card-img-top" alt="Course" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{subtitle}</p>
            <div className="text-center">
                <Link className="navbar-brand ms-3" to={`/course/${id}`}>
                    <button className="btn btn-primary">Start Course</button>
                </Link>
            </div>
        </div>
    </div>
);

export default CoursePreviewCard;