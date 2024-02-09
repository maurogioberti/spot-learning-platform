import React from 'react';
import './CourseCard.css';
import { Link } from 'react-router-dom';
const CourseCard = ({ id, title, subtitle, image, url }) => (
    <div key={id} className="col-md-6">
        <div className="card mb-4 pb-1">
            <div className="course-img">
                <img className="card-img-top" src={image || `${process.env.PUBLIC_URL}/assets/images/courses/placeholder300.png`} alt={title} />
                <div className="img-overlay">
                    <a href={url} target="_blank" className="download-link" download><i className="fas fa-save"></i></a>
                    <Link className="navbar-brand ms-3" to={`/course/${id}`}>
                        <i className="far fa-eye"></i>
                    </Link>
                </div>
            </div>
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
    </div>
);

export default CourseCard;