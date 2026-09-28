import React, { useLayoutEffect, useRef, useState } from "react";

// Accessible tab bar with a sliding indicator; arrow keys move between tabs.
const Tabs = ({ tabs, active, onChange }) => {
  const listRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const update = () => {
      const el = listRef.current?.querySelector(`[data-tab="${active}"]`);
      if (el) {
        setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
        // Keep the active tab visible if the strip overflows, without scrolling the page.
        const list = listRef.current;
        if (el.offsetLeft < list.scrollLeft || el.offsetLeft + el.offsetWidth > list.scrollLeft + list.clientWidth) {
          list.scrollTo({ left: el.offsetLeft - 8, behavior: "smooth" });
        }
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  const onKeyDown = (e) => {
    const i = tabs.findIndex((t) => t.id === active);
    let next = null;
    if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
    if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
    if (e.key === "Home") next = tabs[0];
    if (e.key === "End") next = tabs[tabs.length - 1];
    if (next) {
      e.preventDefault();
      onChange(next.id);
      listRef.current.querySelector(`[data-tab="${next.id}"]`)?.focus();
    }
  };

  return (
    <nav className="tabs-wrap">
      <div className="tabs" role="tablist" aria-label="Sections" ref={listRef} onKeyDown={onKeyDown}>
        <span className="tab-indicator" style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }} aria-hidden="true" />
        {tabs.map(({ id, label, short, Icon }) => (
          <button
            key={id}
            id={`tab-${id}`}
            data-tab={id}
            role="tab"
            aria-label={label}
            aria-selected={active === id}
            aria-controls={`panel-${id}`}
            tabIndex={active === id ? 0 : -1}
            className={`tab ${active === id ? "active" : ""}`}
            onClick={() => onChange(id)}
          >
            <Icon size={16} aria-hidden="true" />
            <span className="tab-label">{label}</span>
            <span className="tab-label-short" aria-hidden="true">
              {short}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Tabs;
