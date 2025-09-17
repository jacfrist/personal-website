
import React from 'react';
import { Users, Calendar, MapPin, Award, Lightbulb, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Extracurriculars = () => {
  // Sample extracurricular activities data
  const activities = [
    {
      id: 1,
      title: "VandyHacks",
      role: "Content Board Member",
      period: "March 2024 - December 2024",
      location: "Vanderbilt University",
      description: "Developed monthly workshops focused on concepts in computer science and software development.",
      achievements: [
        "Notable workshops on web development and cybersecurity"
      ],
      category: "academic"
    },
    {
      id: 2,
      title: "Vanderbilt Climbing Club",
      role: "Vice President",
      period: "2023 - 2025",
      location: "Vanderbilt University",
      description: "Leading a team of 80 active members, participating in outdoor climbing trips, competitions, and community events.",
      achievements: [
        "Led outdoor trips of up to 20 people",
        "Planned team dinners and other social events",
        "Organized Vanderbilt's annual bouldering competition"
      ],
      category: "sports"
    },
    {
      id: 3,
      title: "Cheatham County Animal Control",
      role: "Volunteer & Foster",
      period: "2023 - 2025",
      location: "Pegram, TN",
      description: "Volunteering at rural animal shelter to help with animal wellbeing and enrichment.",
      achievements: [
        "Occasionally foster animals when urgent needs are present"
      ],
      category: "volunteer"
    },
    {
      id: 4,
      title: "Nashville Humane Association",
      role: "Volunteer",
      period: "2020",
      location: "Nashville, TN",
      description: "Spent a summer volunteering at the animal shelter to aid in animal welfare and shelter operations.",
      achievements: [
        "85+ hours of service logged"
      ],
      category: "volunteer"
    },
    {
      id: 4,
      title: "The Code Book",
      role: "Simon Singh",
      period: null,
      location: null,
      description: null,
      achievements: null,
      category: "books"
    },
    {
      id: 5,
      title: "Code Girls",
      role: "Lisa Mundy",
      period: null,
      location: null,
      description: null,
      achievements: null,
      category: "books"
    },
    {
      id: 6,
      title: "The Silent Patient",
      role: "Alex Michaelides",
      period: null,
      location: null,
      description: null,
      achievements: null,
      category: "books"
    },
    {
      id: 7,
      title: "The Coming Wave",
      role: "Mustafa Suleyman",
      period: null,
      location: null,
      description: null,
      achievements: null,
      category: "books"
    },
  ];

  // Filter activities by category
  const filterByCategory = (category) => {
    return activities.filter(activity => activity.category === category);
  };

  // Get icon by category
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'leadership':
        return <Users className="h-6 w-6 text-feldgrau" />;
      case 'tech':
        return <Lightbulb className="h-6 w-6 text-feldgrau" />;
      case 'volunteer':
        return <Award className="h-6 w-6 text-feldgrau" />;
      case 'academic':
        return <Award className="h-6 w-6 text-feldgrau" />;
      case 'sports':
        return <Award className="h-6 w-6 text-feldgrau" />;
      case 'books':
        return <BookOpen className="h-6 w-6 text-feldgrau" />;
      default:
        return <Award className="h-6 w-6 text-feldgrau" />;
    }
  };

  // Map categories to display names
  const categoryLabels = {
    'leadership': 'Leadership',
    'tech': 'Technology',
    'volunteer': 'Volunteer Work',
    'academic': 'Academic Activities',
    'sports': 'Sports & Recreation',
    'books': 'My Favorite Books'
  };

  // Get all unique categories
  const categories = [...new Set(activities.map(item => item.category))];

  return (
    <div className="bg-timberwolf">
      {/* Header */}
      <section className="container-section text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-feldgrau">Extracurricular Activities</h1>
        <p className="text-lg md:text-xl text-battleship-gray max-w-3xl mx-auto">
          Beyond academics, I engage in various activities that help me develop leadership, teamwork, and other valuable skills.
        </p>
      </section>

      {/* Activities by Category */}
      {categories.map((category, index) => (
          <section
            key={category}
            className={`max-w-7xl mx-auto px-4 py-6 md:py-8 animate-fade-in ${
              index % 2 === 0 ? "bg-silver/20" : ""
            }`}
          >
          <div className="flex items-center mb-8">
            <div className="mr-4 bg-feldgrau/10 p-2 rounded-full">
              {getCategoryIcon(category)}
            </div>
            <h2 className="section-title mb-0">{categoryLabels[category]}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filterByCategory(category).map(activity => (
              <div key={activity.id} className="bg-white/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-silver/30 group">
                <h3 className="text-xl font-bold text-feldgrau mb-2 group-hover:text-battleship-gray transition-colors">
                  {activity.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-x-4 mb-4">
                  <div className="flex items-center text-battleship-gray">
                    <Badge variant="outline" className="bg-ash-gray/10 text-feldgrau/80 border-silver/30">
                      {activity.role}
                    </Badge>
                  </div>
                  
                  {activity.period && <div className="flex items-center text-battleship-gray text-sm mt-1">
                    <Calendar className="h-4 w-4 mr-1" /> {activity.period}
                  </div>}
                  
                  {activity.location && <div className="flex items-center text-battleship-gray text-sm mt-1">
                    <MapPin className="h-4 w-4 mr-1" /> {activity.location}
                  </div>}
                </div>
                
                {activity.description && <p className="mb-4">{activity.description}</p>}
                
                {activity.achievements && <div>
                  <h4 className="font-semibold text-feldgrau mb-2">Key Contributions:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {activity.achievements.map((achievement, index) => (
                      <li key={index} className=" text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Extracurriculars;
