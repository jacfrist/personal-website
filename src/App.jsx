import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Code2, GraduationCap, Heart } from "lucide-react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ExperiencePanel from "./components/ExperiencePanel";
import ProjectsPanel from "./components/ProjectsPanel";
import EducationPanel from "./components/EducationPanel";
import BeyondPanel from "./components/BeyondPanel";
import { profile } from "./data";

const TABS = [
  { id: "experience", label: "Experience", short: "Work", Icon: Briefcase, Panel: ExperiencePanel },
  { id: "projects", label: "Projects", short: "Projects", Icon: Code2, Panel: ProjectsPanel },
  { id: "education", label: "Education & Skills", short: "Education", Icon: GraduationCap, Panel: EducationPanel },
  { id: "beyond", label: "Beyond Work", short: "Beyond", Icon: Heart, Panel: BeyondPanel },
];

const tabFromHash = () => {
  const id = window.location.hash.slice(1);
  return TABS.some((t) => t.id === id) ? id : TABS[0].id;
};

const App = () => {
  const [active, setActive] = useState(tabFromHash);
  const tabsRef = useRef(null);

  useEffect(() => {
    const onHash = () => setActive(tabFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const selectTab = (id) => {
    if (id === active) return;
    setActive(id);
    history.replaceState(null, "", `#${id}`);
    // If the reader has scrolled past the tabs, bring the new panel's top into view.
    const anchor = document.getElementById("tabs-sentinel").offsetTop;
    if (window.scrollY > anchor) window.scrollTo({ top: anchor, behavior: "smooth" });
  };

  // Toggle a class when the tab bar is pinned to the top so it can gain a backdrop.
  useEffect(() => {
    const sentinel = document.getElementById("tabs-sentinel");
    const observer = new IntersectionObserver(([entry]) => {
      tabsRef.current?.classList.toggle("stuck", !entry.isIntersecting);
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const { Panel } = TABS.find((t) => t.id === active);

  return (
    <div className="site">
      <div className="bg-blobs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="page">
        <Header />

        <div id="tabs-sentinel" />
        <div className="tabs-sticky" ref={tabsRef}>
          <Tabs tabs={TABS} active={active} onChange={selectTab} />
        </div>

        <main id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} className="panel" key={active}>
          <Panel onNavigate={selectTab} />
        </main>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </footer>
      </div>
    </div>
  );
};

export default App;
