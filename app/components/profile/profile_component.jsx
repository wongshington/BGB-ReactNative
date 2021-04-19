import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import MaterialTabs from 'react-native-material-tabs';
import HeaderComponent from "../shared/header/header_component";
import ToolbarComponent from "../shared/toolbar/toolbar_component";
import { profileStyles } from "./_profile";
import { 
  colorGray, 
  colorPurple, 
  colorWhite, 
  windowWidth 
} from "../../styles/styles";
import GridComponent from "../shared/grid/grid_component";

// TODO remove once connected to backend
const description = 'Hi! I’m Micah... description here description' + 
'description here description here description here description here' + 
'description here';

const fakeElements1 = [
  {title: 'Hair Care', image: require("../../../assets/hair.png")},
  {title: 'Hair Care', image: require("../../../assets/hair.png")},
  {title: 'Hair Care', image: require("../../../assets/hair.png")},
  {title: 'Hair Care', image: require("../../../assets/hair.png")},
  {title: 'Hair Care', image: require("../../../assets/hair.png")},
  {title: 'Hair Care', image: require("../../../assets/hair.png")},
  {title: 'Hair Care', image: require("../../../assets/hair.png")},
  {title: 'Hair Care', image: require("../../../assets/hair.png")},
  {title: 'Hair Care', image: require("../../../assets/hair.png")},
];

const fakeElements2 = [
  {title: 'Exercise', image: require("../../../assets/plant.png")},
  {title: 'Exercise', image: require("../../../assets/plant.png")},
  {title: 'Exercise', image: require("../../../assets/plant.png")},
  {title: 'Exercise', image: require("../../../assets/plant.png")},
  {title: 'Exercise', image: require("../../../assets/plant.png")},
  {title: 'Exercise', image: require("../../../assets/plant.png")},
  {title: 'Exercise', image: require("../../../assets/plant.png")},
  {title: 'Exercise', image: require("../../../assets/plant.png")},
  {title: 'Exercise', image: require("../../../assets/plant.png")},
];

const ProfileComponent = ({ navigation, route }) => {
  const headerTitle = 'My Profile';
  const [selectedTab, setSelectedTab] = useState(0);
  
  // Elements displayed for each tab
  const posts = [];
  const following = fakeElements1;
  const tags = fakeElements2;

  return (
    <View style={ profileStyles.main }>
      <HeaderComponent 
        navigation={ navigation }
        title={ headerTitle }>
      </HeaderComponent>
      <View style={ profileStyles.content }>
        <View style={ profileStyles.container }>
          <Text style={ profileStyles.name }>
            { route.params.name }
          </Text>
          <Text style={ profileStyles.description }>
            { description }
            </Text>
        </View>
        <SafeAreaView style={ profileStyles.tabs }>
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
            {selectedTab === 0 && posts.length > 0 &&
              <GridComponent 
                backgroundColor={ colorWhite } 
                elements={ posts }
                cardHeight={ windowWidth/4 }
                cardWidth={ windowWidth/4 }
                navigation={ navigation }
              >
              </GridComponent>
            }
            {selectedTab === 0 && !posts.length && 
              <Text style={ profileStyles.emptyMessage }>
                You do not have any posts.
              </Text>
            }

            {selectedTab === 1 && tags.length > 0 &&
              <GridComponent 
                backgroundColor={ colorWhite } 
                elements={ tags }
                cardHeight={ windowWidth/4 }
                cardWidth={ windowWidth/4 }
                navigation={ navigation }
              >
              </GridComponent>
            }
            {selectedTab === 1 && !tags.length && 
              <Text style={ profileStyles.emptyMessage }>
                You are not following anyone.
              </Text>
            }

            {selectedTab === 2 && following.length > 0 &&
              <GridComponent 
                backgroundColor={ colorWhite } 
                elements={ following }
                cardHeight={ windowWidth/4 }
                cardWidth={ windowWidth/4 }
                navigation={ navigation }
              >
              </GridComponent>
            }
            {selectedTab === 2 && !following.length && 
              <Text style={ profileStyles.emptyMessage }>
                You are not tagged in any posts.
              </Text>
            }
          </View>
        </SafeAreaView>
      </View>
      <ToolbarComponent navigation={ navigation }></ToolbarComponent>
    </View>
  )
}

export default ProfileComponent
