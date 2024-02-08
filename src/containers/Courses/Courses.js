import React, { useEffect, useState } from 'react';
import CourseCard from '../../components/template/CourseCard/CourseCard';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
            .then(response => response.json())
            .then(data => setCourses(data.courses));
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center mb-4">Our Courses</h2>
                </div>
            </div>
            <div className="row">
                {courses.map(course => (
                    <CourseCard id={course.id} title={course.title} subtitle={course.subtitle} image={course.image} url={course.url} />
                ))}
            </div>
        </div>
    );
};

export default Courses;