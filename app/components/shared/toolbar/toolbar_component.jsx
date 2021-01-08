import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { toolbarStyles } from "./_toolbar";
import { colorBlack } from "../../../styles/styles";

const ToolbarComponent = ({navigation}) => {
  return (
    <View style={toolbarStyles.main}>
      <View style={toolbarStyles.homeLink}>
        <Icon
          name="home"
          size={30}
          color={colorBlack}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={toolbarStyles.scheduleLink}>
        <Icon
          name="event"
          size={30}
          color={colorBlack}
          onPress={() => navigation.navigate('Day')}
        />
      </View>
    </View>
  )
}

export default ToolbarComponent