import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Palette, Sun, Moon, Zap, Eye, Home, User, Code, Globe, Briefcase, Rocket, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider'; // Make sure this path is correct

// Import your brush stroke profile picture.
// Ensure 'icon.png' is in your 'public' folder and is a PNG with a transparent brush stroke shape.
import brushStrokeProfilePic from '/icon.png';

const Header = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { currentTheme, themes, switchTheme } = useTheme();

  const navItems = [
    { id: 'home', name: 'Home', href: '#home', icon: Home, label: 'Home' },
    { id: 'about', name: 'About', href: '#about', icon: User, label: 'About' },
    { id: 'skills', name: 'Skills', href: '#skills', icon: Code, label: 'Skills' },
    { id: 'languages', name: 'Languages', href: '#languages', icon: Globe, label: 'Languages' },
    { id: 'experience', name: '#experience', icon: Briefcase, label: 'Journey' }, // Corrected ID in navItems
    { id: 'projects', name: 'Projects', href: '#projects', icon: Rocket, label: 'Projects' },
    { id: 'contact', name: 'Contact', href: '#contact', icon: Mail, label: 'Contact' }
  ];

  const themeIcons = {
    light: Sun,
    dark: Moon,
    // Add other theme icons if you have more themes defined in ThemeProvider.jsx
    // For example:
    // cyberpunk: Zap,
    // highContrast: Eye
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Name Section */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Unique Brush Stroke Picture */}
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
              <img
                src={brushStrokeProfilePic} // Use the brush stroke image
                alt="Sahayanathan Renolson"
                className="w-full h-full object-contain" // object-contain for brush stroke shape
                style={{ filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4))' }} // Optional subtle shadow
              />
            </div>
            {/* Full Name with "Dancing Script" font applied to 'Renolson' */}
            {/* Removed 'hidden sm:block' to make it visible on all screen sizes */}
            <div> 
              <h1 className="text-2xl font-bold text-foreground whitespace-nowrap">
                Sahayanathan <span className="font-dancing-script text-primary text-2xl">Renolson</span>
              </h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    currentSection === item.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-1">
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </span>
                  {currentSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeSection"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Theme Switcher & Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Switcher Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-2"
                aria-label="Toggle theme menu"
              >
                <Palette className="w-4 h-4" />
              </Button>
              
              <AnimatePresence>
                {showThemeMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg p-2 min-w-[150px] origin-top-right"
                  >
                    {Object.entries(themes).map(([key, theme]) => {
                      // Dynamically pick icon based on theme key, with a fallback
                      const IconComponent = themeIcons[key] || Palette; // Fallback to Palette if no specific icon
                      return (
                        <button
                          key={key}
                          onClick={() => {
                            switchTheme(key);
                            setShowThemeMenu(false); // Close menu after selection
                          }}
                          className={`w-full flex items-center space-x-2 px-3 py-2 text-sm rounded-md transition-colors ${
                            currentTheme === key
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-accent hover:text-accent-foreground'
                          }`}
                          aria-label={`Switch to ${theme.name} theme`}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{theme.name}</span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Download CV Button */}
            <Button
              variant="default"
              size="sm"
              className="hidden sm:flex items-center space-x-2"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/My Cv 2025.pdf'; // Ensure this path is correct
                link.download = 'Sahayanathan-Renolson-CV.pdf'; // Desired downloaded filename
                link.click();
              }}
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-border"
            >
              <div className="flex flex-col space-y-2 pt-4">
                {navItems.map((item) => { // Removed index from here, it's not needed for key now
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.id} // Use item.id as key for stable identity
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      // Delay calculation is simple for mobile nav, no need for complex transition delay logic here
                      transition={{ delay: 0.05 }} // Small uniform delay for items
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                        currentSection === item.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  );
                })}
                
                {/* Mobile Download CV Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }} // Delay after nav items animate in
                  className="pt-2"
                >
                  <Button
                    variant="default"
                    className="w-full flex items-center justify-center space-x-2"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/My Cv 2025.pdf'; // Ensure this path is correct
                      link.download = 'Sahayanathan-Renolson-CV.pdf';
                      link.click();
                      setIsMenuOpen(false); // Close menu after download
                    }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

