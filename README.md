# Capsule React Native Starter Template

This template provides a minimal setup to get Capsule working in a React Native application. It includes a basic Capsule client initialization and a simple "Hello World" component that displays the Capsule API key and environment.

## Prerequisites

- Node.js and npm (or yarn)
- React Native development environment set up (including Xcode for iOS and Android Studio for Android)
- CocoaPods (for iOS)
- Capsule API key (obtain from [developer.usecapsule.com](https://developer.usecapsule.com))

## Getting Started

1. Copy this template folder to your project location and rename it:

   ```
   cp -r path/to/capsule-starter-templates/with-react-native my-capsule-project
   cd my-capsule-project
   ```

2. Rename the project in the following files:

   - `package.json`: Update the "name" field
   - `app.json`: Update the "name" and "displayName" fields
   - iOS: Update the project name in Xcode
   - Android: Update `android/app/src/main/java/com/[your_project_name]/MainActivity.java`

3. Set up your Capsule API key:

   - Rename `.env.example` to `.env`
   - Open `.env` and replace `YOUR_CAPSULE_API_KEY` with your actual Capsule API key

4. Install dependencies:

   ```
   yarn install
   ```

5. For iOS, install CocoaPods dependencies:

   ```
   cd ios && pod install && cd ..
   ```

6. For Android, clean the project:

   ```
   cd android && ./gradlew clean && cd ..
   ```

7. Start the Metro bundler:

   ```
   yarn start
   ```

8. In a new terminal, run the app on your preferred platform:

   For iOS:

   ```
   yarn ios
   ```

   For Android:

   ```
   yarn android
   ```

## What's Included

- Basic React Native project structure
- Capsule client initialization
- A simple component displaying Capsule client information

## Next Steps

- Build upon this template to implement Capsule features in your app
- For detailed instructions on how to start using the Capsule client, refer to the official documentation:
  [https://docs.usecapsule.com/getting-started/initial-setup/react-native](https://docs.usecapsule.com/getting-started/initial-setup/react-native)
- For a complete example that integrates Capsule and demonstrates actual usage of the client and methods, check out:
  [https://github.com/capsule-org/examples-hub/tree/main/mobile/with-react-native](https://github.com/capsule-org/examples-hub/tree/main/mobile/with-react-native)

## Support

For questions about Capsule integration, refer to the [Capsule documentation](https://docs.usecapsule.com) or open an issue in the main starter templates repository.
