import * as React from 'react';
import CardComponent from '../shared/card/card_component';
import HeaderComponent from '../shared/header/header_component';
import SearchbarComponent from '../shared/searchbar/searchbar_component';
import ToolbarComponent from '../shared/toolbar/toolbar_component';
import { ScrollView, Text, View } from "react-native";
import { infoStyles } from './_info';

const topics = [
  {title: "Meditation", content: "Learn how to meditate.", color: "#7d8fd1"},
  {title: "Hair Care", content: "Tips, tricks, and guides to keep up with your curls.", color: "#a494e3"},
  {title: "Exercise", content: "Tips on fun exercies to do in your room.", color: "#077641"},
  {title: "Exercise", content: "Tips on fun exercies to do in your room.", color: "#7d8fd1"},
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
       
        <ScrollView contentContainerStyle={ infoStyles.scrollView }>
          {topics.map((prop, key) => {
            return (
              <View key={ key } style={ infoStyles.cardContainer }>
                <CardComponent
                  title={ prop.title }
                  content={ prop.content }
                  navigation={ navigation }
                  cardHeight={ 200 }
                  cardWidth={ '100%' }
                  cardColor={ prop.color }
                ></CardComponent>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <ToolbarComponent navigation={ navigation }></ToolbarComponent>
    </View>
  );
};

export default InfoComponent;