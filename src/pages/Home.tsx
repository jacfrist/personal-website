
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="bg-timberwolf">
      {/* Hero Section */}
      <section className="container-section">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-feldgrau">
              Hi, I'm <span className="text-battleship-gray">Your Name</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-feldgrau/80">
              Computer Science PhD Student @ Vanderbilt University
            </p>
            <p className="mb-8 text-ash-gray">
              Graduating with my Bachelor's and preparing to begin my PhD journey this fall. 
              Passionate about [your research interests].
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-feldgrau hover:bg-feldgrau/90 text-timberwolf">
                <Link to="/contact">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-feldgrau text-feldgrau hover:bg-feldgrau/10">
                <Link to="/projects">
                  View my work
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-silver shadow-lg">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-ash-gray flex items-center justify-center text-timberwolf">
                <p className="text-center px-4">Add your photo here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container-section bg-silver/20 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <div className="prose prose-slate max-w-none">
            <p className="mb-4">
              I am a passionate Computer Science student at Vanderbilt University, where I'm set to begin my PhD program this fall after completing my undergraduate studies.
            </p>
            <p className="mb-4">
              My research interests include [your specific interests or focus areas]. Through my academic journey, I've had the opportunity to work on various exciting projects that have allowed me to explore these interests deeply.
            </p>
            <p>
              Outside of academics, I enjoy [your hobbies or extracurricular activities]. I believe in the power of [your belief or philosophy about computer science/research/education].
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container-section">
        <h2 className="section-title">Explore My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/projects" className="group">
            <div className="bg-white/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] h-full border border-silver/30">
              <h3 className="text-xl font-bold mb-3 text-feldgrau group-hover:text-battleship-gray transition-colors">Projects</h3>
              <p className="text-ash-gray mb-3">Explore the various projects I've worked on during my academic journey.</p>
              <span className="text-battleship-gray flex items-center text-sm font-medium">
                View Projects <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
          
          <Link to="/publications" className="group">
            <div className="bg-white/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] h-full border border-silver/30">
              <h3 className="text-xl font-bold mb-3 text-feldgrau group-hover:text-battleship-gray transition-colors">Publications</h3>
              <p className="text-ash-gray mb-3">Read my research papers and academic publications in the field.</p>
              <span className="text-battleship-gray flex items-center text-sm font-medium">
                View Publications <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
          
          <Link to="/cv" className="group">
            <div className="bg-white/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] h-full border border-silver/30">
              <h3 className="text-xl font-bold mb-3 text-feldgrau group-hover:text-battleship-gray transition-colors">CV</h3>
              <p className="text-ash-gray mb-3">View my complete curriculum vitae including academic and work experience.</p>
              <span className="text-battleship-gray flex items-center text-sm font-medium">
                View CV <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
