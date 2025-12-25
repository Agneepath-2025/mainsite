# CI/CD Pipeline Configuration

This project uses GitHub Actions for continuous integration and deployment.

## Workflows

### 1. **Deploy to Production** (`deploy.yml`)
- **Trigger:** Push to `main` branch or manual dispatch
- **Actions:**
  - Checkout code
  - Install dependencies
  - Run linter
  - Build application
  - Deploy to production server via SSH
  - Restart PM2 process

### 2. **CI - Build & Test** (`ci.yml`)
- **Trigger:** Pull requests to `main` or `develop`, push to `develop`
- **Actions:**
  - Run on multiple Node versions (18.x, 20.x)
  - Install dependencies
  - Run ESLint
  - Type checking with TypeScript
  - Build application
  - Optional: Lighthouse performance testing

### 3. **Code Quality** (`code-quality.yml`)
- **Trigger:** Pull requests and pushes to `main` or `develop`
- **Actions:**
  - ESLint with JSON reporter
  - Security audit
  - Bundle size analysis
  - Upload build artifacts

### 4. **Deploy to Staging** (`staging.yml`)
- **Trigger:** Push to `develop` or `staging` branch
- **Actions:**
  - Build and deploy to staging environment
  - Separate PM2 process for staging

## Required GitHub Secrets

Configure these secrets in your GitHub repository settings:
**Settings → Secrets and variables → Actions → New repository secret**

### Production Secrets
- `SERVER_HOST` - Production server IP or domain
- `SERVER_USER` - SSH username for production server
- `SSH_PRIVATE_KEY` - SSH private key for authentication

### Staging Secrets (Optional)
- `STAGING_SERVER_HOST` - Staging server IP or domain
- `STAGING_SERVER_USER` - SSH username for staging server
- `STAGING_SSH_PRIVATE_KEY` - SSH private key for staging

### How to Generate SSH Keys

```bash
# Generate SSH key pair
ssh-keygen -t rsa -b 4096 -C "github-actions@ag-site"

# Copy public key to server
ssh-copy-id -i ~/.ssh/id_rsa.pub user@server-ip

# Copy private key content for GitHub secret
cat ~/.ssh/id_rsa
```

## Server Setup

### Prerequisites
- Node.js 20.x
- PM2 process manager
- Git

### Initial Server Configuration

```bash
# Install PM2 globally
npm install -g pm2

# Clone repository
git clone <repository-url> ag-site
cd ag-site

# Install dependencies
npm install

# Build application
npm run build

# Start with PM2
pm2 start npm --name ag-site -- start
pm2 save
pm2 startup
```

## Environment Variables

Create `.env.production` on your server with required variables:

```bash
# Example
NEXT_PUBLIC_API_URL=https://api.agneepath.co.in
# Add other environment variables as needed
```

## Workflow Status Badges

Add these to your README.md:

```markdown
![Deploy](https://github.com/USERNAME/REPO/actions/workflows/deploy.yml/badge.svg)
![CI](https://github.com/USERNAME/REPO/actions/workflows/ci.yml/badge.svg)
```

## Branch Strategy

- `main` - Production branch (auto-deploys to production)
- `develop` - Development branch (auto-deploys to staging)
- `feature/*` - Feature branches (CI checks only)

## Deployment Process

### Production Deployment
1. Create pull request to `main`
2. CI checks run automatically
3. Review and approve PR
4. Merge to `main`
5. Automatic deployment to production

### Staging Deployment
1. Push to `develop` branch
2. Automatic deployment to staging

### Manual Deployment
1. Go to Actions tab in GitHub
2. Select "Deploy to Production" workflow
3. Click "Run workflow"
4. Select branch and run

## Troubleshooting

### Build Fails
- Check Node version compatibility
- Verify all dependencies are in package.json
- Check for TypeScript errors

### Deployment Fails
- Verify SSH credentials are correct
- Check server has sufficient disk space
- Ensure PM2 is installed on server
- Check server logs: `pm2 logs ag-site`

### Linting Errors
- Run locally: `npm run lint`
- Fix automatically: `npm run lint -- --fix` (if configured)

## Monitoring

### Check Deployment Status
```bash
# SSH to server
ssh user@server-ip

# Check PM2 status
pm2 status

# View logs
pm2 logs ag-site

# Restart if needed
pm2 restart ag-site
```

## Security Best Practices

1. Never commit secrets to repository
2. Use GitHub Secrets for sensitive data
3. Rotate SSH keys regularly
4. Keep dependencies updated
5. Run security audits: `npm audit`

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
