import React from "react";
import { Users, Calendar, MapPin, Award, Lightbulb, BookOpen } from "lucide-react";

const Extracurriculars = () => {
  const activities = [
    {
      id: 1,
      title: "VandyHacks",
      role: "Content Board Member",
      period: "Mar 2024 - Dec 2024",
      location: "Vanderbilt University",
      description:
        "Developed monthly workshops focused on concepts in computer science and software development.",
      achievements: ["Notable workshops on web development and cybersecurity"],
      category: "academic",
    },
    {
      id: 2,
      title: "Vanderbilt Climbing Club",
      role: "Vice President",
      period: "2023 - 2025",
      location: "Vanderbilt University",
      description:
        "Leading a team of 80 active members, participating in outdoor climbing trips, competitions, and community events.",
      achievements: [
        "Led outdoor trips of up to 20 people",
        "Planned team dinners and other social events",
        "Organized Vanderbilt's annual bouldering competition",
      ],
      category: "sports",
    },
    {
      id: 3,
      title: "Cheatham County Animal Control",
      role: "Volunteer & Foster",
      period: "2023 - 2025",
      location: "Pegram, TN",
      description:
        "Volunteering at rural animal shelter to help with animal wellbeing and enrichment.",
      achievements: ["Occasionally foster animals when urgent needs are present"],
      category: "volunteer",
    },
    {
      id: 4,
      title: "Nashville Humane Association",
      role: "Volunteer",
      period: "2020",
      location: "Nashville, TN",
      description:
        "Spent a summer volunteering at the animal shelter to aid in animal welfare and shelter operations.",
      achievements: ["85+ hours of service logged"],
      category: "volunteer",
    },
    {
      id: 5,
      title: "The Code Book",
      role: "Simon Singh",
      category: "books",
    },
    {
      id: 6,
      title: "Code Girls",
      role: "Lisa Mundy",
      category: "books",
    },
    {
      id: 7,
      title: "The Silent Patient",
      role: "Alex Michaelides",
      category: "books",
    },
    {
      id: 8,
      title: "The Coming Wave",
      role: "Mustafa Suleyman",
      category: "books",
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "leadership":
        return <Users className="me-2" />;
      case "tech":
        return <Lightbulb className="me-2" />;
      case "volunteer":
      case "academic":
      case "sports":
        return <Award className="me-2" />;
      case "books":
        return <BookOpen className="me-2" />;
      default:
        return <Award className="me-2" />;
    }
  };

  const categoryLabels = {
    leadership: "👥 Leadership",
    tech: "💡 Technology",
    volunteer: "🎖️ Volunteer Work",
    academic: "📚 Academic Activities",
    sports: "⛰️ Sports & Recreation",
    books: "📖 My Favorite Books",
  };

  const categories = [...new Set(activities.map((item) => item.category))];

  return (
    <div className="bg-timberwolf">
      {/* Header */}
      <section className="container-section">
        <div className="container py-5" style={{padding:"32px"}}>
        <h1 className="title">
          Extracurricular Activities
        </h1>
        <p className="lead text-battleship-gray mx-auto" style={{ maxWidth: "700px" }}>
          Beyond academics, I engage in various activities that help me develop
          leadership, teamwork, and other valuable skills.
        </p>
        </div>
      </section>

      {/* Activities by Category */}
      {categories.map((category, index) => (
        <section
          key={category}
          className={`py-5 ${index % 2 === 0 ? "bg-white-50" : ""}`}
        >
          <div className="container">
            <div className="d-flex align-items-center mb-4">
              <h2 className="section-title">
                {categoryLabels[category]}
              </h2>
            </div>

            <div className="row g-4">
              {activities
                .filter((a) => a.category === category)
                .map((activity) => (
                  <div key={activity.id} className="col-12 col-lg-6">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body">
                        <h3 className="h5 fw-bold text-feldgrau mb-2">
                          {activity.title}
                        </h3>

                        <div className="d-flex flex-wrap align-items-center mb-3">
                          {activity.role && (
                            <span className="badge bg-silver text-dark me-2">
                              {activity.role}
                            </span>
                          )}

                          {activity.period && (
                            <small className="text-muted me-3 d-flex align-items-center mb-1">
                              <Calendar size={16} className="me-1" />
                              {activity.period}
                            </small>
                          )}

                          {activity.location && (
                            <small className="text-muted d-flex align-items-center mb-1">
                              <MapPin size={16} className="me-1" />
                              {activity.location}
                            </small>
                          )}
                        </div>

                        {activity.description && (
                          <p className="mb-3">{activity.description}</p>
                        )}

                        {activity.achievements && (
                          <>
                            <h6 className="fw-semibold">Key Contributions:</h6>
                            <ul className="mb-0 ps-3">
                              {activity.achievements.map((ach, i) => (
                                <li key={i} className="small">
                                  {ach}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Extracurriculars;
