import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#586F6B', color: '#DDD5D0', padding: '2rem' }}>
      <div className="container">
        <div className="row">
        <div className="col-8">
          <h3>Jacqueline Frist</h3>
          <p>B.S. Computer Science</p>
        </div>
        <div className="col-4">
          <h4>Navigation</h4>
          <div className="row">
          <div className="col-5">
          <ul>
            <li><Link className={"link-styles"} to="/">Home</Link></li>
            <li><Link className={"link-styles"} to="/projects">Projects</Link></li>
            <li><Link className={"link-styles"} to="/cv">CV</Link></li>
          </ul>
          </div>
          <div className="col-5">
          <ul>
            <li><Link className={"link-styles"} to="/extracurriculars">Extracurriculars</Link></li>
            <li><Link className={"link-styles"} to="/contact">Contact</Link></li>
          </ul>
          </div>
          </div>
        </div>
        </div>
      </div>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} Jacqueline Frist Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
