import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import MaterialTabs from 'react-native-material-tabs';
import HeaderComponent from "../shared/header/header_component";
import ToolbarComponent from "../shared/toolbar/toolbar_component";
import { profileStyles } from "./_profile";
import { colorGray, colorPurple, colorWhite, windowWidth } from "../../styles/styles";
import GridComponent from "../shared/grid/grid_component";

// TODO remove once connected to backend
const description = 'Hi! I’m Micah... description here description here' + 
'description here description here description here description here' + 
'description here';

const fakeElements = [
  {name: 'saved item 1'},
  {name: 'saved item 2'},
  {name: 'saved item 3'},
  {name: 'saved item 4'},
  {name: 'saved item 5'},
  {name: 'saved item 6'},
  {name: 'saved item 7'},
  {name: 'saved item 8'},
  {name: 'saved item 9'},
];

const ProfileComponent = ({ navigation, route }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={ profileStyles.main }>
      <HeaderComponent 
        navigation={ navigation }
        title={ 'My Profile' }>
      </HeaderComponent>
      <View style={ profileStyles.content }>
        <View style={ profileStyles.container }>
          <Text style={ profileStyles.name }>{ route.params.name }</Text>
          <Text style={ profileStyles.description }>{ description }</Text>
        </View>
        <SafeAreaView style={ profileStyles.tabs}>
          <MaterialTabs
            items={ ['My Posts', 'Following', 'Tags'] }
            selectedIndex={ selectedTab }
            onChange={ setSelectedTab }
            indicatorColor={ colorPurple } 
            barColor={ colorWhite }
            inactiveTextColor={ colorGray }
            activeTextColor={ colorPurple }
          />
          <View style={ profileStyles.gridContainer }>
            {selectedTab === 0 &&
              <GridComponent 
                backgroundColor={ colorWhite } 
                elements={ fakeElements }
                cardHeight={ windowWidth/4 }
                cardWidth={ windowWidth/4 }
                navigation={ navigation }
              >
              </GridComponent>
            }
            {selectedTab === 1 &&
              <GridComponent 
                backgroundColor={ colorWhite } 
                elements={ fakeElements }
                cardHeight={ windowWidth/4 }
                cardWidth={ windowWidth/4 }
                navigation={ navigation }
              >
              </GridComponent>
            }
            {selectedTab === 2 &&
              <GridComponent 
                backgroundColor={ colorWhite } 
                elements={ fakeElements }
                cardHeight={ windowWidth/4 }
                cardWidth={ windowWidth/4 }
                navigation={ navigation }
              >
              </GridComponent>
            }
          </View>
        </SafeAreaView>
      </View>
      <ToolbarComponent navigation={ navigation }></ToolbarComponent>
    </View>
  )
}

export default ProfileComponent
