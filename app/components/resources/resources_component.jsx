import * as React from 'react';
import HeaderComponent from '../shared/header/header_component';
import ToolbarComponent from '../shared/toolbar/toolbar_component';
import { View } from "react-native";
import { resourcesStyles } from './_resources';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const ResourcesComponent = ({ navigation, fetchResources, resources }) => {
  useEffect(() => { 
    fetchResources();
  }, []);
  return (
    <View>
      <HeaderComponent 
          title="Resources"
          navigation={ navigation }
        ></HeaderComponent>
        <View style={ resourcesStyles.main }></View>
        {resources.map(resource => {
          return (
            <View>{resource.description}</View>
          );
        })}
        <ToolbarComponent navigation={ navigation }></ToolbarComponent>
    </View>
  )
};
  
export default ResourcesComponent;