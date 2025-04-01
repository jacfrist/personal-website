
import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Publications = () => {
  // Sample publication data
  const publications = [
    {
      id: 1,
      title: "Sample Publication Title: A Study on Computer Science Topic",
      authors: "Your Name, Co-Author 1, Co-Author 2",
      journal: "Journal of Computer Science Research",
      year: 2023,
      abstract: "This is a sample abstract for a publication. It would normally contain a brief summary of the research, methodology, findings, and conclusions. This is where you would describe the significance of your work and its contributions to the field.",
      keywords: ["Machine Learning", "Algorithm Design", "Performance Analysis"],
      doi: "10.1234/sample.123456",
      link: "#",
      type: "journal"
    },
    {
      id: 2,
      title: "Another Research Paper on Advanced Computing Technologies",
      authors: "Your Name, Professor X, Graduate Student Y",
      journal: "International Conference on Computing Systems",
      year: 2022,
      abstract: "This abstract would summarize another piece of research conducted, focusing on advanced computing technologies. It would detail the experimental setup, results, and implications of the findings for future work in the field.",
      keywords: ["Cloud Computing", "Distributed Systems", "Optimization"],
      doi: "10.5678/sample.567890",
      link: "#",
      type: "conference"
    },
    {
      id: 3,
      title: "Undergraduate Thesis: Novel Approaches to Problem X",
      authors: "Your Name, Thesis Advisor",
      journal: "Vanderbilt University",
      year: 2021,
      abstract: "This abstract would describe your undergraduate thesis work, including the research question, methodology, findings, and conclusions. It would highlight the novel approaches developed and their potential applications.",
      keywords: ["Research Topic", "Methodology", "Results Analysis"],
      doi: null,
      link: "#",
      type: "thesis"
    }
  ];

  // Group publications by year
  const groupedByYear = publications.reduce((acc, pub) => {
    acc[pub.year] = acc[pub.year] || [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(groupedByYear).sort((a, b) => parseInt(b) - parseInt(a));

  // Get badge color based on publication type
  const getBadgeColor = (type) => {
    switch(type) {
      case 'journal':
        return 'bg-battleship-gray/20 text-feldgrau border-battleship-gray/30';
      case 'conference':
        return 'bg-ash-gray/30 text-feldgrau border-ash-gray/50';
      case 'thesis':
        return 'bg-silver/30 text-feldgrau border-silver/50';
      default:
        return 'bg-ash-gray/20 text-feldgrau border-ash-gray/30';
    }
  };

  return (
    <div className="bg-timberwolf">
      {/* Header */}
      <section className="container-section text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-feldgrau">Publications</h1>
        <p className="text-lg md:text-xl text-ash-gray max-w-3xl mx-auto">
          My academic publications, research papers, and scholarly contributions in the field of Computer Science.
        </p>
      </section>

      {/* Publications List */}
      <section className="container-section max-w-5xl mx-auto">
        {sortedYears.map(year => (
          <div key={year} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-feldgrau border-b-2 border-battleship-gray/30 pb-2">
              {year}
            </h2>
            <div className="space-y-8">
              {groupedByYear[year].map(publication => (
                <div key={publication.id} className="bg-white/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-silver/30">
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:block mt-1">
                      <div className="bg-feldgrau/10 p-2 rounded-full">
                        <FileText className="h-6 w-6 text-feldgrau" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-feldgrau">{publication.title}</h3>
                      <p className="text-battleship-gray mb-3">{publication.authors}</p>
                      <p className="text-ash-gray italic mb-4">
                        {publication.journal}, {publication.year}
                        {publication.doi && ` • DOI: ${publication.doi}`}
                      </p>
                      
                      <div className="mb-4">
                        <Badge variant="outline" className={getBadgeColor(publication.type)}>
                          {publication.type === 'journal' ? 'Journal Article' : 
                           publication.type === 'conference' ? 'Conference Paper' : 
                           'Thesis'}
                        </Badge>
                      </div>
                      
                      <div className="bg-timberwolf/50 p-4 rounded-md mb-4 text-sm">
                        <h4 className="font-semibold mb-2 text-feldgrau">Abstract</h4>
                        <p className="text-ash-gray">{publication.abstract}</p>
                      </div>
                      
                      {publication.keywords && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2 text-feldgrau">Keywords:</h4>
                          <div className="flex flex-wrap gap-2">
                            {publication.keywords.map(keyword => (
                              <Badge key={keyword} variant="outline" className="bg-ash-gray/10 text-feldgrau/70 border-silver/30">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {publication.link && (
                        <Button asChild size="sm" className="mt-2 bg-feldgrau hover:bg-feldgrau/90 text-timberwolf">
                          <a href={publication.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> View Publication
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Publications;
