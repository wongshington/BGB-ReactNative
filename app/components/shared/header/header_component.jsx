import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { headerStyles } from "./_header";

// TODO: Update the Profile name to the actual user once connected
// to the DB
const HeaderComponent = ({navigation, title}) => {
  return (
    <View style={headerStyles.main}>
      <TouchableHighlight 
        style={headerStyles.profileLink} 
        onPress={() => navigation.navigate('Profile', {name: 'LB'})}
      >
        <Text></Text>
      </TouchableHighlight>
      <Text style={headerStyles.title}>{title}</Text>
    </View>
  )
}

export default HeaderComponent