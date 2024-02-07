import React from 'react';
import './Footer.css';
import Copyright from './../Copyright/Copyright';
import SocialMedia from './../SocialMedia/SocialMedia';

const Footer = () => (
  <footer className="d-flex justify-content-between flex-wrap bg-light p-4 mt-auto">
    <Copyright />
    <SocialMedia />
  </footer>
);

export default Footer;
