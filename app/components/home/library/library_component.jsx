import React from "react";
import { Text, View } from "react-native";
import { windowWidth } from "../../../styles/styles";
import GridComponent from "../../shared/grid/grid_component";
import { libraryStyles } from "./_library";

// TODO: remove this once we have backend implemented
const fakeLibrary = [
  {
    title: 'Hair Care', 
    content: 'thing 1', 
    image: require("../../../../assets/meditation.png")
  },
  {
    title: 'Hair Care', 
    content: 'thing 2', 
    image: require("../../../../assets/meditation.png"),
  },
  {
    title: 'Hair Care', 
    content: 'thing 3', 
    image: require("../../../../assets/meditation.png"),
  },
  {
    title: 'Hair Care', 
    content: 'thing 4', 
    image: require("../../../../assets/meditation.png"),
  },
  {
    title: 'Hair Care', 
    content: 'thing 5', 
    image: require("../../../../assets/meditation.png"),
  },
  {
    title: 'Hair Care', 
    content: 'thing 6', 
    image: require("../../../../assets/meditation.png"),
  },
  {
    title: 'Hair Care', 
    content: 'thing 7', 
    image: require("../../../../assets/meditation.png"),
  },
  {
    title: 'Hair Care', 
    content: 'thing 8', 
    image: require("../../../../assets/meditation.png"),
  },
  {
    title: 'Hair Care', 
    content: 'thing 9', 
    image: require("../../../../assets/meditation.png"),
  },
];

const LibraryComponent = ({ navigation }) => {
  return (
    <View style={ libraryStyles.main }>
      <Text style={ libraryStyles.titleText }>My Library</Text>
      <GridComponent 
        elements={ fakeLibrary }
        cardHeight={ windowWidth/4 }
        cardWidth={ windowWidth/4 }
        navigation={ navigation }
      >
      </GridComponent>
    </View>
  )
}

export default LibraryComponent;