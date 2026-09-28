import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data";

const Header = () => (
  <header className="hero">
    <div className="hero-photo">
      <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
    </div>

    <div className="hero-text">
      <h1 className="hero-name">
        Jacqueline Frist
      </h1>
      <p className="hero-headline">{profile.headline}</p>
      {profile.bio.map((p) => (
        <p key={p.slice(0, 20)} className="hero-bio">
          {p}
        </p>
      ))}

      <div className="hero-actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          <Mail size={16} /> Get in touch
        </a>
        <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={16} /> LinkedIn
        </a>
        <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
          <Github size={16} /> GitHub
        </a>
        <span className="hero-location">
          <MapPin size={14} /> {profile.location}
        </span>
      </div>
    </div>
  </header>
);

export default Header;
