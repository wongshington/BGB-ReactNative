import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginOptionsComponent from "./session/login_options_component";
import EmailAuthContainer from './session/email_auth/email_auth_container';
import HomeComponent from "./home/home_component";
import ProfileComponent from "./profile/profile_component";
import SettingsComponent from "./settings/settings_component";
import InfoComponent from "./info/info_component";
import CheckinComponent from "./shared/checkin/checkin_component";
import InfopageComponent from "./infopage/infopage_component";
import ResourcesComponent from "./resources/resources_component";
import VideoComponent from "./shared/video/video_component";
import GuideComponent from "./guide/guide_component";

const Stack = createStackNavigator();

const App = () => (
  <PaperProvider>
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen 
        name="Login" 
        component={LoginOptionsComponent}
      />
      <Stack.Screen 
        name="Email Auth"
        component={EmailAuthContainer}
      />
      <Stack.Screen
        name="Home"
        component={ HomeComponent }
      />
      <Stack.Screen
        name="Info"
        component={ InfoComponent }
      />
      <Stack.Screen
        name="Infopage"
        component={ InfopageComponent }
      />
      <Stack.Screen
        name="Checkin"
        component={ CheckinComponent }
      />
      <Stack.Screen 
        name="Profile" 
        component={ ProfileComponent }
      />
      <Stack.Screen 
        name="Settings" 
        component={ SettingsComponent }
      />
      <Stack.Screen 
        name="Resources" 
        component={ ResourcesComponent }
      />
      <Stack.Screen 
        name="Video" 
        component={ VideoComponent }
      />
      <Stack.Screen 
        name="Guide" 
        component={ GuideComponent }
      />
    </Stack.Navigator>
  </NavigationContainer>
  </PaperProvider>
);

export default App;
