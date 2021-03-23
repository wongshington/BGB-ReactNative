import * as React from 'react';
import CardComponent from '../shared/card/card_component';
import HeaderComponent from '../shared/header/header_component';
import SearchbarComponent from '../shared/searchbar/searchbar_component';
import ToolbarComponent from '../shared/toolbar/toolbar_component';
import { ScrollView, Text, View } from "react-native";
import { infoStyles } from './_info';

const topics = [
  {title: "Meditation", content: "Learn how to meditate."},
  {title: "Hair Care", content: "Tips, tricks, and guides to keep up with your curls."},
  {title: "Exercise", content: "Tips on fun exercies to do in your room."},
  {title: "Exercise", content: "Tips on fun exercies to do in your room."},
];

const InfoComponent = ({ navigation }) => {
  return (
    <View>
      <HeaderComponent 
        title="Explore"
        navigation={ navigation }
      >
      </HeaderComponent>
      <View style={ infoStyles.main }>
        <SearchbarComponent></SearchbarComponent>
        <Text style={ infoStyles.text }>
          Find videos, guides and tutorials on different methods 
          of self care.
        </Text>
        <ScrollView contentContainerStyle={ infoStyles.ScrollView }>
          {topics.map((prop, key) => {
            return (
              <CardComponent
                title={ prop.title }
                content={ prop.content }
                key={ key }
                navigation={ navigation }
              ></CardComponent>
            );
          })}
        </ScrollView>
      </View>
      <ToolbarComponent navigation={ navigation }></ToolbarComponent>
    </View>
  );
};

export default InfoComponent;