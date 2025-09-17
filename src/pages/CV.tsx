
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
        <p className="text-lg md:text-xl text-battleship-gray max-w-3xl mx-auto">
          My academic, research, and professional experience in the field of Computer Science.
        </p>
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
                  <Badge variant="outline" className="bg-silver/20">August 2025 - May 2030 (Expected)</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2"><i>Vanderbilt University, Nashville, TN</i></p>
              <p >
                Currently pursuing research areas in computer graphics, security, and artifical intelligence. 
              </p>
            </div>
            
            <div className="border-l-2 border-battleship-gray/30 pl-5 ml-3 relative py-2">
              <div className="absolute w-4 h-4 bg-battleship-gray rounded-full -left-[10px] top-3"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-feldgrau">BS in Computer Science</h3>
                <div className="text-battleship-gray">
                  <Badge variant="outline" className="bg-silver/20">2022 - 2025</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2"><i>Vanderbilt University, Nashville, TN</i></p>
              <p className="text-battleship-gray mb-2">
                GPA: 3.7/4.0
              </p>
              <p>
                  <b>Relevant Coursework:</b> Data Structures, Discrete Structures, Algorithms, 
                  Intermediate Software Design, Error-Correcting Codes and Cryptography, 
                  Web-Based System Architecture, UX Design, Algorithms for Decision Making, Formal Methods            
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
                <h3 className="text-xl font-bold text-feldgrau">Graduate Research Assistant</h3>
                <div className="text-battleship-gray">
                  <Badge variant="outline" className="bg-silver/20">2025 - Present</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2"><i>Simulation, Optimization, and Learning Lab, Vanderbilt University</i></p>
              <ul className="list-disc list-outside ml-4 space-y-2">
                <li>Currently pursuing research topics under the supervision of Dr. Hyde</li>
                <li>Exploring areas of Virtual Reality (VR), security, and quantum computing.</li>
              </ul>
            </div>

            <div className="border-l-2 border-battleship-gray/30 pl-5 ml-3 relative py-2">
              <div className="absolute w-4 h-4 bg-battleship-gray rounded-full -left-[10px] top-3"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-feldgrau">Undergraduate Research Assistant</h3>
                <div className="text-battleship-gray">
                  <Badge variant="outline" className="bg-silver/20">May 2022 - August 2022</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2"><i>Wallace Lab, Vanderbilt University</i></p>
              <ul className="list-disc list-outside ml-4 space-y-2">
                <li>Partnered with Vanderbilt graduate students in multisensory neuroscience research</li>
                <li>Analyzed data to create a literature review for a metanalysis research paper</li>
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

          <div className="border-l-2 border-battleship-gray/30 pl-5 ml-3 relative py-2">
              <div className="absolute w-4 h-4 bg-battleship-gray rounded-full -left-[10px] top-3"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-feldgrau">Teaching Assistant</h3>
                <div className="text-battleship-gray">
                  <Badge variant="outline" className="bg-silver/20">August 2025 - Present</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2"><i>Department of Computer Science, Vanderbilt University</i></p>
              <ul className="list-disc list-outside ml-4 space-y-2">
                <li>Assisting Prof. Hemingway in Web-Based System Architecture (CS4278)</li>
                <li>Held office hours to help 32 students enrolled</li>
                <li>Graded assignments and provided feedback</li>
              </ul>
            </div>
          
          <div className="space-y-6">
            <div className="border-l-2 border-battleship-gray/30 pl-5 ml-3 relative py-2">
              <div className="absolute w-4 h-4 bg-battleship-gray rounded-full -left-[10px] top-3"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-feldgrau">Product Management and Engineering Intern</h3>
                <div className="text-battleship-gray">
                  <Badge variant="outline" className="bg-silver/20">January 2024 - August 2024</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2"><i>Phosphorus Cybersecurity, Nashville, TN</i></p>
              <ul className="list-disc list-outside ml-4 space-y-2">
                <li>Developed new workflows and streamlined Engineering processes utilizing Jira</li>
                <li>Significantly enhancing response time to over 200 bug reports and support requests</li>
                <li>Authored comprehensive documentation to assist cross-functional teammates and customers</li>
                <li>Collaborated on a group project to create a company Intranet</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-battleship-gray/30 pl-5 ml-3 relative py-2">
              <div className="absolute w-4 h-4 bg-battleship-gray rounded-full -left-[10px] top-3"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-feldgrau">Teaching Assistant</h3>
                <div className="text-battleship-gray">
                  <Badge variant="outline" className="bg-silver/20">January 2024 - August 2024</Badge>
                </div>
              </div>
              <p className="text-battleship-gray mb-2"><i>Department of Engineering Management, Vanderbilt University</i></p>
              <ul className="list-disc list-outside ml-4 space-y-2">
                <li>Assisted Prof. Kostoulas in Technology Strategy (ENGM2210)</li>
                <li>Held office hours to help students</li>
                <li>Graded assignments and presentations, provided feedback</li>
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
                <Badge className="bg-battleship-gray/20 text-feldgrau border-none">Typescript</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-feldgrau">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-ash-gray/20 text-feldgrau border-none">Express</Badge>
                <Badge className="bg-ash-gray/20 text-feldgrau border-none">Socket.io</Badge>
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
                <Badge className="bg-silver/20 text-feldgrau border-none">Scientific Writing</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-feldgrau">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-silver/20 text-feldgrau border-none">Communication</Badge>
                <Badge className="bg-silver/20 text-feldgrau border-none">Problem Solving</Badge>
                <Badge className="bg-silver/20 text-feldgrau border-none">Project Management</Badge>
                <Badge className="bg-silver/20 text-feldgrau border-none">Spanish Language</Badge>
                <Badge className="bg-silver/20 text-feldgrau border-none">Public Speaking</Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Publications */}
        {/* <div className="mb-12">
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
        </div> */}
      </section>
    </div>
  );
};

export default CV;
