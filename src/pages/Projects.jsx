import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Google Earth Kart",
      description: "Google Earth Kart is a web-based video game that was created in a group for my Vanderbilt CS Senior Immersion Project. This video game uniquely incorporates Google Earth 3D rendering, allowing players to select various car models and race around Vanderbilt's campus. Demonstrates React and Websockets while providing a fun racing experience.",
      image: "/img/google_earth_kart.jpg",
      tags: ["ReactJS", "REST API", "Websockets"],
      githubLink: "https://github.com/vu-cs4289-25s/google_earth_kart",
      demoLink: null,
      award: "3rd Place - VU CS Immersion Showcase",
      featured: true
    },
    {
      id: 2,
      title: "Geovision Industries Website",
      description: "Created a website using a combination of AI and manual coding to meet the client’s requested features on a short timeline.",
      image: "/img/geovision.jpg",
      tags: ["Web Development", "Typescript", "UI/UX Design"],
      githubLink: "https://github.com/jacfrist/geovision-hub",
      demoLink: "https://geovisionindustries.vercel.app/",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div>
      {/* Header */}
      <section className="container-top">
        <div className="container py-5">
            <div className="col-1"></div>
            <div className="col-11">
        <h1 className="title">My Projects</h1>
        <p className="lead text-battleship-gray mx-auto" style={{ maxWidth: "800px" }}>A collection of projects I've made during my time at Vanderbilt University.</p>
        </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="container bg-white-50 rounded" style={{padding:"32px"}}>
          <h2 className="section-title">Featured Projects</h2>
          <div className="flex flex-wrap">
            {featuredProjects.map(project => (
              <div key={project.id} className="project-card">
                {project.award && <span className="award">{project.award}</span>}
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <p>{project.description}</p>
                  <div className="project-links">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    )}
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Projects;
