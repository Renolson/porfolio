import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ThumbnailNavigation = ({ currentSection }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSection, setHoveredSection] = useState(null)

  const sections = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: '🏠',
      preview: 'Welcome to my portfolio',
      color: 'from-blue-500 to-purple-600'
    },
    { 
      id: 'about', 
      label: 'About', 
      icon: '👨‍💻',
      preview: 'Learn about my background',
      color: 'from-green-500 to-teal-600'
    },
    { 
      id: 'skills', 
      label: 'Skills', 
      icon: '⚡',
      preview: 'Technical expertise',
      color: 'from-yellow-500 to-orange-600'
    },
    { 
      id: 'languages', 
      label: 'Languages', 
      icon: '🌐',
      preview: 'Communication abilities',
      color: 'from-pink-500 to-rose-600'
    },
    { 
      id: 'experience', 
      label: 'Experience', 
      icon: '💼',
      preview: 'Professional journey',
      color: 'from-indigo-500 to-blue-600'
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: '🚀',
      preview: 'Featured work',
      color: 'from-purple-500 to-pink-600'
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: '📧',
      preview: 'Get in touch',
      color: 'from-teal-500 to-cyan-600'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getCurrentIndex = () => {
    return sections.findIndex(section => section.id === currentSection)
  }

  const navigateToSection = (direction) => {
    const currentIndex = getCurrentIndex()
    let newIndex

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1
    } else {
      newIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0
    }

    scrollToSection(sections[newIndex].id)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
        >
          {/* Navigation Controls */}
          <div className="flex flex-col items-center space-y-4 mb-6">
            <motion.button
              onClick={() => navigateToSection('prev')}
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={() => navigateToSection('next')}
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex flex-col space-y-3">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className="relative"
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Thumbnail Button */}
                <motion.button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-12 h-12 rounded-lg border-2 transition-all duration-300 flex items-center justify-center text-lg relative overflow-hidden ${
                    currentSection === section.id
                      ? 'border-primary bg-primary text-primary-foreground shadow-lg'
                      : 'border-border bg-card hover:border-primary hover:bg-primary/10'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 transition-opacity duration-300 ${
                    currentSection === section.id ? 'opacity-100' : 'hover:opacity-20'
                  }`} />
                  
                  {/* Icon */}
                  <span className="relative z-10">{section.icon}</span>
                  
                  {/* Active Indicator */}
                  {currentSection === section.id && (
                    <motion.div
                      className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-primary rounded-full"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>

                {/* Tooltip Preview */}
                <AnimatePresence>
                  {hoveredSection === section.id && (
                    <motion.div
                      className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-card border border-border rounded-lg p-3 shadow-lg min-w-[200px]"
                      initial={{ opacity: 0, x: 10, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Arrow */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-card border-l border-b border-border rotate-45" />
                      
                      {/* Content */}
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center text-white text-sm`}>
                          {section.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{section.label}</h4>
                          <p className="text-xs text-muted-foreground">{section.preview}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 w-12 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((getCurrentIndex() + 1) / sections.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ThumbnailNavigation

