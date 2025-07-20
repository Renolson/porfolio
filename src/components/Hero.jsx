import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypewriterEffect, RevealAnimation, MagneticButton, AnimatedCounter } from './InteractiveElements';

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
]

// Import your profile picture
import profilePic from '/mypic.jpg'; // Ensure this path is correct

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'IoT Developer',
    'Automation Specialist', 
    'Robotics Enthusiast',
    'AI Integration Expert',
    'Electrical Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Define scrollToSection function here within Hero
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/renolson-s-100031119', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Renolson', label: 'GitHub' },
    { icon: Facebook, href: 'https://www.facebook.com/reno.son.77/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/renolson_03/', label: 'Instagram' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <RevealAnimation direction="up" delay={0.1}>
              <span className="px-4 py-2 bg-primary/15 text-primary rounded-full text-sm font-medium">
                Hello, I'm
              </span>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.3}>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block">Sahayanathan</span>
                <span className="block text-primary">Renolson</span>
              </h1>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.5}>
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <TypewriterEffect 
                  key={currentRole}
                  text={roles[currentRole]}
                  speed={50}
                  delay={1000}
                  className="text-xl lg:text-2xl text-muted-foreground font-semibold"
                />
              </div>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.7}>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Electronics engineer building smart automation - fusing embedded systems with AI 
                for predictive tech and computer vision. Turning hardware into intelligent solutions.
              </p>
            </RevealAnimation>

            {/* Stats */}
            <RevealAnimation direction="up" delay={0.9}>
              <div className="flex flex-wrap gap-8 py-6 justify-center lg:justify-start">
                <div className="text-center">
                  <AnimatedCounter end={1} suffix="+" className="text-primary" />
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={2} suffix="+" className="text-primary" />
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={6} suffix="+" className="text-primary" />
                  <p className="text-sm text-muted-foreground">Technologies</p>
                </div>
              </div>
            </RevealAnimation>
            {/* Action Buttons */}
            <RevealAnimation direction="up" delay={1.1}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {/* "Get In Touch" Button with mailto link */}
                <MagneticButton
                  as="a" // Render as an anchor tag
                  href="mailto:renolson0302@gmail.com" // Replace with your email address
                    onClick={(e) => { // Add onClick handler
                        e.preventDefault(); // Prevent default link behavior
                        window.location.href = "mailto:renolson0302@gmail.com"; // Manually trigger mailto
                    }}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </MagneticButton>
                {/* "View My Work" Button with internal section link */}
                <MagneticButton
                  as="a" // Render as an anchor tag
                  href="#projects" // Link to your projects section (assuming its id is 'projects')
                  onClick={(e) => { // Add the event object 'e'
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection('projects');
                    }}
                  className="border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View My Work
                </MagneticButton>
              </div>
            </RevealAnimation>

            {/* Social Links */}
            <RevealAnimation direction="up" delay={1.3}>
              <div className="flex gap-4 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </RevealAnimation>
          </div>

          {/* Profile Image Section */}
          <RevealAnimation direction="scale" delay={0.8} className="flex justify-center">
            <div className="relative w-[450px] h-[450px] flex items-center justify-center">
              {/* Profile Picture with its own motion */}
              <motion.div
                className="w-[420px] h-[420px] rounded-full overflow-hidden absolute z-10"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={profilePic}
                  alt="Sahayanathan Renolson"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              {/* Main Glow/Animation Circle - now BEHIND the image */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    "0 0 0 2px rgba(59, 130, 246, 0.7)",  
                    "0 0 0 2px rgba(92, 100, 1, 0.5)",   
                    "0 0 0 2px rgba(0, 255, 170, 0.3)", 
                    "0 0 0 2px rgba(255, 100, 0, 0.6)", 
                    "0 0 0 2px rgba(59, 130, 246, 0.7)"  
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating Icons - these are now siblings to the image and glow div */}
              {[
                { icon: '⚡', position: { top: '5%', right: '05%' }, color: 'text-yellow-400' },
                { icon: '🔧', position: { top: '10%', left: '05%' }, color: 'text-gray-400' },
                { icon: '🤖', position: { bottom: '-5%', right: '10%' }, color: 'text-blue-400' },
                { icon: '💡', position: { bottom: '15%', left: '15%' }, color: 'text-orange-400' },
                { icon: '🔬', position: { top: '70%', right: '-9%' }, color: 'text-green-400' },
                { icon: '⚙️', position: { top: '40%', left: '-10%' }, color: 'text-red-400' },
                { icon: '📡', position: { top: '35%', right: '-10%' }, color: 'text-purple-400' },
                { icon: '💻', position: { bottom: '15%', left: '0%' }, color: 'text-cyan-400' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute text-2xl ${item.color || ''}`}
                  style={item.position}
                  animate={{
                    y: [0, -20, 0], 
                    rotate: [0, 15, -15, 0], 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3.5 + index * 0.4, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}

              {/* Orbiting Elements - now also siblings */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-6 h-6 bg-blue-00 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-6 h-6 bg-red-00 rounded-full" />
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-3 h-2 bg-blue-400 rounded-full" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-3 h-2 bg-purple-600 rounded-full" />
                </div>
              </motion.div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;