import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "CV", path: "/cv" },
    { title: "Extracurriculars", path: "/extracurriculars" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <span>Jacqueline</span> Frist
        </NavLink>

        {/* Desktop Links */}
        <nav className="nav-links desktop">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        
      </div>

      
    </header>
  );
};

export default Navbar;
