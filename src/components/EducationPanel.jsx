import React from "react";
import { Award, CirclePlay, GraduationCap } from "lucide-react";
import { awards, education, skills } from "../data";

const EducationPanel = () => (
  <section>
    <h2 className="panel-title">Education</h2>
    <div className="edu-grid">
      {education.map((e, i) => (
        <article key={e.degree} className="card edu-card reveal" style={{ "--i": i }}>
          <GraduationCap className="edu-icon" size={28} aria-hidden="true" />
          <h3>{e.degree}</h3>
          <p className="job-company">{e.school}</p>
          <div className="edu-foot">
            <span className="badge">{e.date}</span>
            {e.detail && <span className="badge badge-soft">{e.detail}</span>}
          </div>
        </article>
      ))}
    </div>

    <div className="split">
      <div>
        <h2 className="panel-title">Awards</h2>
        <ul className="award-list">
          {awards.map((a, i) => (
            <li key={a.title} className="reveal" style={{ "--i": i + 2 }}>
              <Award size={18} aria-hidden="true" />
              <span>
                {a.title}
                {a.link && (
                  <a className="award-link" href={a.link} target="_blank" rel="noopener noreferrer">
                    <CirclePlay size={14} aria-hidden="true" /> Watch video
                  </a>
                )}
              </span>
              <span className="award-year">{a.year}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="panel-title">Skills</h2>
        {skills.map((s, i) => (
          <div key={s.group} className="skill-group reveal" style={{ "--i": i + 2 }}>
            <h3>{s.group}</h3>
            <ul className="tags tags-lg">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationPanel;
