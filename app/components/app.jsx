import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginOptionsComponent from "./session/login_options_component";
import EmailAuthContainer from './session/email_auth/email_auth_container';
import HomeComponent from "./home/home_component";
import DayComponent from "./day/day_component";
import ScheduleComponent from "./schedule/schedule_component";
import ProfileComponent from "./profile/profile_component";

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
          name="Login" 
          component={LoginOptionsComponent}
        />
        <Stack.Screen 
          name="Email Auth"
          component={EmailAuthContainer}
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
