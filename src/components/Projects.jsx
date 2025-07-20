import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProjectGallery from './ProjectGallery'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const openProjectGallery = (projectId) => {
    setSelectedProject(projectId)
    setIsGalleryOpen(true)
  }

  const closeProjectGallery = () => {
    setIsGalleryOpen(false)
    setSelectedProject(null)
  }
  const projects = [
    {
      id: 'pill-pal',
      title: 'Pill Pal - Automated Pill Dispenser',
      description: 'IoT-based medication management system with scheduled dispensing and mobile alerts.',
      tags: ['NodeMCU', 'C++', 'Arduino', 'Actuators'],
      image: '💊',
      status: 'Completed'
    },
    {
      id: 'smart-agro',
      title: 'Smart Agro Project',
      description: 'Designed and prototyped a smart irrigation system using AWS IoT Core for real-time sensor data and remote monitoring.',
      tags: ['AWS IoT Core', 'EC2', 'S3', 'Grafana', 'MQTT', 'Python'],
      image: '🌱',
      status: 'Completed'
    },
    {
      id: 'jr25-robot',
      title: 'JR-25 Real Time Robot',
      description: 'Developing a multimodal AI robot using NVIDIA Jetson Nano for real-time video/voice processing, integrating Gemini API for advanced NLP/vision tasks.',
      tags: ['Python', 'OpenCV', 'Gemini API', 'ROS'],
      image: '🤖',
      status: 'Ongoing'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => openProjectGallery(project.id)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project Gallery Modal */}
      <ProjectGallery
        isOpen={isGalleryOpen}
        onClose={closeProjectGallery}
        project={selectedProject}
      />
    </section>
  )
}

export default Projects

