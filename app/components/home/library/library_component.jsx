import React from "react";
import { Text, View } from "react-native";
import { windowWidth } from "../../../styles/styles";
import GridComponent from "../../shared/grid/grid_component";
import { libraryStyles } from "./_library";

// TODO: remove this once we have backend implemented
const fakeLibrary = [
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
];

const LibraryComponent = ({ navigation }) => {
  return (
    <View style={ libraryStyles.main }>
      <Text style={ libraryStyles.titleText }>My Library</Text>
      <GridComponent 
        elements={ fakeLibrary }
        cardHeight={ windowWidth/4 }
        cardWidth={ windowWidth/4 }
        cardColor={ "#7d8fd1" }
        navigation={ navigation }
      >
      </GridComponent>
    </View>
  )
}

export default LibraryComponent