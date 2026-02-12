import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { ANIMATION_VARIANTS, APP_CONFIG } from '../utils/constants'
import Container from '../components/layout/Container'
import Button from '../components/ui/Button'

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={ANIMATION_VARIANTS.slideInLeft}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                Hi, I'm{' '}
                <span className="text-gradient">
                  Shruti
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                Full Stack Developer & UI/UX Enthusiast
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl"
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                I create exceptional digital experiences through clean code, thoughtful design, 
                and modern web technologies. Let's build something amazing together.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                <Button 
                  as={Link} 
                  to="/projects" 
                  size="lg"
                  className="group"
                >
                  View My Work
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="secondary" 
                  size="lg"
                >
                  Get In Touch
                </Button>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="flex justify-center lg:justify-start space-x-6 mt-12"
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                <a
                  href={APP_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-sm transition-all"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href={APP_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-sm transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={`mailto:${APP_CONFIG.email}`}
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-sm transition-all"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Hero Image/Animation */}
            <motion.div
              variants={ANIMATION_VARIANTS.slideInRight}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Animated background shapes */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full opacity-20 blur-3xl"
                />
                
                {/* Profile placeholder or actual image */}
                <div className="relative z-10 w-80 h-80 mx-auto bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-white text-6xl font-bold">S</div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 -left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-lg opacity-80"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 -right-10 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Quick Intro Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            variants={ANIMATION_VARIANTS.fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Crafting Digital Experiences
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              With over 5 years of experience in web development, I specialize in creating 
              scalable applications using modern technologies like React, Node.js, and TypeScript. 
              I'm passionate about writing clean, maintainable code and delivering exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={ANIMATION_VARIANTS.slideUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Frontend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating responsive and interactive user interfaces with modern frameworks
                </p>
              </motion.div>
              
              <motion.div
                variants={ANIMATION_VARIANTS.slideUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Backend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building robust APIs and server-side applications with scalable architecture
                </p>
              </motion.div>
              
              <motion.div
                variants={ANIMATION_VARIANTS.slideUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Designing intuitive interfaces that provide excellent user experiences
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}

export default Home