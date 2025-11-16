# NFT Website

This is an NFT website project built with Vite for learning Advanced CSS.

## Getting Started

Install the dependencies and run the project:
```bash
npm install
npm start
```

## Building for Production

To build the project for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by the GitHub Actions workflow in `.github/workflows/deploy.yml`.

### How it works:
1. When you push changes to the `main` branch
2. The GitHub Actions workflow automatically triggers
3. It installs dependencies, builds the project using Vite
4. Deploys the built files to GitHub Pages

### Viewing Changes:
After pushing changes to the `main` branch, the deployment takes a few minutes. You can monitor the deployment progress in the "Actions" tab of the GitHub repository.

Happy Coding!