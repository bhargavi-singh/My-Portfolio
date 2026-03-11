# Bhargavi Singh - Portfolio Website

A modern, interactive 3D portfolio website showcasing my work, skills, and experience as a Frontend Engineer. Built with React.js, TypeScript, and Three.js.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.161.0-green)

## 🌐 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) *(Update with your deployment URL)*

## 📝 About

This is my personal portfolio website featuring:
- **Interactive 3D Elements**: Powered by Three.js for engaging visual experiences
- **Smooth Animations**: Framer Motion for fluid page transitions
- **Responsive Design**: Works seamlessly on all devices
- **Modern Tech Stack**: Built with the latest frontend technologies
- **Performance Optimized**: Fast loading and smooth interactions

## ✨ Features

- 🎨 **Modern UI/UX**: Clean, professional design with dark theme
- 🎭 **3D Visualizations**: Interactive 3D models and animations
- 📱 **Fully Responsive**: Mobile-first design approach
- ⚡ **Fast Performance**: Optimized with Vite build tool
- 🎯 **Smooth Animations**: Framer Motion for engaging transitions
- 🔍 **SEO Friendly**: Proper meta tags and structure

## 🛠️ Technologies Used

### Core Technologies
- **[React.js](https://reactjs.org/)** - UI library for building components
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript for better code quality
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library

### Additional Libraries
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **react-parallax-tilt** - Parallax tilt effects
- **react-vertical-timeline-component** - Timeline component

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bhargavi-singh/your-repo-name.git
   cd bhargaviPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
bhargaviPortfolio/
├── src/
│   ├── components/
│   │   ├── atoms/          # Reusable atomic components
│   │   ├── canvas/         # 3D canvas components (Three.js)
│   │   ├── layout/         # Layout components (Navbar, Loader)
│   │   └── sections/      # Page sections (Hero, About, Contact, etc.)
│   ├── constants/         # Configuration and data
│   ├── hoc/               # Higher-order components
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   └── assets/            # Images, icons, and other assets
├── public/                # Static assets and 3D models
├── dist/                  # Production build output
└── package.json
```

## ⚙️ Configuration

### Personalizing Your Portfolio

Update your information in `src/constants/config.ts`:

```typescript
export const config = {
  html: {
    title: "Your Name",
    fullName: "Your Full Name",
    email: "your.email@example.com",
    phone: "+91-XXXXXXXXXX",
    socials: {
      github: "https://github.com/yourusername",
      linkedin: "https://www.linkedin.com/in/yourprofile/",
    },
  },
  // ... other configurations
};
```

### Sections to Customize

1. **Hero Section** - Update name and tagline
2. **About Section** - Add your introduction
3. **Experience** - Add your work experience in `src/constants/index.ts`
4. **Projects** - Update projects in `src/constants/index.ts`
5. **Tech Stack** - Modify technologies in `src/constants/index.ts`
6. **Contact** - Update contact information

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run ts:check` | Type-check TypeScript |

## 🎨 Customization

### Colors

Edit `tailwind.config.cjs` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      tertiary: '#your-color',
    },
  },
}
```

### 3D Models

Replace 3D models in the `public/` directory:
- `desktop_pc/` - Computer model
- `planet/` - Earth/Planet model

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://www.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Deploy to GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📱 Sections

- **Hero** - Introduction with animated text
- **About** - Personal introduction and overview
- **Experience** - Work experience timeline
- **Tech Stack** - Interactive 3D technology icons
- **Projects** - Showcase of your work
- **Contact** - Contact information with 3D Earth visualization

## 🔧 Troubleshooting

### Common Issues

**Issue**: 3D models not loading
- **Solution**: Ensure models are in the `public/` directory and paths are correct

**Issue**: Build errors
- **Solution**: Run `npm run ts:check` to identify TypeScript errors

**Issue**: Styles not applying
- **Solution**: Ensure Tailwind CSS is properly configured in `tailwind.config.cjs`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Bhargavi Singh**

- GitHub: [@bhargavi-singh](https://github.com/bhargavi-singh)
- LinkedIn: [Bhargavi Singh](https://www.linkedin.com/in/bhargavii-singh/)
- Email: bhargavisingh700@gmail.com

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - For amazing 3D graphics capabilities
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first styling
- Original template inspiration from the React.js community

---

⭐ If you find this portfolio helpful, please consider giving it a star!
