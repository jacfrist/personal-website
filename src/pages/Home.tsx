
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
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-feldgrau">
              Hi, I'm <span className="text-battleship-gray">Jacqueline Frist</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-feldgrau/100">
              Computer Science PhD Student @ Vanderbilt University
            </p>
            <p className="mb-8 text-feldgrau/70">
              B.S. in Computer Science. I am currently pursuing my PhD, but open to employment opportunities as well.
              <br />
              Passionate about software engineering, product management, and cybersecurity.
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
              <img 
                src="/headshot.png" 
                alt="Profile photo" 
                className="w-full h-full object-cover"
              />
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
              I am a passionate Computer Science student at Vanderbilt University, where I completed my Bachelors and now pursuing my PhD.
            </p>
            <p className="mb-4">
              My research interests include AI, cybersecurity, and computer graphics. Through my academic journey, I've had the opportunity to work on various exciting projects that have allowed me to explore these interests.
            </p>
            <p>
              Outside of academics, I enjoy rock climbing, reading, and hiking outdoors. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
