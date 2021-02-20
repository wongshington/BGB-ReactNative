This project was created using the Expo CLI Quickstart
  - https://reactnative.dev/docs/environment-setup

Environment Requirements:
  - Node: https://nodejs.org/en/download/
  - npm: https://www.npmjs.com/
  - Expo CLI: https://expo.io/ (also see getting started instructions)

Getting Started on MacOS:
  * In the root directory `npm install` to install dependencies
  * `npm start` to start frontend
    - if you don't have Expo CLI installed the npm start command should prompt you. Otherwise run `npm install -g expo-cli`
  * when the server starts, it'll open a web page and you have the option of viewing the project locally in the browser or in a simulator. Using a simulator would require installing the associated software(xcode for mac, etc), so stick with the browser if you don't have that software.

Error Handling:
  - refer to these docs for more guidance: https://reactnative.dev/docs/environment-setup
  - common expo cli issues: https://github.com/expo/expo-cli/issues
  - (from Izzy) if can't npm install or install expo-cli try delete package-lock.json and node_modules folder, 
  npm cache clean -f, 
  npm install again, npm install -g expo-cli...
  - (from izzy) if says the permission issue thing, try $sudo chown -R $USER /usr/local/lib/node_modules
 
  