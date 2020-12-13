import React from "react";
import LoginOptionsComponent from "./session/login_options_component";
import EmailAuthComponent from './session/email_auth/email_auth_component';
import HomeComponent from "./home/home_component";
import { NativeRouter, Route } from 'react-router-native';
import { View } from 'react-native';

const App = () => {
  return(
    <NativeRouter>
      <View style={{ overflow: "hidden", flex: 1 }}>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/login" component={LoginOptionsComponent} />
        <Route path="/home" component={HomeComponent} />
        <Route path='/auth/:formType' component={EmailAuthComponent}/>
      </View>
    </NativeRouter>
  )
};

export default App;
