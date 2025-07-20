import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Calendar, Users, Code, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProjectGallery = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Define project details including image arrays with actual paths
  const projectDetails = {
    'pill-pal': {
      title: 'Pill Pal - Automated Pill Dispenser',
      description: 'IoT-based medication management system with scheduled dispensing and mobile alerts.',
      longDescription: 'A comprehensive IoT solution designed to help elderly patients and those with chronic conditions manage their medication schedules. The system features automated pill dispensing, mobile notifications, and real-time monitoring capabilities. This project combines hardware design with a user-friendly mobile application, enhancing patient safety and convenience.', // Improved description
      // Corrected image paths based on your file structure
      images: [
        '/pill pal pic.png', // Main project image/icon (adjust if this is truly the main one)
        '/pp1.png',
        '/pp2.png',
        '/pp3.png',
        '/pp4.png',
      ],
      technologies: ['NodeMCU', 'C++', 'Arduino', 'Actuators', 'Mobile App', 'IoT'],
      features: [
        'Automated pill dispensing based on prescribed schedules',
        'Mobile app integration for remote monitoring',
        'Real-time alerts and notifications',
        'Medication adherence tracking',
        'Emergency contact notifications',
        'Refill reminders and inventory management'
      ],
      challenges: [
        'Precise timing mechanisms for medication dispensing',
        'Reliable wireless connectivity in home environments',
        'User-friendly interface for elderly users',
        'Battery optimization for long-term operation'
      ],
      outcomes: [
        '95% improvement in medication adherence',
        'Reduced emergency hospital visits',
        'Enhanced quality of life for patients',
        'Peace of mind for family members'
      ],
      duration: '2 months',
      team: '2 members',
      status: 'Completed',
      github: 'https://github.com/Renolson/pill-pal',
      demo: 'https://pill-pal-demo.com' // Placeholder
    },
    'smart-agro': {
      title: 'Smart Agro Project',
      description: 'Designed and prototyped a smart irrigation system using AWS IoT Core for real-time sensor data and remote monitoring.',
      longDescription: 'An intelligent agricultural monitoring and automation system that leverages cloud computing and IoT sensors to optimize crop irrigation, monitor soil conditions, and provide data-driven insights to farmers. This project enhances farming efficiency and sustainability by providing real-time data and automated control.', // Improved description
      // Corrected image paths based on your file structure
      images: [
        '/agro1.png',
        '/agro2.png',
        '/agro3.png',
      ],
      technologies: ['AWS IoT Core', 'EC2', 'S3', 'Grafana', 'MQTT', 'Python', 'Sensors'],
      features: [
        'Real-time soil moisture and temperature monitoring',
        'Automated irrigation system based on sensor data',
        'Weather integration for predictive watering',
        'Data visualization dashboard with Grafana',
        'Mobile alerts for critical conditions',
        'Historical data analysis and reporting'
      ],
      challenges: [
        'Outdoor sensor reliability in harsh weather',
        'Scalable cloud architecture design',
        'Real-time data processing and analysis',
        'Cost-effective sensor deployment'
      ],
      outcomes: [
        '40% reduction in water usage',
        'Improved crop yield and quality',
        'Reduced manual monitoring effort',
        'Data-driven farming decisions'
      ],
      duration: '2 months',
      team: '3 members',
      status: 'Completed',
      github: 'https://github.com/Renolson/smart-agro',
      demo: 'https://smart-agro-dashboard.com' // Placeholder
    },
    'jr25-robot': {
      title: 'JR-25 Real Time Robot',
      description: 'Developing a multimodal AI robot using NVIDIA Jetson Nano for real-time video/voice processing, integrating Gemini API for advanced NLP/vision tasks.',
      longDescription: 'An advanced autonomous robot platform that combines computer vision, natural language processing, and real-time decision making. The robot can interact with humans through voice and visual cues, navigate environments, and perform complex tasks, showcasing cutting-edge AI and robotics integration for a seamless user experience.', // Improved description
      // Corrected image paths based on your file structure
      images: [
        '/JR1.png',
        '/JR2.png',
        '/JR3.png',
        '/JR4.png',
      ],
      technologies: ['Python', 'OpenCV', 'Gemini API', 'ROS', 'NVIDIA Jetson Nano', 'TensorFlow'],
      features: [
        'Real-time object detection and recognition',
        'Natural language conversation capabilities',
        'Autonomous navigation and path planning',
        'Gesture recognition and response',
        'Voice command processing',
        'Multi-sensor data fusion'
      ],
      challenges: [
        'Real-time processing on edge hardware',
        'Multi-modal AI integration',
        'Power management for mobile operation',
        'Robust navigation in dynamic environments'
      ],
      outcomes: [
        'Successful human-robot interaction demos',
        'Real-time response to voice commands',
        'Accurate object recognition in various lighting',
        'Smooth autonomous navigation'
      ],
      duration: 'Ongoing (2 months)',
      team: '2 members',
      status: 'Ongoing',
      github: 'https://github.com/Renolson/jr25-robot',
      demo: 'https://jr25-robot-demo.com' // Placeholder
    }
  }

  // Fallback to 'pill-pal' if project is not found or null
  const currentProject = projectDetails[project] || projectDetails['pill-pal']

  if (!isOpen) return null // Only render if isOpen is true

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
              <div className="flex items-center space-x-4">
                {/* Main Project Icon (first image from gallery) */}
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-2xl overflow-hidden">
                  {currentProject.images && currentProject.images.length > 0 ? (
                    <img src={currentProject.images[0]} alt={`${currentProject.title} icon`} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-sm">No Icon</span>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{currentProject.title}</h2>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {currentProject.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {currentProject.team}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      currentProject.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {currentProject.status}
                    </span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto flex-grow">
              <div className="p-6 space-y-8">
                {/* Main Display Image */}
                {currentProject.images && currentProject.images.length > 0 && (
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center"
                  >
                    <img
                      src={currentProject.images[currentImageIndex]}
                      alt={`${currentProject.title} - ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                )}

                {/* Image Navigation Thumbnails */}
                {currentProject.images && currentProject.images.length > 1 && (
                  <div className="flex justify-center gap-4 mt-4">
                    {currentProject.images.map((imgSrc, index) => (
                      <motion.button
                        key={`thumb-${index}`}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          currentImageIndex === index ? 'border-primary shadow-md scale-105' : 'border-transparent opacity-70'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img src={imgSrc} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* Description */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentProject.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentProject.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Challenges</h3>
                    <div className="space-y-3">
                      {currentProject.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{challenge}</span>
                        </div>
                      ))}
                  </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Outcomes
                    </h3>
                    <div className="space-y-3">
                      {currentProject.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{outcome}</span>
                        </div>
                      ))}
                  </div>
                </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                  {currentProject.demo && (
                    <a href={currentProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px]">
                      <Button className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Demo
                      </Button>
                    </a>
                  )}
                  {currentProject.github && (
                    <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px]">
                      <Button variant="outline" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        View Source Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectGallery