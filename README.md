# React Native Template

+ [React Native Template](#react-native-template)
  + [Get started](#get-started)
  + [Production build](#production-build)
  + [Learn more](#learn-more)






## Get started

1. Install dependencies

   ```sh
     npm install
   ```

2. Start the app

   ```sh
     npx expo start
   ```

3. Testing
   ```sh
     npm test
   ```






## Production build

1. Install and login to [EAS](https://expo.dev/accounts):
   ```sh
    npx expo install expo-dev-client
    npm i -g eas-cli
    eas login
   ```

2. Configure project:
   ```sh
     eas build:configure
   ```

3. Create a build:
   ```sh
     eas build --platform android --profile preview
   ```






## Learn more

+ [Expo documentation](https://docs.expo.dev/)
