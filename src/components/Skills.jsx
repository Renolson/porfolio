import { motion } from 'framer-motion'
import {
  FaMicrochip, FaWifi, FaRaspberryPi, FaCode, FaTerminal,
  FaLaptopCode, FaTools, FaCloud, FaDatabase, FaServer,
  FaChartBar, FaEye, FaRobot, FaBrain, FaCamera,
  FaGitAlt, FaLinux, FaCogs, FaDraftingCompass, FaCube
} from 'react-icons/fa'
import {
  SiEasyeda, SiAutocad, SiPostgresql, SiMongodb, SiGrafana
} from 'react-icons/si'
import {
  IoHardwareChip
} from 'react-icons/io5'

const Skills = () => {
  const getGradientColor = (categoryIndex) => {
    const gradients = [
      'from-orange-500 to-red-600',      // Hardware & Embedded Systems
      'from-green-500 to-teal-600',      // Programming Languages
      'from-purple-500 to-pink-600',     // CAD & Design Software
      'from-blue-500 to-indigo-600',     // Cloud & Database Systems
      'from-yellow-500 to-orange-600',   // Data Visualization & AI/CV
      'from-cyan-500 to-blue-600'        // Robotics & Development Tools
    ]
    return gradients[categoryIndex] || 'from-blue-500 to-purple-600'
  }

  const skillCategories = [
    {
      title: 'Hardware & Embedded Systems',
      skills: [
        { name: 'Arduino', icon: FaMicrochip },
        { name: 'NodeMCU', icon: FaWifi },
        { name: 'Raspberry Pi', icon: FaRaspberryPi },
        { name: 'Sensors & Actuators', icon: FaCogs },
        { name: 'PCB Design', icon: FaTools },
        { name: 'EasyEDA', icon: SiEasyeda }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaCode },
        { name: 'C++', icon: FaTerminal },
        { name: 'JavaScript', icon: FaLaptopCode },
        { name: 'MATLAB', icon: FaLaptopCode },
        { name: 'HTML/CSS', icon: FaLaptopCode },
        { name: 'Embedded C', icon: FaMicrochip }
      ]
    },
    {
      title: 'CAD & Design Software',
      skills: [
        { name: 'SolidWorks', icon: FaCube },
        { name: 'AutoCAD', icon: SiAutocad },
        { name: 'Technical Drawing', icon: FaDraftingCompass }
      ]
    },
    {
      title: 'Cloud & Database Systems',
      skills: [
        { name: 'AWS IoT Core', icon: FaCloud },
        { name: 'AWS EC2', icon: FaCloud },
        { name: 'AWS S3', icon: FaCloud },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'PgAdmin4', icon: FaServer }
      ]
    },
    {
      title: 'Data Visualization & AI/CV',
      skills: [
        { name: 'Grafana', icon: SiGrafana },
        { name: 'MQTT Protocol', icon: FaWifi },
        { name: 'Dashboard Development', icon: FaChartBar },
        { name: 'OpenCV', icon: FaEye },
        { name: 'Machine Learning', icon: FaBrain },
        { name: 'Image Processing', icon: FaCamera }
      ]
    },
    {
      title: 'Robotics & Development Tools',
      skills: [
        { name: 'ROS (Robot Operating System)', icon: FaRobot },
        { name: 'NVIDIA Jetson Nano', icon: FaMicrochip },
        { name: 'Git/GitHub', icon: FaGitAlt },
        { name: 'VS Code', icon: FaCode },
        { name: 'Arduino IDE', icon: FaTools },
        { name: 'Linux/Ubuntu', icon: FaLinux }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${getGradientColor(categoryIndex)} rounded-xl flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

