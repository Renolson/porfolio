import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>
        
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-muted-foreground mb-8">
            I am an enthusiastic, self-motivated, reliable, responsible and hard-working person. 
            I am a mature team worker, a good leader, and adaptable to all challenging situations. 
            I am able to work well both in a team environment as well as using my own initiative. 
            I am able to work well under pressure and adhere to strict deadlines.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: '🎓', title: 'Education', desc: 'Reading B.Sc. Eng.(Hons) at SEUSL ' },
              { icon: '💼', title: 'Passion', desc: 'Electronic, automation and robotics' },
              { icon: '📍', title: 'Location', desc: 'Mannar, Sri Lanka' },
              { icon: '📧', title: 'Email', desc: 'renolson0302@gmail.com' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

