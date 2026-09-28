// All site content lives here so updates never require touching layout code.

export const profile = {
  name: "Jacqueline Frist",
  headline: "M.S. Computer Science @ Vanderbilt University",
  bio: [
    "I enjoy working with users to solve solutions to complex challenges in the real world. While I primarily have experience in product management and product design, I have also built AI-powered applications myself as a developer. To me, involving the end user at every step of the development process is essential part of building a true solution.",
    "I'm finishing my Master's in Computer Science at Vanderbilt in December 2026 and am looking for full-time roles in product, software engineering, or forward deployed engineering starting February 2027.",
  ],
  status: "Open to full-time roles · Jan 2027",
  location: "Nashville, TN",
  email: "jacfrist@gmail.com",
  github: "https://github.com/jacfrist",
  linkedin: "https://www.linkedin.com/in/jacqueline-frist/",
  photo: "/img/headshot.png",
};

export const experience = [
  {
    company: "OneTap",
    role: "Product Intern",
    period: "May 2026 – September 2026",
    location: "Nashville, TN",
    current: false,
    points: [
      "Contributed to product strategy and roadmap development for OneTap, an AI-driven SaaS platform for maintenance management.",
      "Redesigned and engineered a new marketing site, contributing to a ~3x increase in weekly active users over a 3-month period.",
    ],
  },
  {
    company: "Amplify GenAI Innovation (AGI) Center",
    role: "Graduate Student Developer",
    period: "Jan 2026 – Apr 2026",
    location: "Nashville, TN",
    points: [
      "Built an automated workflow system to process 60–120 annual ESA/NSBA agreements for the Vanderbilt Office of Finance.",
      "Collaborated with Barge Design Solutions to develop an AI-powered analysis and grading system for 75,000–80,000 storm drain structures in the Nashville municipal area to maximize management and repair efficiency.",
    ],
    link: { label: "See the projects", tab: "projects" },
  },
  {
    company: "Vanderbilt University",
    role: "Teaching Assistant",
    period: "Jan 2024 – Dec 2025",
    location: "Nashville, TN",
    points: [
      "TA for Web-Based System Architecture, a 32-person full-stack web development course (Fall 2025).",
      "TA for Technology Strategy, a group project-based course focused on developing commercialization strategies for new technologies (Spring & Fall 2024).",
    ],
  },
  {
    company: "Phosphorus Cybersecurity",
    role: "Product Management Intern",
    period: "Jan 2024 – Aug 2024",
    location: "Nashville, TN",
    points: [
      "Streamlined the vulnerability remediation pipeline using Jira to triage and resolve 200+ security findings across platform bugs and device support issues.",
      "Authored comprehensive documentation to help cross-functional teammates and customers navigate the IoT security platform more efficiently.",
    ],
  },
];

