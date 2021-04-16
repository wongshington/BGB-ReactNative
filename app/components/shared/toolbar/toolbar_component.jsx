import React from "react";
import { toolbarStyles } from "./_toolbar";
import { Appbar } from 'react-native-paper';

const ToolbarComponent = ({ navigation }) => {
  return (
    <Appbar.Header style={ toolbarStyles.main }>
      <Appbar.Action 
        icon="heart-outline"
        color="#8a8a8a"
        mode="outlined" 
        onPress={ () => navigation.navigate('Profile', {name: 'Test User'}) } 
      />
      <Appbar.Action 
        icon="home-outline" 
        color="#8a8a8a"
        onPress={ () => navigation.navigate('Home') } 
      />
      <Appbar.Action 
        icon="account-outline"
        color="#8a8a8a"
        onPress={ () => navigation.navigate('Settings') } 
      />
      <Appbar.Action 
        icon="brain"
        color="#8a8a8a"
        onPress={ () => navigation.navigate('Info') } 
      />
      <Appbar.Action 
        icon="map-marker" 
        color="#8a8a8a"
        onPress={ () => navigation.navigate('Resources') } 
      />
    </Appbar.Header>
  )
}

export default ToolbarComponent