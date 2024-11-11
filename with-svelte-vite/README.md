# Capsule Svelte + Vite Starter Template

This template provides a minimal setup to get Capsule working in a Svelte + Vite application. It includes a basic
Capsule client initialization and the necessary configurations to support React components within Svelte.

## Features

- Minimal Capsule client configuration using `@usecapsule/react-sdk`
- Pre-configured Capsule Modal setup
- Environment-based API key configuration
- React integration within Svelte using `svelte-preprocess-react`
- Vite configuration with `vite-plugin-node-polyfills`

## Prerequisites

- Capsule API Key (obtain from [developer.usecapsule.com](https://developer.usecapsule.com))

## Getting Started

1. Copy this template folder to your project location and rename it:

   ```bash
   cp -r path/to/capsule-starter-templates/with-svelte-vite my-capsule-project
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

   - Rename `.env.example` to `.env`
   - Update the API key:

   ```bash
   VITE_CAPSULE_API_KEY=your_api_key_here
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

This Svelte + Vite starter template includes several important configurations:

### React Integration

The template includes React as a dependency since the Capsule Modal is React-based:

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

### Svelte Preprocessor Configuration

The template uses `svelte-preprocess-react` to handle React components. This is configured in `svelte.config.js`:

```javascript
import preprocessReact from "svelte-preprocess-react";

export default {
  preprocess: [preprocessReact()],
  // ... other config
};
```

### Required Vite Plugin

The template includes `vite-plugin-node-polyfills` for necessary Node.js polyfills. This is configured in
`vite.config.js`:

```javascript
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [nodePolyfills()],
  // ... other config
});
```

### Using Capsule Components

To use the Capsule Modal in your Svelte components:

```svelte
<script lang="ts">
  import { CapsuleModal } from "@usecapsule/react-sdk";
  import { sveltify } from "svelte-preprocess-react";

  const react = sveltify({ CapsuleModal });
</script>

<react.CapsuleModal {...yourProps} />
```

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
