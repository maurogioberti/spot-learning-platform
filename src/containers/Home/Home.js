import React from 'react';
import './Home.css';
import CourseCard from './../../components/template/CourseCard/CourseCard';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home">
        <div className="p-5 mb-4 bg-light rounded-3 border">
            <div className="container-fluid py-5 text-center">
                <h1 className="display-5 fw-bold primary-color">Welcome to our online courses!</h1>
                <p className="mx-auto fs-4 secondary-color">Choose from a variety of online courses on a wide range of topics.
                </p>
                <div className="d-flex justify-content-center">
                    <video controls autoPlay muted className="object-fit-contain">
                        <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
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
                <div className="col-md-4">
                    <CourseCard title="Introduction to React" description="Learn the basics of React." />
                </div>
                <div className="col-md-4">
                    <CourseCard title="Advanced React" description="Dive deeper into React and its ecosystem." />
                </div>
                <div className="col-md-4">
                    <CourseCard title="React for Web Designers" description="Design-centric approach to React." />
                </div>
            </div>
        </div>
    </div>
);

export default Home;