export const projects = [
  {
    id: "storm-drain",
    featured: true,
    title: "AI Storm Drain Condition Assessment",
    context: "AGI Center × Barge Design Solutions",
    year: "2026",
    summary:
      "An AI-assisted inspection platform built to help a civil engineering firm grade the condition of 75,000–80,000 storm drain structures across the Nashville area, so the firm knows where repairs are needed most.",
    highlights: [
      "Two-channel assessment: a vision-language model reads visual defects while a geometric pipeline builds a 3D point cloud from video frames to detect deformation, sediment, and joint offsets.",
      "Generates formal, engineer-style condition reports with one-click Word export.",
      "Tracks AI token usage and cost per assessment, with transparency into which frames the model actually saw.",
    ],
    tags: ["TypeScript", "React", "Claude", "Computer Vision", "Three.js", "SQLite"],
    cover: "drain",
  },
  {
    id: "signature-workflow",
    title: "Automated Agreement & E-Signature Workflow",
    context: "AGI Center × Vanderbilt Office of Finance",
    year: "2026",
    summary:
      "A web app that replaces a manual process for inter-institutional service agreements with a single guided workflow. The application covers form submission, electronic signatures, a live status lookup and an admin dashboard.",
    tags: ["React", "Node.js", "Express", "SQLite", "Tailwind"],
    cover: "signature",
  },
  {
    id: "hr-pg",
    title: "HR-PG: The Interview Boss Battle",
    context: "Team project",
    year: "2026",
    summary:
      "A retro 16-bit, turn-based interview simulator. Users answer behavioral and technical questions with the STAR method, and an LLM scores each response and turns it into attack damage against a recruiter boss. Supports job-description uploads for tailored questions, voice dictation, difficulty levels, and a practice mode with coaching feedback.",
    tags: ["React", "TypeScript", "Flask", "LLM", "JWT Auth"],
    cover: "hrpg",
    githubLink: "https://github.com/jacfrist/hr-pg",
  },
  {
    id: "earth-kart",
    title: "Google Earth Kart",
    context: "VU CS Senior Immersion",
    year: "2025",
    summary:
      "A multiplayer, web-based racing game built on Google Earth's photorealistic 3D tiles. Pick a car and race your friends around Vanderbilt's campus in real time.",
    tags: ["React", "WebSockets", "REST API"],
    image: "/img/google_earth_kart.jpg",
    githubLink: "https://github.com/vu-cs4289-25s/google_earth_kart",
    award: "3rd Place · VU CS Immersion Showcase",
  },
  {
    id: "ccc-workflow",
    title: "CCC Secondary Appointment Workflow",
    context: "Vanderbilt College of Connected Computing",
    year: "2025",
    summary:
      "A workflow management system that streamlines processing of secondary faculty appointments for Vanderbilt's new College of Connected Computing.",
    tags: ["AI Tools", "Web Development", "Claude"],
    image: "/img/ccc_workflow.png",
    githubLink: "https://github.com/tvan04/workflow-management-system",
  },
  {
    id: "student-support",
    title: "AI Student Support Assistant Builder",
    context: "Vanderbilt",
    year: "2025",
    summary:
      "Lets faculty spin up AI assistants grounded in official university documents, so students can get quick, accurate answers about campus policies and procedures.",
    tags: ["AI Tools", "Web Development", "Claude"],
    image: "/img/student_support_assistant.png",
    githubLink: "https://github.com/jacfrist/student_support_assistant",
  },
];

export const education = [
  {
    degree: "Master of Science, Computer Science",
    school: "Vanderbilt University",
    date: "Dec 2026",
    detail: "GPA 4.0",
  },
  {
    degree: "B.S. Computer Science, Minor in Engineering Management",
    school: "Vanderbilt University",
    date: "May 2025",
  },
];

export const awards = [
  {
    title: "VU College of Connected Computing Student Spotlight",
    year: "2026",
    link: "https://www.youtube.com/watch?v=G0wKTFHySe8",
  },
  { title: "N.P. Zeng Scholarship Award", year: "2026" },
  { title: "VU CS Immersion Showcase — 3rd Place", year: "2025" },
  { title: "National Merit Semifinalist", year: "2021" },
  { title: "Scholastic Art Awards — National Gold Medal", year: "2019" },
];

export const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++", "SQL"] },
  { group: "Tools & Frameworks", items: ["React", "Node", "Express", "WebSockets", "REST APIs", "PyTorch", "AWS EC2", "Git"] },
  { group: "Product", items: ["Jira", "Linear", "Agile", "Roadmapping", "Technical Writing"] },
  { group: "Spoken", items: ["English", "Spanish (professional working proficiency)"] },
];

export const interests = [
  {
    icon: "feather",
    title: "Novel Writing",
    text: "Self-published two fiction novels: Blueview Island (2016) and The System (2021).",
  },
  {
    icon: "mountain",
    title: "Rock Climbing",
    text: "Vice President of the Vanderbilt Rock Climbing team (2023–2025); competed at Collegiate National Prequalifying Events.",
    link: {
      label: "Featured as an SCC Local Legend",
      href: "https://www.seclimbers.org/2026/09/02/scc-local-legend-jacqueline-frist/",
    },
  },
  {
    icon: "car",
    title: "Car Restoration",
    text: "Restored a 1964 Ford Galaxie 500 and converted a Ford Transit into a camper van.",
  },
];

export const service = [
  {
    icon: "hammer",
    org: "Habitat for Humanity of Greater Nashville",
    role: "Volunteer Site Supervisor",
    text: "Help lead volunteer crews on site during home builds for families in the Nashville area.",
  },
  {
    icon: "paw",
    org: "Cheatham County Animal Control",
    role: "Foster & Volunteer",
    text: "Support animal wellbeing and enrichment at a rural shelter, and foster animals when urgent needs arise.",
  },
];
