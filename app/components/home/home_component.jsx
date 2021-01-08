import React from "react";
import { View } from "react-native";
import HeaderComponent from "../shared/header/header_component";
import HistoryComponent from "./history/history_component";
import LibraryComponent from "./library/library_component";
import RecommendationComponent from "./recommendation/recommendation_component";
import ToolbarComponent from "../shared/toolbar/toolbar_component";
import { homeStyles } from "./_home";

const HomeComponent = ({navigation}) => {
  return (
    <View style={homeStyles.main}>
      <HeaderComponent 
        navigation={navigation} 
        title='Home'
      >
      </HeaderComponent>
      <RecommendationComponent></RecommendationComponent>
      <HistoryComponent></HistoryComponent>
      <LibraryComponent></LibraryComponent>
      <ToolbarComponent navigation={navigation}></ToolbarComponent>
    </View>
  )
}

export default HomeComponent