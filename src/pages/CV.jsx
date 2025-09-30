import React from "react";

const CV = () => {
  return (
    <div className="bg-timberwolf">
      {/* Header */}
      <section className="container-top">
        <div className="container" style={{padding:"32px"}}>
        <h1 className="title">Curriculum Vitae</h1>
        <p className="lead text-battleship-gray mx-auto" style={{ maxWidth: "50rem" }}>
          My academic, research, and professional experience in the field of Computer Science.
        </p>
        </div>
      </section>

      {/* CV Content */}
      <section className="container bg-white-50 rounded shadow p-5">
        {/* Education */}
        <div className="mb-5">
          <h2 className="h3 fw-bold text-feldgrau mb-4">🎓 Education</h2>

          <div className="timeline">
            <div className="timeline-item">
              <h3 className="h5 fw-bold text-feldgrau">M.Sc. in Computer Science</h3>
              <span className="badge bg-silver text-dark">Aug 2025 - Dec 2026 (Expected)</span>
              <p className="text-battleship-gray fst-italic mt-2">
                Vanderbilt University, Nashville, TN
              </p>
              <p>
                Currently pursuing a Master of Computer Science.
              </p>
            </div>

            <div className="timeline-item">
              <h3 className="h5 fw-bold text-feldgrau">BS in Computer Science</h3>
              <span className="badge bg-silver text-dark">2022 - 2025</span>
              <p className="text-battleship-gray fst-italic mt-2">
                Vanderbilt University, Nashville, TN
              </p>
              <p className="text-battleship-gray">GPA: 3.7/4.0</p>
              <p>
                <b>Relevant Coursework:</b> Data Structures, Program and Project Management, Discrete Structures, 
                Algorithms, Intermediate Software Design, Error-Correcting Codes and Cryptography, 
                Web-Based System Architecture, Algorithms for Decision Making, Formal Methods
              </p>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="h3 fw-bold text-feldgrau mb-4">💼 Experience</h2>

          <div className="timeline">
            <div className="timeline-item">
              <h3 className="h5 fw-bold text-feldgrau">Teaching Assistant</h3>
              <span className="badge bg-silver text-dark">Aug 2025 - Present</span>
              <p className="text-battleship-gray fst-italic mt-2">
                Department of Computer Science, Vanderbilt University
              </p>
              <ul>
                <li>Assisted Prof. Hemingway in Web-Based System Architecture (CS4278)</li>
                <li>Held office hours for 32 students</li>
                <li>Graded assignments and provided feedback</li>
              </ul>
            </div>

            <div className="timeline-item">
              <h3 className="h5 fw-bold text-feldgrau">Product Management and Engineering Intern</h3>
              <span className="badge bg-silver text-dark">Jan 2024 - Aug 2024</span>
              <p className="text-battleship-gray fst-italic mt-2">
                Phosphorus Cybersecurity, Nashville, TN
              </p>
              <ul>
                <li>Developed workflows in Jira improving bug resolution</li>
                <li>Wrote documentation for cross-functional teams</li>
                <li>Collaborated on a company intranet project</li>
              </ul>
            </div>

            <div className="timeline-item">
              <h3 className="h5 fw-bold text-feldgrau">Teaching Assistant</h3>
              <span className="badge bg-silver text-dark">Jan 2024 - Aug 2024</span>
              <p className="text-battleship-gray fst-italic mt-2">
                Department of Engineering Management, Vanderbilt University
              </p>
              <ul>
                <li>Assisted Prof. Kostoulas in Technology Strategy (ENGM2210)</li>
                <li>Held office hours and graded assignments</li>
              </ul>
            </div>

            <div className="timeline-item">
              <h3 className="h5 fw-bold text-feldgrau">Undergraduate Research Assistant</h3>
              <span className="badge bg-silver text-dark">May 2022 - Aug 2022</span>
              <p className="text-battleship-gray fst-italic mt-2">
                Wallace Lab, Vanderbilt University
              </p>
              <ul>
                <li>Partnered with graduate students in multisensory neuroscience</li>
                <li>Created literature review for a metanalysis paper</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="h3 fw-bold text-feldgrau mb-4">🏅 Skills</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <h5 className="fw-semibold text-feldgrau">Programming Languages</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-feldgrau">Python</span>
                <span className="badge bg-feldgrau">Java</span>
                <span className="badge bg-feldgrau">C/C++</span>
                <span className="badge bg-feldgrau">JavaScript</span>
                <span className="badge bg-feldgrau">SQL</span>
                <span className="badge bg-feldgrau">TypeScript</span>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <h5 className="fw-semibold text-feldgrau">Frameworks & Tools</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-feldgrau">Express</span>
                <span className="badge bg-feldgrau">Socket.io</span>
                <span className="badge bg-feldgrau">React</span>
                <span className="badge bg-feldgrau">Node.js</span>
                <span className="badge bg-feldgrau">Git</span>
                <span className="badge bg-feldgrau">REST API</span>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <h5 className="fw-semibold text-feldgrau">Research Skills</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-silver text-dark">Data Analysis</span>
                <span className="badge bg-silver text-dark">Scientific Writing</span>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <h5 className="fw-semibold text-feldgrau">Soft Skills</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-silver text-dark">Communication</span>
                <span className="badge bg-silver text-dark">Problem Solving</span>
                <span className="badge bg-silver text-dark">Project Management</span>
                <span className="badge bg-silver text-dark">Spanish Language</span>
                <span className="badge bg-silver text-dark">Public Speaking</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
