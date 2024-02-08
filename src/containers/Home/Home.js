import React, { useEffect, useState } from 'react';
import './Home.css';
import CoursePreviewCard from '../../components/template/CoursePreviewCard/CoursePreviewCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const [lastCourses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/assets/data/courses.json`)
            .then(response => response.json())
            .then(data => {
                const lastThreeCourses = data.courses.length > 3 ? data.courses.slice(-3) : data.courses;
                setCourses(lastThreeCourses);
            });
    }, []);

    return (
        <div className="home">
            <div className="p-5 mb-4 bg-light rounded-3 border">
                <div className="container-fluid py-5 text-center">
                    <h1 className="display-5 fw-bold primary-color">Welcome to our online courses!</h1>
                    <p className="mx-auto fs-4 secondary-color">Choose from a variety of online courses on a wide range of topics.
                    </p>
                    <div className="d-flex justify-content-center">
                        <video controls autoPlay muted className="object-fit-contain">
                            <source src={`${process.env.PUBLIC_URL}/assets/videos/intro.mp4`} type="video/mp4" />
                            Your browser does not support videos.
                        </video>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Link className="navbar-brand ms-3" to="/courses">
                            <button className="btn btn-primary btn-lg" type="button">Browse Courses</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    {lastCourses.map(course => (
                        <div className="col-md-4">
                            <CoursePreviewCard id={course.id} title={course.title} subtitle={course.subtitle} image={course.image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;