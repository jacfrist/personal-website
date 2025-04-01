import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Research Project Title 1",
      description: "A brief description of the research project, highlighting the key aspects, technologies used, and outcomes achieved.",
      image: "https://placehold.co/600x400/e9e3e0/586F6B",
      tags: ["Machine Learning", "Python", "TensorFlow"],
      githubLink: "#",
      demoLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Research Project Title 2",
      description: "Another research project with detailed description about the methodology, implementation details, and conclusions drawn.",
      image: "https://placehold.co/600x400/e9e3e0/586F6B",
      tags: ["Data Analysis", "R", "Statistics"],
      githubLink: "#",
      demoLink: null,
      featured: true
    },
    {
      id: 3,
      title: "Software Development Project",
      description: "A software project developed as part of coursework or personal interest, showcasing programming skills and problem-solving abilities.",
      image: "https://placehold.co/600x400/e9e3e0/586F6B",
      tags: ["Java", "Software Engineering", "Algorithms"],
      githubLink: "#",
      demoLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "Web Application Project",
      description: "A web application built to address a specific problem or use case, demonstrating full-stack development skills.",
      image: "https://placehold.co/600x400/e9e3e0/586F6B",
      tags: ["React", "Node.js", "MongoDB"],
      githubLink: "#",
      demoLink: "#",
      featured: false
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
        <p className="text-lg md:text-xl text-ash-gray max-w-3xl mx-auto">
          A collection of research projects, software development work, and academic contributions I've made during my time at Vanderbilt University.
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-ash-gray/20 text-feldgrau border-silver">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-ash-gray mb-6">{project.description}</p>
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
      <section className="container-section">
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
                  <Button asChild size="sm" variant="ghost" className="text-battleship-gray hover:text-feldgrau hover:bg-battleship-gray/10 p-2 h-8">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
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
      </section>
    </div>
  );
};

export default Projects;
