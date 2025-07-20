import { motion } from 'framer-motion'

const Languages = () => {
  const languages = [
    { name: 'Tamil', level: 99, description: 'My native language, spoken with fluency and cultural depth.' },
    { name: 'English', level: 86, description: 'Proficient in English for professional and academic communication.' },
    { name: 'Sinhala', level: 46, description: 'Actively learning and able to manage basic conversations.' }
  ]

  return (
    <section id="languages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-primary">Languages</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">{language.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{language.description}</p>
              
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${language.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                />
              </div>
              <div className="text-right text-sm text-muted-foreground mt-1">
                {language.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages

