# Netlify Deployment Guide

## Prerequisites

1. Sign up for a free account at [Netlify](https://www.netlify.com/)
2. Install Netlify CLI (optional): `npm install -g netlify-cli`

## Deployment Methods

### Method 1: Deploy via Netlify Dashboard (Easiest)

1. Push your code to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider
5. Select your repository
6. Netlify will auto-detect build settings from `netlify.toml`
7. Click "Deploy site"

### Method 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site (first time only)
netlify init

# Deploy to production
npm run deploy
```

### Method 3: Drag and Drop Deploy

1. Build your project locally: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

## Configuration Files

### `netlify.toml`

- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`
- ✅ SPA redirects configured
- ✅ Security headers added
- ✅ Asset caching optimized

### `public/_redirects`

- ✅ Handles React Router client-side routing
- ✅ All routes redirect to index.html

## Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 20

## Features Enabled

- ✅ Single Page Application (SPA) routing
- ✅ Security headers (XSS, Content-Type, Frame protection)
- ✅ Asset caching (1 year for static assets)
- ✅ HTML caching (no cache for index.html)
- ✅ Image compression
- ✅ CSS/JS minification

## Environment Variables (if needed)

Add in Netlify Dashboard: Site settings → Environment variables

```
VITE_API_URL=your_api_url
```

## Custom Domain Setup

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Netlify)

## Post-Deployment

- Update canonical URLs in SEO meta tags with your actual Netlify domain
- Update sitemap.xml with your Netlify URL
- Test all routes work correctly
- Verify Open Graph images load

## Troubleshooting

- **Build fails**: Check build logs in Netlify dashboard
- **Routes not working**: Verify `_redirects` file is in `public` folder
- **Assets not loading**: Check publish directory is set to `dist`
