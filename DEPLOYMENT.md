# 🚀 Netlify Deployment Guide

This guide will help you deploy your Next.js portfolio to Netlify.

## 📋 Prerequisites

- [Netlify Account](https://netlify.com) (free)
- Git repository with your portfolio code
- Node.js 18+ installed locally

## 🔧 Local Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Test Build Locally
```bash
npm run build
```

### 3. Test Static Export
```bash
npm run export
```

## 🌐 Netlify Deployment

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push to Git**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your Git provider (GitHub, GitLab, etc.)
   - Select your portfolio repository

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18`

4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete
   - Your site will be live!

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Build and Deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=out
   ```

## ⚙️ Configuration Files

### `netlify.toml`
- Build settings and environment variables
- Redirects for SPA routing
- Security headers and caching rules
- Custom domain configuration

### `next.config.js`
- Static export configuration
- Image optimization settings
- Build optimizations

## 🔗 Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to Site settings > Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `portfolio.yourname.com`)

2. **Configure DNS**
   - Add CNAME record pointing to your Netlify site
   - Wait for DNS propagation (up to 24 hours)

## 📱 Environment Variables

If you need environment variables:

1. **Go to Site settings > Environment variables**
2. **Add variables**:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://yoursite.netlify.app
   ```

## 🚀 Continuous Deployment

- **Automatic**: Every push to main branch triggers deployment
- **Preview**: Pull requests get preview deployments
- **Rollback**: Easy rollback to previous versions

## 🔍 Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check for TypeScript/ESLint errors

### Routing Issues
- Ensure `netlify.toml` redirects are correct
- Check that `next.config.js` has `output: 'export'`

### Assets Not Loading
- Verify `publish` directory is set to `out`
- Check file paths in your code
- Ensure images are in `public/` folder

## 📊 Performance

- **Lighthouse Score**: Should be 90+ on all metrics
- **Core Web Vitals**: Optimized for mobile and desktop
- **SEO**: Proper meta tags and structured data

## 🔒 Security

- **HTTPS**: Automatically enabled
- **Security Headers**: Configured in `netlify.toml`
- **Content Security Policy**: Ready to configure

## 📈 Analytics (Optional)

1. **Google Analytics**
   - Add GA4 tracking code to your layout
   - Configure goals and events

2. **Netlify Analytics**
   - Enable in Site settings
   - View visitor statistics

## 🎯 Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All images and assets display correctly
- [ ] Navigation works properly
- [ ] Contact form functions (if applicable)
- [ ] CV download works
- [ ] Mobile responsiveness tested
- [ ] Performance optimized
- [ ] SEO meta tags verified

## 🆘 Support

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Community**: [community.netlify.com](https://community.netlify.com)

---

**Happy Deploying! 🎉**

Your portfolio will be live at: `https://your-site-name.netlify.app` 