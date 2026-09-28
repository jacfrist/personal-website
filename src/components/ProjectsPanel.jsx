import React from "react";
import { ArrowUpRight, Lock, Sparkles, Trophy } from "lucide-react";
import { projects } from "../data";
import { covers } from "./Covers";

const Cover = ({ project }) => {
  const Art = covers[project.cover];
  return (
    <div className="project-cover">
      {Art ? <Art /> : <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />}
      {project.award && (
        <span className="badge badge-award">
          <Trophy size={14} /> {project.award}
        </span>
      )}
    </div>
  );
};

const Links = ({ project }) =>
  project.githubLink ? (
    <a className="text-link" href={project.githubLink} target="_blank" rel="noopener noreferrer">
      View on GitHub <ArrowUpRight size={14} />
    </a>
  ) : (
    <span className="private-note">
      <Lock size={13} /> Private repository
    </span>
  );

const Tags = ({ tags }) => (
  <ul className="tags">
    {tags.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

const ProjectsPanel = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section>
      <h2 className="panel-title">Things I've built</h2>

      <article className="card featured reveal" style={{ "--i": 0 }}>
        <Cover project={featured} />
        <div className="featured-body">
          <span className="eyebrow">
            <Sparkles size={14} /> Featured project · {featured.year}
          </span>
          <h3>{featured.title}</h3>
          <p className="project-context">{featured.context}</p>
          <p>{featured.summary}</p>
          <ul className="highlights">
            {featured.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <Tags tags={featured.tags} />
          <Links project={featured} />
        </div>
      </article>

      <div className="project-grid">
        {rest.map((p, i) => (
          <article key={p.id} className="card project-card reveal" style={{ "--i": i + 1 }}>
            <Cover project={p} />
            <div className="project-body">
              <p className="project-context">
                {p.context} · {p.year}
              </p>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <Tags tags={p.tags} />
              <Links project={p} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPanel;
