
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-feldgrau text-timberwolf py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Vanderbilt PhD</h3>
            <p className="text-silver/80">Computer Science & Engineering</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-silver transition-colors">Home</Link></li>
                <li><Link to="/projects" className="hover:text-silver transition-colors">Projects</Link></li>
                <li><Link to="/publications" className="hover:text-silver transition-colors">Publications</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/cv" className="hover:text-silver transition-colors">CV</Link></li>
                <li><Link to="/extracurriculars" className="hover:text-silver transition-colors">Extracurriculars</Link></li>
                <li><Link to="/contact" className="hover:text-silver transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-timberwolf hover:text-silver transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="#" className="text-timberwolf hover:text-silver transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:example@vanderbilt.edu" className="text-timberwolf hover:text-silver transition-colors" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-battleship-gray/30 text-center md:text-left">
          <p className="text-sm text-timberwolf/70">
            &copy; {new Date().getFullYear()} Vanderbilt PhD Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
