import React from "react";
import { View } from "react-native";
import { Link } from 'react-router-native';
import { headerStyles } from "./_header";

const HeaderComponent = () => {
  return (
    <View style={headerStyles.main}>
      <Link to="/home">
        <View style={headerStyles.profileLink}></View>
      </Link>     
    </View>
  )
}

export default HeaderComponent