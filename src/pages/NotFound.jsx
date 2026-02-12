import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { ANIMATION_VARIANTS } from '../utils/constants'
import Container from '../components/layout/Container'
import Button from '../components/ui/Button'

const NotFound = () => {
  return (
    <div className="pt-16 min-h-screen flex items-center">
      <Container>
        <motion.div
          variants={ANIMATION_VARIANTS.fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-8xl sm:text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              404
            </div>
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl mb-4"
              >
                🤔
              </motion.div>
            </div>
          </motion.div>
          
          {/* Error Message */}
          <motion.div
            variants={ANIMATION_VARIANTS.slideUp}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div
            variants={ANIMATION_VARIANTS.slideUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              as={Link} 
              to="/" 
              size="lg"
              className="group"
            >
              <Home size={20} className="mr-2" />
              Go Home
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.history.back()}
              className="group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </motion.div>
          
          {/* Helpful Links */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeIn}
            className="mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Or try one of these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/about" 
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                About Me
              </Link>
              <Link 
                to="/projects" 
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                My Projects
              </Link>
              <Link 
                to="/contact" 
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Contact
              </Link>
            </div>
          </motion.div>
          
          {/* Fun Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default NotFound