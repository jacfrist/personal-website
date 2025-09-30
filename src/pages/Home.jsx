import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Main Section */}
      <section className="container-top">
        <div className="container row py-5 px-5">
          {/* Text */}
          <div className="col-1"></div>
          <div className="col-8">
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Hi, I'm <span style={{ color: '#7F9183' }}>Jacqueline Frist</span>
            </h1>
            <p><i>B.S., Computer Science, Vanderbilt University (M.Sc. Expected 12/2026)</i></p>
            <p style={{ margin: '1rem 0' }}>
              I am pursuing internships for Summer 2026, as well as full-time oppportunities for when I complete my Masters in Dec. 2026.
              <br />
              Passionate about software engineering, product management, and cybersecurity.
            </p>
            <div className="flex flex-nowrap mt-3">
              <Link to="/projects">
              <button className="btn btn-dark">View my work</button>
              </Link>
              <Link to="/contact">
              <button className="btn btn-dark mx-2">Get in touch →</button>
              </Link>
            </div>
          </div>

          <div className="col-1"></div>

          {/* Image */}
          <div className="col-2" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="/img/headshot.png"
                alt="Profile photo"
                className="rounded-circle"
                style={{ width: '250px', height: '250px', objectFit: 'cover' }}
              />
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="container-bottom" style={{ backgroundColor: '#CFC0BD' }}>
        <div className="container ">
        <h2 className="section-title">About Me</h2>
        <p>
          I am a passionate Computer Science student at Vanderbilt University, where I completed my Bachelors and now pursuing my Master degree.
        </p>
        <p>
          My research interests include AI, cybersecurity, and software engineering. Through my academic journey, I've had the opportunity to work on various exciting projects that have allowed me to explore these interests.
        </p>
        <p>Outside of academics, I enjoy rock climbing, reading, and hiking outdoors.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
