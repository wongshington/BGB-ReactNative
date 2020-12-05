import React from "react";
import LoginOptionsComponent from "./session/login_options_component";
import HomeComponent from "./home/home_component";
import { NativeRouter, Route } from 'react-router-native';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { View } from 'react-native';
import DayComponent from "./calendar/day/day";
import LoginOptionsComponent from "./session/login_options_component";

const App = () => {
  return(
    <NativeRouter>
      <View style={{overflow: "hidden"}}>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/login" component={LoginOptionsComponent} />
        <Route path="/home" component={HomeComponent} />
        <Route exact path="/" component={DayComponent} />
        <Route path="/login" component={LoginOptionsComponent} />
        <Route path="/schedule/:time" component={DayComponent} />
      </View>
    </NativeRouter>
  )
};

export default App;
