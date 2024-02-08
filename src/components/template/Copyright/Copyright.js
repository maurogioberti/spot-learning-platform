import React from 'react';

const Copyright = () => (
  <div className="col-xs-12 col-md-7 order-1 order-md-0">
  <div className="copyright text-center text-md-start pb-1">
    <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="SPOT Logo" height="50" className="pe-3"/>
    <span className="">&copy; {new Date().getFullYear()} Online Courses</span>
  </div>
  <div className="credits text-secondary text-center text-md-start mt-2 fs-7">
    Skills Pathway Online Training
  </div>
</div>
);

export default Copyright;