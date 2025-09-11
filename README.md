# nar-website
NAR Company website

## Development

```bash
npm install
npm run dev
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment
- Push to the `main` branch triggers automatic deployment
- The site will be available at: `https://yourusername.github.io/nar-website/`

### Manual Deployment
```bash
npm run build:gh-pages
```

### GitHub Pages Setup
1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on push to main

**Important:** Make sure to enable the `github-pages` environment in your repository settings:
- Go to Settings → Environments
- Create a new environment called `github-pages`
- This allows the deployment to work properly

## Configuration
- Base path is automatically set to `/nar-website/` for production builds
- Development server runs on `http://localhost:8080`
- Production build outputs to `dist/` directory
