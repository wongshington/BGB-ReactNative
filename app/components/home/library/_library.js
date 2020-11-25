import { StyleSheet, Dimensions } from "react-native";
import { colorLightgray, colorWhite, windowWidth } from "../../../styles/styles";

export const libraryStyles = StyleSheet.create({
  main: {
    flex: 4,
    backgroundColor: colorWhite,
    padding: 20,
  },

  titleText: {
    fontSize: 30,
  },

  scrollView: {
    marginTop: 20,
  },

  libraryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    
  },

  libraryElement: {
    backgroundColor: colorLightgray,
    width: windowWidth/4.3,
    height: windowWidth/4.3,
    margin: 10,
  },
});
