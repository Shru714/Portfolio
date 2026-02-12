import React from 'react'
import { motion } from 'framer-motion'
import { Download, Calendar, MapPin } from 'lucide-react'
import { ANIMATION_VARIANTS } from '../utils/constants'
import { skillsData, experienceData } from '../data/skills'
import Container from '../components/layout/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <Container>
          <motion.div
            variants={ANIMATION_VARIANTS.fadeIn}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate developer with a love for creating exceptional digital experiences
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={ANIMATION_VARIANTS.slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Hello! I'm Shruti, a passionate full-stack developer based in San Francisco. 
                  My journey into web development started 5 years ago when I built my first 
                  website and fell in love with the process of bringing ideas to life through code.
                </p>
                <p>
                  I specialize in JavaScript technologies, particularly React and Node.js, 
                  but I'm always eager to learn new technologies and tackle challenging problems. 
                  I believe in writing clean, maintainable code and creating user experiences 
                  that are both beautiful and functional.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new coffee shops, hiking in 
                  the Bay Area, or contributing to open-source projects. I'm always excited 
                  to collaborate on interesting projects and meet fellow developers.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin size={20} className="mr-2" />
                  San Francisco, CA
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar size={20} className="mr-2" />
                  5+ Years Experience
                </div>
              </div>
              
              <Button 
                className="mt-8"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>
            </motion.div>
            
            <motion.div
              variants={ANIMATION_VARIANTS.slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <Container>
          <SectionTitle
            title="Skills & Technologies"
            subtitle="Technologies I work with to bring ideas to life"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <motion.div
                key={category}
                variants={ANIMATION_VARIANTS.slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 capitalize">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{skill.icon}</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-3">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-primary-600 rounded-full"
                            />
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 w-8">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          <SectionTitle
            title="Work Experience"
            subtitle="My professional journey and key achievements"
            className="mb-16"
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />
            
            <div className="space-y-12">
              {experienceData.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={ANIMATION_VARIANTS.slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900" />
                  
                  <div className="ml-20 flex-1">
                    <Card>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {experience.title}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {experience.company}
                          </p>
                        </div>
                        <Badge variant="primary" className="mt-2 sm:mt-0">
                          {experience.period}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {experience.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="default" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default About