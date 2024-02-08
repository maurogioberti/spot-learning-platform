import React from 'react';
import './CourseCard.css';

const CourseCard = ({ id, title, subtitle, image, url }) => (
    <div key={id} className="col-md-6">
        <div className="card mb-4 pb-1">
            <div className="course-img">
                <img className="card-img-top" src={image || `${process.env.PUBLIC_URL}/assets/images/courses/placeholder300.png`} alt={title} />
                <div class="img-overlay">
                    <a href={url} class="download-link" download><i class="fas fa-save"></i></a>
                    <a href="#view" class="view-link"><i class="far fa-eye"></i></a>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{subtitle}</p>
                <div className="text-center">
                    <a href="#view" className="btn btn-primary">Start Course</a>
                </div>
            </div>
        </div>
    </div>
);

export default CourseCard;