import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Facebook, Heart } from 'lucide-react'

// Import your profile picture here.
// Assuming 'headshot.png' is in your 'public' folder.
import profilePic from '/ricon.png'; // Make sure this path is correct

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/renolson-s-100031119', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Renolson', label: 'GitHub' },
    { icon: Facebook, href: 'https://www.facebook.com/reno.son.77/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/renolson_03/', label: 'Instagram' }
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center overflow-hidden"> {/* Added overflow-hidden */}
                {/* Replaced <span>SR</span> with <img> */}
                <img
                  src={profilePic}
                  alt="Sahayanathan Renolson"
                  className="w-full h-full object-cover rounded-full" // Object-cover and rounded-full for circular fit
                />
              </div>
              <h3 className="text-xl font-bold">Sahayanathan Renolson</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Electrical & Electronic Engineer specializing in automation, robotics, and IoT solutions.
            </p>
            <div className="flex space-x-4">
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
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      // Using document.querySelector as scrollToSection is not available here
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📍 Mannar, Sri Lanka</p>
              <p>📞 +94 71-2487550</p>
              <p>✉️ renolson0302@gmail.com</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-border mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-muted-foreground flex items-center justify-center">
            © 2025 Sahayanathan Renolson. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer