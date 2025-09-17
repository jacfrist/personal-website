
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
    // { title: 'Publications', path: '/publications' },
    { title: 'CV', path: '/cv' },
    { title: 'Extracurriculars', path: '/extracurriculars' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-timberwolf/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-feldgrau font-bold text-xl">
              <span className="text-battleship-gray">Jacqueline</span> Frist
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => 
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-feldgrau p-2 rounded-md hover:bg-ash-gray/20 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden transition-all duration-300 transform ${
          isOpen ? 'opacity-100 h-screen' : 'opacity-0 h-0 pointer-events-none'
        } bg-timberwolf/95 backdrop-blur-sm`}
      >
        <nav className="pt-2 pb-4 px-6">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path} className="border-b border-ash-gray/30 py-2">
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `block text-lg ${isActive ? 'text-battleship-gray font-semibold' : 'text-feldgrau'}`
                  }
                  onClick={closeMenu}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
