import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../../../containers/Home/Home';
import About from './../../../containers/About/About';
import Courses from './../../../containers/Courses/Courses';

const Main = () => (
  <main className="flex-fill">
    <section className="container my-5">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </section>
  </main>
);

export default Main;