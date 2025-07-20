import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Import all necessary Lucide React icons for both timeline and modal
import { ExternalLink, X, Briefcase, GraduationCap, School, Calendar, Users, Award } from 'lucide-react'; 

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      title: 'Electrical & Electronic Engineer Trainee',
      company: 'SLT Digital Lab - Sri Lanka Telecom Research And Development Section',
      period: 'June 2024 - September 2024',
      description: 'Gained hands-on experience in telecommunications research and development, working on cutting-edge projects in IoT (Smart Agro Project) and network infrastructure.',
      icon: Briefcase, // Changed from '💼' to Briefcase icon component
      image: '/slt.jpg', // Add image path (e.g., logo, office)
      link: 'https://www.sltdigitallab.lk/', // Link to organization's website
      modalDescription: 'During my traineeship at SLT Digital Lab, I actively contributed to the Smart Agro Project, focusing on IoT sensor integration and data analysis for smart irrigation. I also assisted in network infrastructure development and gained insights into telecommunication research methodologies. This role provided practical application of my engineering knowledge in a real-world R&D environment.'
    },
    {
      title: 'Engineering Undergraduate',
      company: 'South Eastern University of Sri Lanka',
      period: '2022 - Present', // Changed to Present as per current date
      description: 'Pursuing B.Sc. Eng.(Hons) in Electrical and Telecommunication Engineering with focus on embedded systems, automation and robotics.',
      icon: GraduationCap, // Changed from '🎓' to GraduationCap icon component
      image: '/uni.jpg', // Add image path
      link: 'https://www.seu.ac.lk/', // Link to university website
      modalDescription: 'Currently pursuing my Bachelor of Science in Engineering (Honors) degree, specializing in Electrical and Telecommunication Engineering. My coursework heavily emphasizes embedded systems design, advanced automation techniques, and robotics, preparing me for innovative solutions in these fields. I am actively involved in university projects and research related to these core areas.'
    },
    {
      title: 'Secondary Education',
      company: "St. Xavier's Boys' College",
      period: '2006 - 2019',
      description: 'Completed advanced level education with focus on physical science stream, laying foundation for engineering career.',
      icon: School, // Changed from '🏫' to School icon component
      image: '/school.jpg', // Add image path
      link: 'https://stxbc.lk/', // Placeholder link, find actual one
      modalDescription: 'My foundational education in the physical science stream at St. Xavier\'s Boys\' College provided a robust academic background in Mathematics, Physics, and Chemistry. This period was crucial in developing my analytical skills and fostering a deep curiosity for how things work, ultimately guiding me towards an engineering career.'
    }
  ];

  const openModal = (exp) => {
    setSelectedExperience(exp);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-primary">Journey</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon; // Get the icon component from exp.icon
            return (
              <motion.div
                key={index}
                className="relative flex items-start mb-8 last:mb-0 cursor-pointer"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => openModal(exp)}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-border" />
                )}
                
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl mr-6 z-10">
                  <IconComponent className="w-6 h-6" /> {/* Render the Lucide icon component */}
                </div>
                
                {/* Content */}
                <div className="flex-grow bg-card p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <h4 className="text-primary font-medium mb-2">{exp.company}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Overlay Modal for Experience Details */}
      <AnimatePresence>
        {isModalOpen && selectedExperience && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-xl max-h-[90vh] bg-card rounded-xl shadow-2xl overflow-hidden flex flex-col"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
                <h3 className="text-2xl font-bold">{selectedExperience.title}</h3>
                <button onClick={closeModal} className="text-muted-foreground hover:text-foreground">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 space-y-4">
                {selectedExperience.image && (
                  <div className="w-full h-48 bg-muted rounded-lg overflow-hidden flex items-center justify-center mb-4">
                    <img src={selectedExperience.image} alt={selectedExperience.company} className="w-full h-full object-contain" />
                  </div>
                )}
                
                <h4 className="text-xl font-semibold">{selectedExperience.company}</h4>
                <p className="text-sm text-muted-foreground">{selectedExperience.period}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedExperience.modalDescription || selectedExperience.description}
                </p>

                {selectedExperience.link && (
                  <a href={selectedExperience.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Organization
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;