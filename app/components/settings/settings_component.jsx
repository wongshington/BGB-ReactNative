import React from "react";
import { View } from "react-native";
import HeaderComponent from "../shared/header/header_component";
import ToolbarComponent from "../shared/toolbar/toolbar_component";
import { settingsStyles } from "./_settings";

const SettingsComponent = ({ navigation }) => {
  const headerTitle = "Settings";

  return (
    <View>
      <HeaderComponent 
        title={ headerTitle }
        navigation={ navigation }
      >
      </HeaderComponent>
      <View style={ settingsStyles.main }></View>
      <ToolbarComponent navigation={ navigation }>
      </ToolbarComponent>
    </View>
  )
}

export default SettingsComponent;