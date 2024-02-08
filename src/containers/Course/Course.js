import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseTheatre from '../../components/template/CourseTheatre/CourseTheatre';

const Course = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/assets/data/courses.json`)
            .then(response => response.json())
            .then(data => {
                const foundCourse = data.courses.find(c => c.id.toString() === courseId);
                setCourse(foundCourse);
            });
    }, [courseId]);


    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <CourseTheatre title={course.title} subtitle={course.subtitle} url={course.url} filename={course.filename} />
    );
};

export default Course;