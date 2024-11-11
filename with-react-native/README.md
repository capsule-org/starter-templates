# Capsule React Native Starter Template

This template provides a complete setup to get Capsule working in a React Native application. It includes essential configurations, components, and a basic implementation to help you get started quickly.

## Features

- Pre-configured vanilla React Native setup
- Complete Capsule SDK integration including:
  - `@usecapsule/react-native-passkey`
  - `@usecapsule/react-native-wallet`
- Configured Metro bundler with necessary settings
- Pre-configured shims and polyfills
- Environment-based API key configuration
- Basic "Hello World" component displaying Capsule client information

## Prerequisites

- React Native development environment set up (including Xcode for iOS and Android Studio for Android)
- CocoaPods (for iOS)
- Capsule API Key (obtain from [developer.usecapsule.com](https://developer.usecapsule.com))

## Getting Started

1. Copy this template folder to your project location and rename it:

   ```bash
   cp -r path/to/capsule-starter-templates/with-react-native my-capsule-project
   cd my-capsule-project
   ```

2. Rename the project in the following files:

   - `package.json`: Update the "name" field
   - `app.json`: Update the "name" and "displayName" fields
   - iOS: Update the project name in Xcode and bundle identifier
   - Android: Update package name in:
     - `android/app/src/main/java/com/[your_project_name]/MainActivity.java`
     - `android/app/build.gradle` (applicationId)
     - `AndroidManifest.xml`
     - Folder structure in `android/app/src/main/java/`

3. Install dependencies (choose your preferred package manager):

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

4. For iOS, install CocoaPods dependencies:

   ```bash
   cd ios && pod install && cd ..
   ```

5. For Android, clean the project:

   ```bash
   cd android && ./gradlew clean && cd ..
   ```

6. Set up your Capsule API key:

   - Rename `.env.example` to `.env`
   - Update the API key:

   ```bash
   CAPSULE_API_KEY=your_api_key_here
   ```

7. Start the Metro bundler:

   ```bash
   npm start    # or yarn start, pnpm start, bun start
   ```

8. Run the application:

   ```bash
   # For iOS
   npm run ios    # or yarn ios, pnpm ios, bun ios

   # For Android
   npm run android    # or yarn android, pnpm android, bun android
   ```

## Framework-Specific Details

⚠️ **Important Setup Note**: Before running the application, ensure you have properly renamed ALL instances of the package/bundle identifiers throughout both the iOS and Android folders. Incorrect package/bundle identifiers can prevent the apps from running.

### Included Setup

- Complete Metro configuration for Capsule SDK
- Necessary shims and polyfills pre-configured
- Native modules setup for both iOS and Android
- Basic Capsule client initialization
- Sample component displaying Capsule client information

## Usage

1. Build upon the provided example component
2. Implement additional Capsule features as needed
3. Modify the provided components and configurations to match your requirements

For detailed documentation, visit [docs.usecapsule.com](https://docs.usecapsule.com)

## Example Implementation

For a complete example that integrates Capsule and demonstrates actual usage of the client and methods, check out our [Examples Hub](https://github.com/capsule-org/examples-hub/tree/main/mobile/with-react-native)
