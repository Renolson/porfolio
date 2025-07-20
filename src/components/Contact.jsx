import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, User } from 'lucide-react' // Import User icon
import { Button } from '@/components/ui/button'

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, label: 'Address', value: 'Mannar, Sri Lanka', link: null },
    { icon: Phone, label: 'Phone', value: '+94 712487550', link: 'tel:+94712487550' }, // Clickable phone
    { icon: Mail, label: 'Email', value: 'renolson0302@gmail.com', link: 'mailto:renolson0302@gmail.com' } // Clickable email
  ]

  const references = [
    {
      name: 'Dr W.G.C.W Kumara',
      title: 'Head of The Department Electrical & Telecommunication Engineering',
      organization: 'South Eastern University of Sri Lanka ',
      email: 'chinthakawk@seu.ac.lk ',
      phone: '+94716425358'
    },
    {
      name: 'Prof. M.A.L. Abdul Haleem',
      title: 'Dean of Faculty of Engineering',
      organization: 'South Eastern University of Sri Lanka',
      email: 'mala_haleem@seu.ac.lk',
      phone: '+94672052806'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information & References */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.label}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* References Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">References</h3>
              <div className="space-y-4">
                {references.map((ref, index) => (
                  <motion.div
                    key={index}
                    className="bg-card p-4 rounded-lg border flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{ref.name}</h4>
                      <p className="text-sm text-muted-foreground">{ref.title}</p>
                      <p className="text-sm text-muted-foreground">{ref.organization}</p>
                      <div className="text-sm text-muted-foreground mt-2 space-y-1">
                        {ref.email && (
                          <p>
                            Email:{" "}
                            <a href={`mailto:${ref.email}`} className="text-primary hover:underline">
                              {ref.email}
                            </a>
                          </p>
                        )}
                        {ref.phone && (
                          <p>
                            Phone:{" "}
                            <a href={`tel:${ref.phone}`} className="text-primary hover:underline">
                              {ref.phone}
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form
              action="https://formspree.io/f/xdkzznkg" // <--- Add your Formspree endpoint here
              method="POST" // <--- Set the form method to POST
              className="bg-card p-8 rounded-lg shadow-sm border"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name" // <--- IMPORTANT: Add name attribute for form submission
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email" // <--- IMPORTANT: Add name attribute
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject" // <--- IMPORTANT: Add name attribute
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Enter subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message" // <--- IMPORTANT: Add name attribute
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                    placeholder="Enter your message"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact