# 🚀 Deployment Guide

This guide will help you deploy Youssef's portfolio to various platforms.

## 🌟 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications with zero configuration.

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

**That's it!** Your portfolio will be live in minutes.

## 🐳 Docker Deployment

### 1. Build Docker Image
```bash
docker build -t youssef-portfolio .
```

### 2. Run Container
```bash
docker run -p 3000:3000 youssef-portfolio
```

## 📦 Manual Deployment

### 1. Build the Project
```bash
npm run build
```

### 2. Start Production Server
```bash
npm start
```

### 3. Deploy to Your Server
- Upload the `.next` folder to your server
- Install dependencies: `npm install --production`
- Start the server: `npm start`

## 🔧 Environment Variables

Create a `.env.local` file for local development:
```env
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📱 Performance Optimization

### 1. Build Analysis
```bash
npm run build
npm run analyze
```

### 2. Lighthouse Score
- Run Lighthouse in Chrome DevTools
- Target: 90+ Performance Score
- Optimize images and bundle size

## 🚨 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript errors: `npm run type-check`
   - Verify dependencies: `npm install`

2. **Runtime Errors**
   - Check browser console
   - Verify environment variables

3. **Performance Issues**
   - Optimize images
   - Reduce bundle size
   - Enable compression

### Support
- Check [Next.js Documentation](https://nextjs.org/docs)
- Review [Vercel Documentation](https://vercel.com/docs)
- Open an issue on GitHub

## 🌐 Custom Domain

### 1. Vercel
- Go to Project Settings
- Add Custom Domain
- Update DNS records

### 2. Other Platforms
- Configure your domain provider
- Point to your deployment URL
- Update SSL certificates

## 📊 Monitoring

### 1. Analytics
- Google Analytics
- Vercel Analytics
- Custom tracking

### 2. Performance
- Core Web Vitals
- Page load times
- User experience metrics

---

**Happy Deploying! 🎉**

Your portfolio will showcase Youssef's backend expertise with a modern, professional design. 