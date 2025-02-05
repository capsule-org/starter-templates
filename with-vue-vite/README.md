# Para Vue + Vite Starter Template

This template provides a minimal setup to get Para working in a Vue + Vite application. It includes a basic Para client
initialization and the necessary configurations to support React components within Vue.

## Features

- Minimal Para client configuration using `@getpara/react-sdk`
- Pre-configured Para Modal setup
- Environment-based API key configuration
- React integration within Vue
- Vite configuration with required plugins

## Prerequisites

- Para API Key (obtain from [developer.getpara.com](https://developer.getpara.com))

## Getting Started

1. Copy this template folder to your project location and rename it:

   ```bash
   cp -r path/to/para-starter-templates/with-vue-vite my-para-project
   cd my-para-project
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

3. Set up your Para API key:

   - Rename `.env.example` to `.env`
   - Update the API key:

   ```bash
   VITE_PARA_API_KEY=your_api_key_here
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

This Vue + Vite starter template includes several important configurations:

### Vite Configuration

The template is configured to support both Vue and React components. This is set up in `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [vue(), react(), nodePolyfills()],
});
```

Key points:

- Uses @vitejs/plugin-vue for Vue support
- Uses @vitejs/plugin-react for React support
- Includes necessary Node.js polyfills
- Allows seamless use of React components in Vue

## Usage

1. Build upon the provided example component
2. Implement additional Para features as needed
3. Modify the ParaModal component props as required

For detailed documentation, visit [docs.getpara.com](https://docs.getpara.com)

## Example Implementation

For more complex implementations and examples, check out our [Examples Hub](https://github.com/para-org/Examples-Hub/).
You'll find examples of:

- Authentication options
- Signer implementations
- Session management
- Interactive tutorials
- Framework-specific code snippets
