# Capsule Next.js Starter Template

This template provides a minimal setup to get Capsule working in a Next.js application. It includes a basic Capsule
client initialization and integration with Next.js App Router.

## Features

- Minimal Capsule client configuration using `@usecapsule/react-sdk`
- Pre-configured Capsule Modal setup
- Environment-based API key configuration
- Next.js App Router setup
- Client-side rendering configuration

## Prerequisites

- Capsule API Key (obtain from [developer.usecapsule.com](https://developer.usecapsule.com))

## Getting Started

1. Copy this template folder to your project location and rename it:

   ```bash
   cp -r path/to/capsule-starter-templates/with-react-nextjs my-capsule-project
   cd my-capsule-project
   ```

2. Install dependencies (choose your preferred package manager):

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install

   # Using bun
   bun install
   ```

3. Set up your Capsule API key:

   - Rename `.env.example` to `.env.local`
   - Update the API key:

   ```bash
   NEXT_PUBLIC_CAPSULE_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev

   # Using bun
   bun dev
   ```

## Framework-Specific Details

This Next.js starter template uses the App Router and includes the necessary configurations for client-side rendering
with Capsule. Key points:

- Uses the "use client" directive for client-side rendering
- Configured for proper client state management
- Includes necessary component wrapping for Capsule Modal
- Environment variable setup optimized for Next.js

## Usage

1. Build upon the provided example component
2. Implement additional Capsule features as needed
3. Modify the CapsuleModal component props as required

For detailed documentation, visit [docs.usecapsule.com](https://docs.usecapsule.com)

## Example Implementation

For more complex implementations and examples, check out our
[Examples Hub](https://github.com/capsule-org/Examples-Hub/). You'll find examples of:

- Authentication options
- Signer implementations
- Session management
- Interactive tutorials
- Framework-specific code snippets
