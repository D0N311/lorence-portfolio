# Lorence Palisan - Portfolio Website

Professional web developer and software engineer portfolio built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: React 19, Vite, Tailwind CSS v4
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, Structured Data
- **Multi-page Routing**: React Router with dedicated Laravel experience page
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Performance**: Fast loading with optimized assets and caching
- **Netlify Ready**: Pre-configured for instant deployment

## 🛠️ Tech Stack

- React 19
- Vite 7
- Tailwind CSS v4
- React Router v7
- React Helmet Async (SEO)
- Lucide React (Icons)

## 📦 Installation

\`\`\`bash

# Clone the repository

git clone <your-repo-url>

# Navigate to project directory

cd portfolioV2

# Install dependencies

npm install

# Start development server

npm run dev
\`\`\`

## 🔨 Available Scripts

\`\`\`bash
npm run dev # Start development server
npm run build # Build for production
npm run preview # Preview production build locally
npm run lint # Run ESLint
npm run netlify # Start Netlify dev server (requires Netlify CLI)
npm run deploy # Deploy to Netlify production
\`\`\`

## 🌐 Deployment to Netlify

### Quick Deploy (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Click "Deploy site" (settings auto-detected from \`netlify.toml\`)

### CLI Deploy

\`\`\`bash

# Install Netlify CLI

npm install -g netlify-cli

# Login

netlify login

# Deploy

npm run deploy
\`\`\`

See [NETLIFY_DEPLOY.md](NETLIFY_DEPLOY.md) for detailed deployment instructions.

## 📁 Project Structure

\`\`\`
portfolioV2/
├── public/
│ ├── \_redirects # Netlify SPA redirects
│ ├── robots.txt # SEO crawler instructions
│ └── sitemap.xml # SEO sitemap
├── src/
│ ├── assets/ # Images and static files
│ ├── pages/
│ │ ├── LandingPage.jsx # Main portfolio page
│ │ └── LaravelExperience.jsx # Laravel experience page
│ ├── App.jsx # Root component with routing
│ ├── main.jsx # Entry point
│ └── index.css # Global styles
├── netlify.toml # Netlify configuration
└── package.json
\`\`\`

## 🎨 Sections

- **Hero**: Introduction with animated code snippet
- **Services**: 7 professional services offered
- **Projects**: Portfolio showcases with modals and external links
- **About**: Professional background and technical skills
- **Contact**: Contact form and information
- **Laravel Experience**: Dedicated page for Laravel expertise

## 🔍 SEO Features

- Dynamic meta tags with React Helmet
- Open Graph tags for social media
- Twitter Card integration
- Structured data (JSON-LD) for rich snippets
- Sitemap and robots.txt
- Canonical URLs
- Security headers

## 📝 Customization

1. Update personal information in \`LandingPage.jsx\`
2. Replace profile image in \`src/assets/profile-picture.jpg\`
3. Update social media links
4. Modify contact email and phone
5. Update sitemap.xml with your domain
6. Replace placeholder URLs in SEO meta tags

## 📄 License

© 2026 Lorence Palisan. All rights reserved.

---

Built with ❤️ using React and Vite
