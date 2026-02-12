# Developer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode support, and a clean, professional design.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Smooth Animations**: Framer Motion powered animations and transitions
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features
- **Performance**: Lazy loading, code splitting, and optimized builds
- **Clean Architecture**: Well-organized components and reusable UI elements

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── favicon.svg
│   └── preview.png
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── resume.pdf
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Container.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   └── Badge.jsx
│   │   └── common/
│   │       ├── ThemeToggle.jsx
│   │       └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Services.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── services.js
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useScrollAnimation.js
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── utils/
│   │   └── constants.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Copy the `.env` file and update with your information:
   ```bash
   cp .env .env.local
   ```
   
   Update the following variables in `.env.local`:
   ```env
   VITE_APP_TITLE=Your Portfolio Title
   VITE_APP_DESCRIPTION=Your portfolio description
   VITE_CONTACT_EMAIL=your.email@example.com
   VITE_GITHUB_URL=https://github.com/yourusername
   VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
   VITE_TWITTER_URL=https://twitter.com/yourusername
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000` to see your portfolio.

## 🎨 Customization

### Personal Information

1. **Update personal details** in `src/utils/constants.js`:
   ```javascript
   export const APP_CONFIG = {
     name: 'Your Name',
     author: 'Your Name',
     // ... other config
   }
   ```

2. **Add your projects** in `src/data/projects.js`:
   ```javascript
   export const projectsData = [
     {
       id: 1,
       title: 'Your Project',
       description: 'Project description',
       // ... project details
     }
   ]
   ```

3. **Update skills** in `src/data/skills.js`:
   ```javascript
   export const skillsData = {
     frontend: [
       { name: 'React', level: 95, icon: '⚛️' },
       // ... your skills
     ]
   }
   ```

4. **Customize services** in `src/data/services.js`:
   ```javascript
   export const servicesData = [
     {
       id: 1,
       title: 'Your Service',
       description: 'Service description',
       // ... service details
     }
   ]
   ```

### Styling & Theme

1. **Colors**: Update the color palette in `tailwind.config.js`
2. **Fonts**: Change fonts in `index.html` and `tailwind.config.js`
3. **Animations**: Modify animation variants in `src/utils/constants.js`

### Images & Assets

1. **Profile Image**: Replace the placeholder in `src/pages/About.jsx`
2. **Project Images**: Update image URLs in `src/data/projects.js`
3. **Resume**: Add your resume PDF to `public/resume.pdf`
4. **Favicon**: Replace `public/favicon.svg` with your own

## 📱 Pages Overview

- **Home**: Hero section with introduction and call-to-action
- **About**: Personal bio, skills, and experience timeline
- **Projects**: Portfolio showcase with filtering capabilities
- **Services**: Professional services offered
- **Contact**: Contact form and information
- **404**: Custom not found page

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Run: `npm run deploy`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Optimized images with proper sizing
- **Bundle Analysis**: Optimized chunk splitting
- **Caching**: Proper caching headers for static assets

## ♿ Accessibility Features

- **Semantic HTML**: Proper HTML structure and landmarks
- **ARIA Labels**: Screen reader friendly labels
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG compliant color ratios

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

---

**Happy coding!** 🚀