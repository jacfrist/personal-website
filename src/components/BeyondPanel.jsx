import React from "react";
import { ArrowUpRight, Car, Feather, Hammer, Mountain, PawPrint } from "lucide-react";
import { interests, service } from "../data";

const ICONS = { feather: Feather, mountain: Mountain, car: Car, hammer: Hammer, paw: PawPrint };

const BeyondPanel = () => (
  <section>
    <h2 className="panel-title">Off the keyboard</h2>
    <div className="interest-grid">
      {interests.map((it, i) => {
        const Icon = ICONS[it.icon];
        return (
          <article key={it.title} className={`card interest-card tone-${i} reveal`} style={{ "--i": i }}>
            <span className="interest-icon">
              <Icon size={22} aria-hidden="true" />
            </span>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
            {it.link && (
              <a className="text-link interest-link" href={it.link.href} target="_blank" rel="noopener noreferrer">
                {it.link.label} <ArrowUpRight size={14} />
              </a>
            )}
          </article>
        );
      })}
    </div>

    <h2 className="panel-title">Community service</h2>
    <div className="service-grid">
      {service.map((s, i) => {
        const Icon = ICONS[s.icon];
        return (
          <article key={s.org} className="card service-card reveal" style={{ "--i": i + 3 }}>
            <span className="interest-icon">
              <Icon size={20} aria-hidden="true" />
            </span>
            <div>
              <h3>{s.org}</h3>
              <p className="job-company">{s.role}</p>
              <p>{s.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default BeyondPanel;
