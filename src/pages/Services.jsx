import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { ANIMATION_VARIANTS } from '../utils/constants'
import { servicesData } from '../data/services'
import Container from '../components/layout/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const Services = () => {
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
              Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional development services to bring your ideas to life
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          <SectionTitle
            title="What I Offer"
            subtitle="Comprehensive development services tailored to your needs"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                variants={ANIMATION_VARIANTS.slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                          <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="default" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    as="a" 
                    href="/contact" 
                    className="w-full group"
                  >
                    Get Started
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <Container>
          <SectionTitle
            title="My Process"
            subtitle="How I work with clients to deliver exceptional results"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your goals, requirements, and target audience to create the perfect solution.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating detailed project plans, wireframes, and technical specifications.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building your project with clean, scalable code and regular progress updates.'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Testing, deployment, and ongoing support to ensure your project succeeds.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                variants={ANIMATION_VARIANTS.slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <Container>
          <motion.div
            variants={ANIMATION_VARIANTS.fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. 
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                as="a" 
                href="/contact" 
                variant="secondary" 
                size="lg"
              >
                Get In Touch
              </Button>
              <Button 
                as="a" 
                href="/projects" 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white hover:text-primary-600"
              >
                View My Work
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}

export default Services