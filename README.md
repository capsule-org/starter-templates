# Capsule Starter Templates

This repository provides minimal starter templates for integrating Capsule into various frameworks and environments.
Each template folder is designed to be used as a starting point for your project, providing a basic setup with the
Capsule client initialized.

## Available Templates

### React Ecosystem

- `with-react-native` - React Native setup with native modules and configurations
- `with-react-nextjs` - Next.js App Router setup with client-side rendering
- `with-react-vite` - Vite + React setup with node polyfills

### Svelte Ecosystem

- `with-svelte-kit` - SvelteKit setup with React support and node polyfills
- `with-svelte-vite` - Vite + Svelte setup with React support

### Vue Ecosystem

- `with-vue-nuxt` - Nuxt 3 setup with React support and client-side rendering
- `with-vue-vite` - Vite + Vue setup with React support

## Framework-Specific Features

### React Native Template

- Complete native module setup
- Required polyfills and shims
- iOS and Android configurations
- Bundle identifier setup

### Web Framework Templates

- Capsule Modal integration
- Environment-based API key configuration
- Framework-specific builds and configurations:
  - **Next.js**: App Router with client-side rendering
  - **Vite + React**: Node polyfills and build optimization
  - **SvelteKit/Svelte**: React preprocessing and integration
  - **Nuxt 3/Vue**: React support within Vue environment

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/capsule-org/capsule-starter-templates.git
   ```

2. Choose and navigate to your desired template:

   ```bash
   cd capsule-starter-templates/[template-name]
   ```

3. Follow the template-specific README instructions for:
   - Installing dependencies
   - Setting up environment variables
   - Starting the development server
   - Additional configuration steps (if required)

## Template Structure

Each template provides:

1. Basic framework setup
2. Capsule client initialization
3. Minimal example component
4. Environment configuration
5. Framework-specific optimizations
6. Necessary build configurations

## Important Notes

### General

- Each template is independent and can be used as a standalone starter
- Templates provide essential Capsule integration setup
- Build upon these templates for your specific use case

### Framework Specific

- React Native requires additional native setup steps
- Web frameworks include Capsule Modal integration
- Some frameworks require specific plugins or preprocessors
- SSR considerations for Next.js and Nuxt 3

For detailed instructions, refer to each template's individual README.

## Example Hub

For more complex implementations and examples, check out our
[Examples Hub](https://github.com/capsule-org/Examples-Hub/). You'll find comprehensive examples of:

- Authentication implementations
- Signer options
- Session management
- Server-side integration
- Framework-specific features

## Documentation

For detailed Capsule integration documentation, visit [docs.usecapsule.com](https://docs.usecapsule.com)
