import * as React from 'react';
import HeaderComponent from '../shared/header/header_component';
import ToolbarComponent from '../shared/toolbar/toolbar_component';
import { View } from "react-native";
import { resourcesStyles } from './_resources';

const ResourcesComponent = ({ navigation }) => (
  <View>
    <HeaderComponent 
        title="Resources"
        navigation={ navigation }
      ></HeaderComponent>
      <View style={ resourcesStyles.main }></View>
      <ToolbarComponent navigation={ navigation }></ToolbarComponent>
  </View>
);
  
export default ResourcesComponent;