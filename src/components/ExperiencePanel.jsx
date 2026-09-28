import React from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { experience } from "../data";

const ExperiencePanel = ({ onNavigate }) => (
  <section>
    <h2 className="panel-title">Where I've worked</h2>
    <ol className="timeline">
      {experience.map((job, i) => (
        <li key={job.company} className="timeline-item reveal" style={{ "--i": i }}>
          <span className={`timeline-dot ${job.current ? "current" : ""}`} aria-hidden="true" />
          <article className="card job-card">
            <div className="job-head">
              <div>
                <h3>{job.role}</h3>
                <p className="job-company">{job.company}</p>
              </div>
              {job.current && <span className="badge badge-live">Current</span>}
            </div>
            <p className="meta">
              <span>
                <Calendar size={14} /> {job.period}
              </span>
              <span>
                <MapPin size={14} /> {job.location}
              </span>
            </p>
            <ul className="job-points">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            {job.link && (
              <button className="text-link" onClick={() => onNavigate(job.link.tab)}>
                {job.link.label} <ArrowRight size={14} />
              </button>
            )}
          </article>
        </li>
      ))}
    </ol>
  </section>
);

export default ExperiencePanel;
