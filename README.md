# Youssef Hossam - Backend Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, React 18, TypeScript, and TailwindCSS. Features a creative API-inspired UI design with glass-morphism effects and smooth animations.

## ✨ Features

- **Modern Dark/Light Theme** - Toggle between themes with a beautiful floating button
- **API-Inspired UI** - GET/POST method badges and JSON-style responses
- **Responsive Design** - Perfect layout for all screen sizes
- **Glass-morphism Effects** - Beautiful frosted glass design elements
- **Smooth Animations** - Framer Motion powered interactions
- **Professional Layout** - Clean, recruiter-friendly design
- **Technology Logos** - Visual representation of skills and tools
- **Profile Photo Support** - Easy to add your personal photo

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: TailwindCSS with custom glass-morphism classes
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (configured)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with sidebar
│   ├── page.tsx            # Main portfolio page
│   └── providers.tsx       # Theme context provider
├── components/
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── ProjectCard.tsx     # Project display component
│   ├── ContactForm.tsx     # Contact form with API response
│   ├── EndpointCard.tsx    # API endpoint display
│   ├── JSONBlock.tsx       # JSON data display
│   └── Footer.tsx          # Footer with API collection
├── utils/
│   ├── data.ts             # Portfolio content data
│   └── i18n.ts             # Localization utilities
└── styles/
    └── globals.css         # Global styles and custom classes
```

## 🖼️ Adding Your Images

### 1. Profile Photo
Place your profile photo in the `public` folder:
- **File**: `public/profile-photo.jpg`
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 400x400px or larger
- **Fallback**: If image fails to load, initials "YH" will be displayed

### 2. Company & Education Logos
Add logos for your experience and education:
- **Company Logo**: `public/company-logo.png` (for experience section)
- **College Logo**: `public/college-logo.png` (for education section)
- **Fallback**: Emoji icons will be displayed if logos are missing

### 3. Technology Logos
The portfolio automatically displays technology logos in the skills section:
- **Location**: `public/logos/` folder
- **Format**: SVG files (recommended) or PNG
- **Naming**: Use descriptive names like `git.svg`, `docker.svg`, `javascript.svg`
- **Fallback**: Emoji icons will be displayed if logo files are missing

## 🎨 Customization

### Colors & Theme
- **Light Mode**: Clean white with blue accents
- **Dark Mode**: Deep slate with blue/purple gradients
- **Custom Classes**: Use `glass-card`, `glass-sidebar` for glass effects

### Content
- **Data**: Edit `src/utils/data.ts` to update your information
- **Skills**: Modify the skills array to match your expertise
- **Projects**: Add/remove projects in the projects array

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your images**
   - Place `profile-photo.jpg` in `public/`
   - Add company/college logos
   - Add technology logos to `public/logos/`

4. **Customize content**
   - Edit `src/utils/data.ts` with your information
   - Update skills, projects, and experience

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Use `npm run build` and deploy `out` folder
- **Docker**: Use provided Dockerfile
- **Manual**: Build and upload to any web server

## 📱 Responsive Design

The portfolio is fully responsive with:
- **Mobile**: Optimized mobile navigation and layout
- **Tablet**: Adaptive grid layouts for medium screens
- **Desktop**: Full sidebar navigation with floating theme toggle
- **Grid Systems**: Adaptive grids that handle 1, 2, or more items perfectly

## 🎯 Key Sections

1. **Home** - Hero section with introduction and CTA buttons
2. **About** - Personal information and background
3. **Skills** - Categorized technical skills with logos
4. **Projects** - Featured projects with tech stack
5. **Experience** - Work history with company logos
6. **Education** - Academic background with college logos
7. **Contact** - Contact form with API response simulation

## 🔧 Advanced Features

- **Theme Persistence** - Remembers user's theme preference
- **Smooth Scrolling** - Animated section transitions
- **API Simulation** - GET/POST endpoints for portfolio sections
- **Glass-morphism** - Modern frosted glass design effects
- **Hover Animations** - Interactive elements with smooth transitions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using Next.js, React, and TailwindCSS** 