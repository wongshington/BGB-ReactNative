import React from "react";
import { toolbarStyles } from "./_toolbar";
import { Appbar } from 'react-native-paper';
import { iconColor } from "../../../styles/styles";

const ToolbarComponent = ({ navigation }) => {
  const userName = 'Test User';

  return (
    <Appbar.Header style={ toolbarStyles.main }>
      <Appbar.Action 
        mode="outlined" 
        icon="heart-outline"
        color={ iconColor }
        onPress={ 
          () => navigation.navigate('Profile', {name: userName}) 
        } 
      />
      <Appbar.Action 
        icon="home-outline" 
        color={ iconColor }
        onPress={ () => navigation.navigate('Home') } 
      />
      <Appbar.Action 
        icon="account-outline"
        color={ iconColor }
        onPress={ () => navigation.navigate('Settings') } 
      />
      <Appbar.Action 
        icon="brain"
        color={ iconColor }
        onPress={ () => navigation.navigate('Info') } 
      />
      <Appbar.Action 
        icon="map-marker" 
        color={ iconColor }
        onPress={ () => navigation.navigate('Resources') } 
      />
    </Appbar.Header>
  )
}

export default ToolbarComponent