# Para SvelteKit Starter Template

This template provides a minimal setup to get Para working in a SvelteKit application. It includes a basic Para client
initialization and the necessary configurations to support React components within SvelteKit.

## Features

- Minimal Para client configuration using `@getpara/react-sdk`
- Pre-configured Para Modal setup
- Environment-based API key configuration
- React integration within SvelteKit using `svelte-preprocess-react`
- Vite configuration with `vite-plugin-node-polyfills`
- Client-side only rendering configuration

## Prerequisites

- Para API Key (obtain from [developer.getpara.com](https://developer.getpara.com))

## Getting Started

1. Copy this template folder to your project location and rename it:

   ```bash
   cp -r path/to/para-starter-templates/with-svelte-kit my-para-project
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
   PUBLIC_PARA_API_KEY=your_api_key_here
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

This SvelteKit starter template includes several important configurations:

### React Integration

The template includes React as a dependency since the Para Modal is React-based:

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

Since SvelteKit uses Vite, the template includes `vite-plugin-node-polyfills` for necessary Node.js polyfills. This is
configured in `vite.config.js`:

```javascript
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [nodePolyfills()],
  // ... other config
});
```

### Client-Side Rendering

To ensure proper functionality, the template disables SSR for pages using Para components by adding:

```javascript
export const ssr = false;
```

### Using Para Components

To use the Para Modal in your Svelte components:

```svelte
<script lang="ts">
  import { ParaModal } from "@getpara/react-sdk";
  import { sveltify } from "svelte-preprocess-react";

  const react = sveltify({ ParaModal });
</script>

<react.ParaModal {...yourProps} />
```

## Usage

1. Build upon the provided example component
2. Implement additional Para features as needed
3. Modify the ParaModal component props as required
4. Remember to disable SSR for pages using Para components

For detailed documentation, visit [docs.getpara.com](https://docs.getpara.com)

## Example Implementation

For more complex implementations and examples, check out our [Examples Hub](https://github.com/para-org/Examples-Hub/).
You'll find examples of:

- Authentication options
- Signer implementations
- Session management
- Interactive tutorials
- Framework-specific code snippets
