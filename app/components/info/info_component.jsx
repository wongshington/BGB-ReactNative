import * as React from 'react';
import { ScrollView, Text, View } from "react-native";
import CardComponent from '../shared/card/card_component';
import HeaderComponent from '../shared/header/header_component';
import SearchbarComponent from '../shared/searchbar/searchbar_component';
import ToolbarComponent from '../shared/toolbar/toolbar_component';
import { infoStyles } from './_info';

const topics = [
  {
    title: "Meditation", 
    content: "Learn how to meditate.", 
    cardImage: require("../../../assets/meditation.png"),
  },
  {
    title: "Hair Care", 
    content: "Tips, tricks, and guides to keep up with your curls.", 
    cardImage: require("../../../assets/hair.png"),
  },
  {
    title: "Exercise", 
    content: "Tips on fun exercies to do in your room.", 
    cardImage: require("../../../assets/plant.png"),
  },
  {
    title: "Exercise", 
    content: "Tips on fun exercies to do in your room.", 
    cardImage: require("../../../assets/meditation.png"),
  },
];

const InfoComponent = ({ navigation }) => {
  const headerTitle = 'Explore';
  const infos = topics;

  return (
    <View>
      <HeaderComponent 
        title={ headerTitle }
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
          {infos.map((prop, key) => {
            return (
              <View key={ key } style={ infoStyles.cardContainer }>
                <CardComponent
                  title={ prop.title }
                  content={ prop.content }
                  navigation={ navigation }
                  cardHeight={ 200 }
                  cardWidth={ '100%' }
                  cardImage={ prop.cardImage }
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