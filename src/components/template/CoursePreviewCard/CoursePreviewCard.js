import React from 'react';
import './CoursePreviewCard.css';

const CoursePreviewCard = ({ id, title, subtitle, image }) => (
    <div className="card course-card">
        <img src={image || `${process.env.PUBLIC_URL}/placeholder300.png`} className="card-img-top" alt="Course" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{subtitle}</p>
            <div className="text-center">
                <a href={`#view${id}`} className="btn btn-primary">Start Course</a>
            </div>
        </div>
    </div>
);

export default CoursePreviewCard;