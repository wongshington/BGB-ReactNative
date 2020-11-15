import React from "react"
import {useEffect} from 'react'
import { Text, View, Button } from "react-native";
import { layoutStyles, loginOptionsStyles } from "../../styles/styles"

import * as Facebook from 'expo-facebook';
import { FBOOK_APP_ID } from '../../../secrets/keys.js';

const FBLogin = () => {

  const initSocialLogin = async () => {
    try{
      // setup the SDK to be able to make the request later
      await Facebook.initializeAsync(FBOOK_APP_ID);
    } catch (err) {
      console.error(err);
    }
  };

  const facebookLogin = async () => {
    try {
      const { token, type} = await Facebook.logInWithReadPermissionsAsync(
        FBOOK_APP_ID, { permissions: ['email', 'public_profile']}
      )

      // can be abstracted to another part of our Redux flow later on
      const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
      );
      const user = await response.json();

      return { type, token, user };

    } catch (err){
      console.error(err)
    }
  }

  const handleFBLoginPress = async () => {
    const { type, token, user, error } = await facebookLogin();
    if (type && token) {
      if (type === 'success') {
        console.log(user) // example: { "id": "101577799999", "name": "First Last"}
        console.log(token) // example: "superLongStringHere"
        // need to save this information in our redux store afterwards
      } 
    } else if (error) {
      console.log('The login attempt was cancelled');
    }
  };

 useEffect(() => {initSocialLogin()}, [])

  Facebook.initializeAsync()
  return(
    <View style={[loginOptionsStyles.sessionsButtonLayout, loginOptionsStyles.sessionsButtonFacebook]}>
      <Button title="Log in with Facebook" onPress={handleFBLoginPress} style={[loginOptionsStyles.sessionFacebookText,loginOptionsStyles.font]}>

      </Button>
    </View>
  )
}

export default FBLogin
