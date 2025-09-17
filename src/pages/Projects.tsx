import React from 'react';
import { Github, ExternalLink, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Google Earth Kart",
      description: "Google Earth Kart is a web-based video game that was created in a group for my Vanderbilt CS Senior Immersion Project. This video game uniquely incorporates Google Earth 3D rendering, allowing players to select various car models and race around Vanderbilt's campus. The project demonstrates web development skills including React and Websockets while providing users with a fun racing experience in a familiar real-world environment.",
      image: "/google_earth_kart.jpg",
      tags: ["ThreeJS", "Websockets", "ReactJS"],
      githubLink: "https://github.com/vu-cs4289-25s/google_earth_kart",
      demoLink: null,
      featured: true,
      award: "3rd Place - VU CS Immersion Showcase"
    },
    {
      id: 2,
      title: "Geovision Industries Website",
      description: "Used a combination of Lovable AI and manual coding to create a website in a short timeline. Delivered a full functioning website in time with all features that the client requested.",
      image: "/geovision.jpg",
      tags: ["Web Development", "Typescript", "UI/UX Design"],
      githubLink: "https://github.com/jacfrist/geovision-hub",
      demoLink: "https://geovisionindustries.vercel.app/",
      featured: true
    },
  ];

  // Filter featured projects
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="bg-timberwolf">
      {/* Header */}
      <section className="container-section text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-feldgrau">My Projects</h1>
        <p className="text-lg md:text-xl text-battleship-gray max-w-3xl mx-auto">
          A collection of projects I've made during my time at Vanderbilt University.
        </p>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="container-section bg-silver/20 py-16">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map(project => (
              <div key={project.id} className="bg-white/70 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-feldgrau">{project.title}</h3>
                  <div className="flex items-center gap-2 mb-4 flex-nowrap overflow-x-auto">
                    {project.tags.map(tag => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="bg-ash-gray/20 text-feldgrau border-silver"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.award && (
                      <Badge className="bg-yellow-500/90 text-yellow-900 border-yellow-400 shadow-lg flex items-center">
                        <Award className="mr-1 h-3 w-3" />
                        {project.award}
                      </Badge>
                    )}
                  </div>
                  <p className="text-battleship-gray mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="sm" variant="outline" className="border-feldgrau text-feldgrau hover:bg-feldgrau/10">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    {project.demoLink && (
                      <Button asChild size="sm" className="bg-feldgrau hover:bg-feldgrau/90 text-timberwolf">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                    
                  </div>
                  
                </div>
                
              </div>
              
            ))}
          </div>
        </section>
      )}

      {/* Other Projects */}
      {/* <section className="container-section">
        <h2 className="section-title">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map(project => (
            <div key={project.id} className="bg-white/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-silver/30">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-feldgrau">{project.title}</h3>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="bg-ash-gray/10 text-feldgrau/70 border-silver/30 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-ash-gray text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex gap-2 mt-auto">
                  {project.githubLink && (<Button asChild size="sm" variant="ghost" className="text-battleship-gray hover:text-feldgrau hover:bg-battleship-gray/10 p-2 h-8">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  )}
                  {project.demoLink && (
                    <Button asChild size="sm" variant="ghost" className="text-battleship-gray hover:text-feldgrau hover:bg-battleship-gray/10 p-2 h-8">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Projects;
