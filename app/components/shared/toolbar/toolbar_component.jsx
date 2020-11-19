import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { Link } from 'react-router-native';
import { toolbarStyles } from "./_toolbar";

const ToolbarComponent = () => {
  return (
    <View style={toolbarStyles.main}>
      <Link style={toolbarStyles.homeLink}
            to="/home">
        <Icon
          name="home"
          size={30}
          color="black"
        />
      </Link>     
      <Link style={toolbarStyles.scheduleLink}
            to="/auth/signup">
        <Icon
          name="event"
          size={30}
          color="black"
        />
      </Link> 
    </View>
  )
}

export default ToolbarComponent