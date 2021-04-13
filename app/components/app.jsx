import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginOptionsComponent from "./session/login_options_component";
import EmailAuthComponent from './session/email_auth/email_auth_component';
import HomeComponent from "./home/home_component";
import DayComponent from "./day/day_component";
import ScheduleComponent from "./schedule/schedule_component";
import ProfileComponent from "./profile/profile_component";
// import MapSection from './map/map_component' // import the map here
import MapComponent from './map/map_component';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen 
          name="Map" 
          component={MapComponent}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginOptionsComponent}
        />
        <Stack.Screen
          name="Home"
          component={HomeComponent}
        />
        <Stack.Screen 
          name="Day" 
          component={DayComponent}
        />
        <Stack.Screen 
          name="Schedule" 
          component={ScheduleComponent}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
