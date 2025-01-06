# Egyptian Map of Pi

[![Build Status](https://github.com/KOSASIH/repo/actions/workflows/main.yml/badge.svg)](https://github.com/KOSASIH/repo/actions/workflows/main.yml)
[![Test Coverage](https://codecov.io/gh/KOSASIH/repo/branch/main/graph/badge.svg)](https://codecov.io/gh/owner/repo)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-green.svg)](CHANGELOG.md)

## Overview

Egyptian Map of Pi is a specialized implementation of the Map of Pi platform designed specifically for the Egyptian market within the Pi Network ecosystem. This marketplace application connects local Egyptian merchants with buyers, enabling secure commerce using Pi cryptocurrency while adhering to local regulations and cultural preferences.

### Key Features

- 🌐 Arabic-first interface with RTL support
- 📍 Egyptian location services integration
- ✅ Local merchant verification system
- 💰 Pi Network payment processing
- 💬 Real-time messaging system
- 🌍 Multi-region deployment

## Architecture

The application follows a modern microservices architecture deployed on AWS infrastructure:

- **Frontend**: React 18.2, Material-UI 5.14+
- **Backend**: Node.js 18 LTS, Express 4.18
- **Database**: MongoDB 6.0, Redis 7.0
- **Infrastructure**: AWS EKS, CloudFront

For detailed architecture diagrams, see the [Technical Documentation](docs/technical-specs.md).

## Prerequisites

### Development Environment

- Node.js 18 LTS
- MongoDB 6.0
- Redis 7.0
- Pi Browser (latest)
- Pi SDK (latest)
- AWS CLI v2
- kubectl 1.27+

### Supported Browsers

- Pi Browser (latest) - Primary
- Chrome Mobile 80+
- Safari iOS 12+

## Installation

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/KOSASIH/egyptian-map-of-pi.git
cd egyptian-map-of-pi
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start development server:
```bash
npm run dev
```

### Production Deployment

1. Configure AWS credentials:
```bash
aws configure
```

2. Deploy infrastructure:
```bash
npm run deploy:infra
```

3. Deploy application:
```bash
npm run deploy
```

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| NODE_ENV | Environment (development/staging/production) | Yes | development |
| PI_API_KEY | Pi Network API key | Yes | - |
| MONGODB_URI | MongoDB connection string | Yes | - |
| REDIS_URL | Redis connection string | Yes | - |
| AWS_REGION | AWS deployment region | Yes | me-south-1 |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application bundle |
| `npm test` | Run comprehensive test suite |
| `npm run deploy` | Deploy to AWS production environment |
| `npm run lint` | Run code linting and formatting |

## Security

The application implements multiple security layers:

- Pi Network authentication flow
- Role-based access control (RBAC)
- Egyptian compliance requirements
- TLS 1.3 encryption
- Comprehensive security monitoring
- Regular security audits

For security-related issues, please see our [Security Policy](SECURITY.md).

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and changes.

## Maintainers

- Backend Team
- Frontend Team
- Security Team
- DevOps Team

## Support

For support, please open an issue in the GitHub repository or contact the maintenance team.

---

Built with ❤️ for the Egyptian Pi Network community
