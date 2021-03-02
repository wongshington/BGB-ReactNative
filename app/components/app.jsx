import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginOptionsComponent from "./session/login_options_component";
import EmailAuthComponent from './session/email_auth/email_auth_component';
import HomeComponent from "./home/home_component";
import DayComponent from "./day/day_component";
import ScheduleComponent from "./schedule/schedule_component";
import ProfileComponent from "./profile/profile_component";
import MapSection from './map/Map' // import the map here

const Stack = createStackNavigator();

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} // our location object from earlier

const App = () => {
  return(
    <MapSection location={location} zoomLevel={17} /> 
    // <NavigationContainer>
    //   <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false
    //   }}
    //   >
    //     <Stack.Screen 
    //       name="Login" 
    //       component={LoginOptionsComponent}
    //     />
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeComponent}
    //     />
    //     <Stack.Screen 
    //       name="Day" 
    //       component={DayComponent}
    //     />
    //     <Stack.Screen 
    //       name="Schedule" 
    //       component={ScheduleComponent}
    //     />
    //     <Stack.Screen 
    //       name="Profile" 
    //       component={ProfileComponent}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
};

export default App;
