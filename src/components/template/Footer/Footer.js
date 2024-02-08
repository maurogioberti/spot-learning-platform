import React from 'react';
import './Footer.css';
import Copyright from './../Copyright/Copyright';
import SocialMedia from './../SocialMedia/SocialMedia';

const Footer = () => (
  <footer>
    <div className="bg-light py-4 py-md-5 py-xl-8 border-top border-light-subtle">
      <div className="container overflow-hidden">
        <div className="row gy-4 gy-md-0">
          <Copyright />
          <SocialMedia />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
