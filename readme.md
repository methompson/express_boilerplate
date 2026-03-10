# Express Boilerplate

A modern Express.js starter template with TypeScript, CORS support, and testing infrastructure.

## Overview

This project provides a clean boilerplate setup for building server-side applications with Express.js and TypeScript. It includes pre-configured tools for development, building, and testing.

## Features

- **Express.js** - Lightweight web framework
- **TypeScript** - Type-safe development
- **CORS & Cookie Support** - Built-in middleware for cross-origin requests and cookies
- **Environment Configuration** - Support for environment variables via `.env`
- **Development Server** - Hot-reload via `tsx watch`
- **Build System** - Production build with `tsup`
- **Testing** - Vitest test runner configured
- **Code Quality** - ESLint configuration included

## Quick Start

### Setup
```bash
./get_ready.sh  # Cleans up repository (removes .git and this script)
```

### Development
```bash
npm install
npm run dev        # Start development server on port 8080 (or PORT env var)
```

### Building
```bash
npm run build      # Create production bundle
```

### Testing
```bash
npm run test       # Run test suite with Vitest
```

## Project Structure

- `src/index.ts` - Main application entry point
- `src/api_controllers/` - API route handlers
- `tsconfig.json` - TypeScript configuration
- `vitest.config.ts` - Test configuration
- `eslint.config.mjs` - Linting rules

## Environment Variables

- `PORT` - Server port (default: 8080)

The app reads environment variables from a `.env` file using `dotenv`.

## License

ISC
