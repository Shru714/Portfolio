import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Filter } from 'lucide-react'
import { ANIMATION_VARIANTS } from '../utils/constants'
import { projectsData, projectCategories } from '../data/projects'
import Container from '../components/layout/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory)

  const featuredProjects = projectsData.filter(project => project.featured)

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
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          <SectionTitle
            title="Featured Projects"
            subtitle="Some of my best work that I'm most proud of"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={ANIMATION_VARIANTS.slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button
                          as="a"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="secondary"
                          size="sm"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                        <Button
                          as="a"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="sm"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <Badge variant="primary" size="sm">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="default" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button
                        as="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                        size="sm"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button
                        as="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                        size="sm"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* All Projects */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
            <SectionTitle
              title="All Projects"
              centered={false}
              className="mb-6 sm:mb-0"
            />
            
            {/* Filter Toggle for Mobile */}
            <Button
              variant="ghost"
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden mb-4"
            >
              <Filter size={16} className="mr-2" />
              Filter Projects
            </Button>
            
            {/* Desktop Filters */}
            <div className="hidden sm:flex space-x-2">
              {projectCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Mobile Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="sm:hidden mb-8"
              >
                <div className="flex flex-wrap gap-2">
                  {projectCategories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => {
                        setSelectedCategory(category)
                        setShowFilters(false)
                      }}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden group h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-4">
                          <Button
                            as="a"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="secondary"
                            size="sm"
                          >
                            <Github size={16} />
                          </Button>
                          <Button
                            as="a"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                          >
                            <ExternalLink size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <Badge variant="primary" size="sm">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="default" size="sm">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="default" size="sm">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex space-x-4">
                        <Button
                          as="a"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="ghost"
                          size="sm"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                        <Button
                          as="a"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="ghost"
                          size="sm"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </Container>
      </section>
    </div>
  )
}

export default Projects