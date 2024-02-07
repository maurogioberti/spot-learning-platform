import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description }) => (
    <div className="card course-card">
        <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Course" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#course" className="btn btn-primary">Enroll Now</a>
        </div>
    </div>
);

export default CourseCard;