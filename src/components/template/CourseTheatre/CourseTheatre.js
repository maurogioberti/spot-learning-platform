import React, { useEffect } from 'react';
import './CourseTheatre.css';

const CourseTheatre = ({ title, subtitle, url }) => {
  // TODO: Implement a dynamic theme switcher for a more accessible and customizable dark mode. 
  // Current static color change lacks flexibility.
  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#212529';
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);

  return (
    <div className="col-md-12 bg-dark">
      <div className="video-theater">
        <h3 className="text-center text-white">{title}</h3>
        <p className="text-center text-white">{subtitle}</p>
        <div className="d-flex justify-content-center">
          <video controls className="video-size">
            {url && (
              <source src={url} type="video/mp4" />
            )}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-center mt-3">
          <a href={url} target="_blank" className="btn btn-primary" download>Download Video</a>
        </div>
      </div>
    </div>
  );
};

export default CourseTheatre;