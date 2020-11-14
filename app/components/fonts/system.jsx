import React from "react";
import { Text, View } from "react-native";
const System = ({text}) => {
  return (
    <View>
      <Text style={{fontFamily: "System"}}>{text}</Text>
    </View>
  )
}

export default System;