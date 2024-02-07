import React from 'react';

const Copyright = () => (
  <div className="d-flex align-items-center">
    <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="SPOT Logo" height="50" />
    <div className="flex-grow-1 text-center">
      <span>&copy; {new Date().getFullYear()} Online Courses</span>
    </div>
  </div>
);

export default Copyright;