// Application constants
export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_TITLE || 'Developer Portfolio',
  description: import.meta.env.VITE_APP_DESCRIPTION || 'Professional portfolio showcasing my development skills and projects',
  author: 'Your Name',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'your.email@example.com',
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/yourusername',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/yourusername',
  twitter: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/yourusername',
}

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

// Animation variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  },
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
}

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}