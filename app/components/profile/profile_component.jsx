import React from "react";
import { View } from "react-native";
import HeaderComponent from "../shared/header/header_component";
import ToolbarComponent from "../shared/toolbar/toolbar_component";
import { profileStyles } from "./_profile";

const ProfileComponent = ({ navigation, route }) => {
  return (
    <View style={profileStyles.main}>
      <HeaderComponent 
        navigation={navigation}
        title={`${route.params.name}'s' Profile`}>
      </HeaderComponent>
      <View style={profileStyles.content}></View>
      <ToolbarComponent navigation={navigation}></ToolbarComponent>
    </View>
  )
}

export default ProfileComponent
