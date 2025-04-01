
import React from 'react';
import { Users, Calendar, MapPin, Award, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Extracurriculars = () => {
  // Sample extracurricular activities data
  const activities = [
    {
      id: 1,
      title: "Computer Science Student Association",
      role: "President",
      period: "2021 - 2023",
      location: "Vanderbilt University",
      description: "Led a student organization dedicated to enhancing the computer science experience for undergraduate students through workshops, networking events, and mentorship programs.",
      achievements: [
        "Organized 15+ technical workshops and career development events",
        "Established a mentorship program connecting underclassmen with seniors and graduate students",
        "Increased membership by 40% through active recruitment and engaging programming"
      ],
      category: "leadership"
    },
    {
      id: 2,
      title: "Vanderbilt Hackathon",
      role: "Organizer & Participant",
      period: "2020 - 2023",
      location: "Vanderbilt University",
      description: "Helped organize and participated in annual hackathons, bringing together students to collaborate on innovative software projects within a limited timeframe.",
      achievements: [
        "Won 'Best AI Implementation' award in 2022",
        "Led a team that developed a [project description]",
        "Organized workshops to help newcomers prepare for the competition"
      ],
      category: "tech"
    },
    {
      id: 3,
      title: "Volunteer Coding Instructor",
      role: "Instructor",
      period: "2019 - 2022",
      location: "Local Middle Schools, Nashville",
      description: "Taught programming fundamentals to middle school students, aiming to increase interest in computer science among younger generations.",
      achievements: [
        "Developed curriculum for beginners using Scratch and Python",
        "Mentored over 50 students, with several continuing to advanced programming courses",
        "Organized an end-of-year coding showcase for students to present their projects"
      ],
      category: "volunteer"
    },
    {
      id: 4,
      title: "Research Symposium Committee",
      role: "Committee Member",
      period: "2022",
      location: "Vanderbilt University",
      description: "Served on the committee organizing the annual undergraduate research symposium, showcasing student research across various disciplines.",
      achievements: [
        "Reviewed research abstracts for selection",
        "Coordinated the computer science section of the symposium",
        "Implemented a digital platform for abstract submission and review"
      ],
      category: "academic"
    },
    {
      id: 5,
      title: "Intramural Sports",
      role: "Team Captain",
      period: "2019 - 2023",
      location: "Vanderbilt University",
      description: "Participated in intramural sports including soccer and basketball, promoting physical wellness alongside academic pursuits.",
      achievements: [
        "Led soccer team to intramural championship in 2021",
        "Organized regular practice sessions and team building activities",
        "Balanced competitive play with inclusive team atmosphere"
      ],
      category: "sports"
    },
    {
      id: 6,
      title: "Tech Startup Weekend",
      role: "Participant",
      period: "2022",
      location: "Nashville, TN",
      description: "Participated in an intensive 54-hour event where participants work in teams to develop business models and prototypes for tech startups.",
      achievements: [
        "Developed a prototype for a [product/service description]",
        "Pitched to a panel of local entrepreneurs and investors",
        "Received honorable mention for innovation potential"
      ],
      category: "tech"
    }
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
    'sports': 'Sports & Recreation'
  };

  // Get all unique categories
  const categories = [...new Set(activities.map(item => item.category))];

  return (
    <div className="bg-timberwolf">
      {/* Header */}
      <section className="container-section text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-feldgrau">Extracurricular Activities</h1>
        <p className="text-lg md:text-xl text-ash-gray max-w-3xl mx-auto">
          Beyond academics, I engage in various activities that help me develop leadership, teamwork, and other valuable skills.
        </p>
      </section>

      {/* Activities by Category */}
      {categories.map(category => (
        <section key={category} className={`container-section ${category % 2 === 0 ? 'bg-silver/20' : ''}`}>
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
                  
                  <div className="flex items-center text-ash-gray text-sm mt-1">
                    <Calendar className="h-4 w-4 mr-1" /> {activity.period}
                  </div>
                  
                  <div className="flex items-center text-ash-gray text-sm mt-1">
                    <MapPin className="h-4 w-4 mr-1" /> {activity.location}
                  </div>
                </div>
                
                <p className="text-ash-gray mb-4">{activity.description}</p>
                
                <div>
                  <h4 className="font-semibold text-feldgrau mb-2">Key Contributions:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {activity.achievements.map((achievement, index) => (
                      <li key={index} className="text-ash-gray text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Extracurriculars;
