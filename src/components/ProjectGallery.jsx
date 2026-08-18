import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
  Award,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Wrench,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProjectGallery = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projectDetails = {
    'pill-pal': {
      title: 'Pill Pal - Automated Pill Dispenser',
      description:
        'IoT-based medication management system with scheduled dispensing and alert functionality.',
      longDescription:
        'Pill Pal is an automated medication dispensing prototype developed to support scheduled medicine intake. The system combines embedded control, sensing, actuation and IoT connectivity to dispense medication at preset times and provide status or reminder notifications.',
      images: [
        '/pill pal pic.png',
        '/pp1.png',
        '/pp2.png',
        '/pp3.png',
        '/pp4.png',
      ],
      technologies: ['NodeMCU', 'Arduino', 'C++', 'Sensors', 'Actuators', 'IoT', '3D Printing'],
      features: [
        'Scheduled automated pill dispensing',
        'Embedded sensing and actuator control',
        'IoT-enabled status and reminder notifications',
        'Prototype enclosure and mechanical fabrication',
        'User-focused medication management concept',
      ],
      challenges: [
        'Reliable mechanical dispensing of tablets',
        'Coordinating timing, sensing and actuation',
        'Integrating embedded hardware inside a compact enclosure',
        'Maintaining simple and reliable user operation',
      ],
      outcomes: [
        'Completed working prototype',
        'Integrated embedded hardware and mechanical dispensing',
        'Demonstrated scheduled medication dispensing',
        'Applied IoT concepts to a healthcare-oriented prototype',
      ],
      duration: '2 months',
      team: 'Project team',
      status: 'Completed',
      github: null,
      demo: null,
    },

    'smart-agro': {
      title: 'Smart Agro Project',
      description:
        'IoT-based smart irrigation and field monitoring platform using AWS cloud services and MQTT.',
      longDescription:
        'Smart Agro was developed during industrial training at SLT Digital Lab. The project focused on collecting field sensor data, transmitting it through MQTT to AWS IoT services, visualising live and historical information, and enabling remote monitoring for irrigation-oriented agricultural applications.',
      images: ['/agro1.png', '/agro2.png', '/agro3.png'],
      technologies: ['AWS IoT Core', 'AWS EC2', 'AWS S3', 'Grafana', 'MQTT', 'Python', 'Sensors'],
      features: [
        'Real-time field sensor monitoring',
        'MQTT-based IoT communication',
        'AWS IoT Core cloud integration',
        'Grafana dashboard visualisation',
        'Remote monitoring of agricultural conditions',
        'Cloud-based storage and processing workflow',
      ],
      challenges: [
        'Reliable sensor-to-cloud communication',
        'Organising real-time IoT data flows',
        'Integrating multiple AWS services',
        'Presenting sensor information clearly for monitoring',
      ],
      outcomes: [
        'Developed a working smart agriculture prototype',
        'Implemented MQTT-based sensor data transfer',
        'Integrated cloud services for monitoring and storage',
        'Created real-time dashboard visualisation',
      ],
      duration: 'Industrial Training Project',
      team: 'SLT Digital Lab R&D',
      status: 'Completed',
      github: null,
      demo: null,
    },

    // IMPORTANT: this ID matches Projects.jsx exactly: id: 'Nova-robot'
    'Nova-robot': {
      title: 'Development of a 12-DOF Quadrupedal Robot with Enhanced Navigation',
      description:
        'Final-year engineering project focused on the design and development of a locally fabricated 12-DOF quadrupedal robot with embedded control, gait generation, sensing and telemetry.',
      longDescription:
        'This final-year project develops a locally fabricated quadrupedal robotic platform with four 3-DOF legs, giving a total of 12 degrees of freedom. The system combines mechanical design, forward and inverse kinematics, MATLAB gait simulation, serial-bus servo control, ESP32-based real-time control, IMU sensing and MQTT telemetry. The current prototype supports multiple postures and locomotion modes, while ROS2, simulation and enhanced navigation are being developed as the higher-level expansion of the platform.',
      images: [
        '/nova1.jpeg',
        '/nova2.jpeg',
        '/nova3.png',
        '/nova5.png',
        '/nova6.png',
        '/nova7.jpeg',
        '/nova4.png',
      ],
      technologies: [
        'ESP32',
        '12× STS3215',
        'FE-URT-1',
        'MPU-6050',
        'C/C++',
        'Python',
        'MATLAB',
        'ROS2',
        'URDF',
        'Gazebo',
        'MQTT',
        'SolidWorks',
        '3D Printing',
      ],
      features: [
        '12-DOF architecture with four independently controlled 3-DOF legs',
        'Hip roll, hip pitch and knee pitch joints on each leg',
        '12 Feetech STS3215 serial-bus servos with feedback capability',
        'Forward and inverse kinematic modelling for leg motion',
        'MATLAB-based leg trajectory and gait simulation',
        'ESP32-based real-time gait, posture and servo control',
        'MPU-6050 6-axis IMU integration for motion and orientation monitoring',
        'MQTT telemetry for IMU and robot status data',
        'Remote mode selection for robot motions and postures',
        'ROS2 / URDF / Gazebo expansion for higher-level simulation and navigation research',
      ],
      challenges: [
        'Synchronising 12 servo actuators during coordinated gait execution',
        'Designing stable leg trajectories while maintaining body balance',
        'Calibrating joint positions and implementing reliable inverse kinematics',
        'Managing high-current servo power separately from control electronics',
        'Integrating servo feedback, IMU sensing and MQTT telemetry into one system',
        'Developing a modular mechanical structure suitable for local fabrication and maintenance',
      ],
      outcomes: [
        'Built and assembled a functional 12-DOF quadrupedal robot prototype',
        'Achieved stable standing, sitting and multiple body postures',
        'Implemented forward and backward walking motions',
        'Implemented body sway and front/rear push-up motion sequences',
        'Completed leg kinematic modelling and MATLAB gait simulation',
        'Integrated MPU-6050 IMU sensing and live MQTT telemetry',
        'Established a platform for continued ROS2, balance-control and navigation development',
      ],
      duration: 'Final Year Project — Ongoing',
      team: '3 members',
      status: 'Ongoing',
      github: null,
      demo: null,
    },
  }

  // Supports both the current Projects.jsx ID and a lowercase alias if you use it later.
  const projectAliases = {
    'nova-robot': 'Nova-robot',
    'jr25-robot': 'Nova-robot',
  }

  const resolvedProjectId = projectAliases[project] || project
  const currentProject = projectDetails[resolvedProjectId] || projectDetails['pill-pal']

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [project, isOpen])

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    )
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
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

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-6xl max-h-[92vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ scale: 0.94, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 25 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-border flex-shrink-0">
              <div className="flex items-start gap-4 min-w-0">
                <div className="hidden sm:flex w-14 h-14 rounded-xl overflow-hidden bg-muted border border-border flex-shrink-0 items-center justify-center">
                  <img
                    src={currentProject.images[0]}
                    alt={`${currentProject.title} cover`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                    {currentProject.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {currentProject.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1.5" />
                      {currentProject.team}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        currentProject.status === 'Completed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-950/40 dark:text-green-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                      }`}
                    >
                      {currentProject.status}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="flex-shrink-0"
                aria-label="Close project gallery"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-grow">
              <div className="p-5 sm:p-6 space-y-8">
                {/* Image Viewer */}
                {currentProject.images?.length > 0 && (
                  <div className="space-y-4">
                    <div className="relative w-full h-[280px] sm:h-[420px] bg-muted/50 rounded-xl overflow-hidden border border-border flex items-center justify-center group">
                      <motion.img
                        key={currentProject.images[currentImageIndex]}
                        src={currentProject.images[currentImageIndex]}
                        alt={`${currentProject.title} - image ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                      />

                      {currentProject.images.length > 1 && (
                        <>
                          <button
                            onClick={previousImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/55 text-white flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>

                          <button
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/55 text-white flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>

                          <div className="absolute right-3 bottom-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs">
                            {currentImageIndex + 1} / {currentProject.images.length}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Thumbnails */}
                    {currentProject.images.length > 1 && (
                      <div className="flex gap-3 overflow-x-auto pb-2 justify-start sm:justify-center">
                        {currentProject.images.map((imgSrc, index) => (
                          <motion.button
                            key={`${currentProject.title}-thumb-${index}`}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-20 h-16 sm:w-24 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                              currentImageIndex === index
                                ? 'border-primary shadow-md'
                                : 'border-border opacity-65 hover:opacity-100'
                            }`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <img
                              src={imgSrc}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Description */}
                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Project Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentProject.longDescription}
                  </p>
                </section>

                {/* Technologies */}
                <section className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Code className="w-5 h-5 mr-2 text-primary" />
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Features */}
                <section className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-primary" />
                    Key Features & Contributions
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentProject.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-start gap-3 p-4 bg-muted/45 border border-border/70 rounded-xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Challenges + Outcomes */}
                <div className="grid md:grid-cols-2 gap-6">
                  <section className="space-y-4 p-5 rounded-xl bg-muted/30 border border-border">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Wrench className="w-5 h-5 mr-2 text-primary" />
                      Engineering Challenges
                    </h3>
                    <div className="space-y-3">
                      {currentProject.challenges.map((challenge) => (
                        <div key={challenge} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {challenge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-4 p-5 rounded-xl bg-muted/30 border border-border">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Award className="w-5 h-5 mr-2 text-primary" />
                      Outcomes
                    </h3>
                    <div className="space-y-3">
                      {currentProject.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Optional Links */}
                {(currentProject.demo || currentProject.github) && (
                  <div className="flex flex-wrap gap-4 pt-5 border-t border-border">
                    {currentProject.demo && (
                      <a
                        href={currentProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[200px]"
                      >
                        <Button className="w-full">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Demo
                        </Button>
                      </a>
                    )}

                    {currentProject.github && (
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[200px]"
                      >
                        <Button variant="outline" className="w-full">
                          <Github className="w-4 h-4 mr-2" />
                          View Source Code
                        </Button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectGallery
