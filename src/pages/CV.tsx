
import React from 'react';
import { FileText, Download, BookOpen, Briefcase, Award, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CV = () => {
  return (
    <div className="bg-timberwolf">
      {/* Header */}
      <section className="container-section text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-feldgrau">Curriculum Vitae</h1>
        <p className="text-lg md:text-xl text-ash-gray max-w-3xl mx-auto">
          My academic, research, and professional experience in the field of Computer Science.
        </p>
        <div className="mt-6">
          <Button className="bg-feldgrau hover:bg-feldgrau/90 text-timberwolf">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </div>
      </section>

      {/* CV Content */}
      <section className="container-section max-w-5xl mx-auto bg-white/50 rounded-lg p-8 shadow-md">
        {/* Education Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-6 w-6 text-feldgrau mr-3" />
            <h2 className="text-2xl font-bold text-feldgrau">Education</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-2 border-battleship-gray/30 pl-5 ml-3 relative py-2">
              <div className="absolute w-4 h-4 bg-battleship-gray rounded-full -left-[10px] top-3"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-feldgrau">PhD in Computer Science</h3>
                <div className="text-battleship-gray">
                  <Badge variant="outline" className="bg-silver/20">Upcoming - Fall 2023</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2">Vanderbilt University, Nashville, TN</p>
              <p className="text-ash-gray">
                Starting PhD program with research focus on [your research area]. 
              </p>
            </div>
            
            <div className="border-l-2 border-battleship-gray/30 pl-5 ml-3 relative py-2">
              <div className="absolute w-4 h-4 bg-battleship-gray rounded-full -left-[10px] top-3"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-feldgrau">BS in Computer Science</h3>
                <div className="text-battleship-gray">
                  <Badge variant="outline" className="bg-silver/20">2019 - 2023</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2">Vanderbilt University, Nashville, TN</p>
              <p className="text-ash-gray mb-2">
                GPA: 3.X/4.0
              </p>
              <p className="text-ash-gray">
                Relevant coursework: Algorithms, Data Structures, Machine Learning, Software Engineering, Database Systems, Computer Networks
              </p>
            </div>
          </div>
        </div>
        
        {/* Research Experience */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-feldgrau mr-3" />
            <h2 className="text-2xl font-bold text-feldgrau">Research Experience</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-2 border-battleship-gray/30 pl-5 ml-3 relative py-2">
              <div className="absolute w-4 h-4 bg-battleship-gray rounded-full -left-[10px] top-3"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-feldgrau">Undergraduate Research Assistant</h3>
                <div className="text-battleship-gray">
                  <Badge variant="outline" className="bg-silver/20">2021 - 2023</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2">Laboratory Name, Vanderbilt University</p>
              <ul className="list-disc list-outside ml-4 text-ash-gray space-y-2">
                <li>Conducted research on [research topic] under the supervision of Prof. [Name]</li>
                <li>Implemented and evaluated algorithms for [specific task]</li>
                <li>Published findings in [journal/conference name]</li>
                <li>Collaborated with graduate students and faculty on [project]</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-battleship-gray/30 pl-5 ml-3 relative py-2">
              <div className="absolute w-4 h-4 bg-battleship-gray rounded-full -left-[10px] top-3"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-feldgrau">Summer Research Intern</h3>
                <div className="text-battleship-gray">
                  <Badge variant="outline" className="bg-silver/20">Summer 2022</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2">Research Institution Name</p>
              <ul className="list-disc list-outside ml-4 text-ash-gray space-y-2">
                <li>Participated in [research program name]</li>
                <li>Developed [tool/system] for [purpose]</li>
                <li>Presented findings at [event/symposium]</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Professional Experience */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="h-6 w-6 text-feldgrau mr-3" />
            <h2 className="text-2xl font-bold text-feldgrau">Professional Experience</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-2 border-battleship-gray/30 pl-5 ml-3 relative py-2">
              <div className="absolute w-4 h-4 bg-battleship-gray rounded-full -left-[10px] top-3"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-feldgrau">Software Engineering Intern</h3>
                <div className="text-battleship-gray">
                  <Badge variant="outline" className="bg-silver/20">Summer 2021</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2">Company Name, Location</p>
              <ul className="list-disc list-outside ml-4 text-ash-gray space-y-2">
                <li>Developed and maintained features for [product/service]</li>
                <li>Collaborated with team members using Agile methodologies</li>
                <li>Implemented [specific technology] to improve [metric]</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-battleship-gray/30 pl-5 ml-3 relative py-2">
              <div className="absolute w-4 h-4 bg-battleship-gray rounded-full -left-[10px] top-3"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-feldgrau">Teaching Assistant</h3>
                <div className="text-battleship-gray">
                  <Badge variant="outline" className="bg-silver/20">2020 - 2023</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2">Department of Computer Science, Vanderbilt University</p>
              <ul className="list-disc list-outside ml-4 text-ash-gray space-y-2">
                <li>Assisted professors in teaching [course names]</li>
                <li>Held office hours and lab sessions to help students</li>
                <li>Graded assignments and provided feedback</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Award className="h-6 w-6 text-feldgrau mr-3" />
            <h2 className="text-2xl font-bold text-feldgrau">Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-feldgrau">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-battleship-gray/20 text-feldgrau border-none">Python</Badge>
                <Badge className="bg-battleship-gray/20 text-feldgrau border-none">Java</Badge>
                <Badge className="bg-battleship-gray/20 text-feldgrau border-none">C/C++</Badge>
                <Badge className="bg-battleship-gray/20 text-feldgrau border-none">JavaScript</Badge>
                <Badge className="bg-battleship-gray/20 text-feldgrau border-none">SQL</Badge>
                <Badge className="bg-battleship-gray/20 text-feldgrau border-none">R</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-feldgrau">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-ash-gray/20 text-feldgrau border-none">TensorFlow</Badge>
                <Badge className="bg-ash-gray/20 text-feldgrau border-none">PyTorch</Badge>
                <Badge className="bg-ash-gray/20 text-feldgrau border-none">React</Badge>
                <Badge className="bg-ash-gray/20 text-feldgrau border-none">Node.js</Badge>
                <Badge className="bg-ash-gray/20 text-feldgrau border-none">Git</Badge>
                <Badge className="bg-ash-gray/20 text-feldgrau border-none">Docker</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-feldgrau">Research Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-silver/20 text-feldgrau border-none">Data Analysis</Badge>
                <Badge className="bg-silver/20 text-feldgrau border-none">Machine Learning</Badge>
                <Badge className="bg-silver/20 text-feldgrau border-none">Algorithm Design</Badge>
                <Badge className="bg-silver/20 text-feldgrau border-none">Scientific Writing</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-feldgrau">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-silver/20 text-feldgrau border-none">Communication</Badge>
                <Badge className="bg-silver/20 text-feldgrau border-none">Team Collaboration</Badge>
                <Badge className="bg-silver/20 text-feldgrau border-none">Problem Solving</Badge>
                <Badge className="bg-silver/20 text-feldgrau border-none">Time Management</Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Publications */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-feldgrau mr-3" />
            <h2 className="text-2xl font-bold text-feldgrau">Selected Publications</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-timberwolf/50 rounded-md">
              <p className="text-ash-gray">
                <span className="font-semibold text-feldgrau">Your Name</span>, Author 2, Author 3. (2023). "Publication Title: A Study on Something Important." 
                <span className="italic">Journal Name</span>, Vol(Issue), Pages.
              </p>
            </div>
            
            <div className="p-4 bg-timberwolf/50 rounded-md">
              <p className="text-ash-gray">
                Author 1, <span className="font-semibold text-feldgrau">Your Name</span>, Author 3. (2022). "Another Publication Title." 
                <span className="italic">Conference Name</span>, Pages.
              </p>
            </div>
            
            <div className="mt-4">
              <Button asChild variant="outline" className="border-feldgrau text-feldgrau hover:bg-feldgrau/10">
                <a href="/publications">
                  View All Publications
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
