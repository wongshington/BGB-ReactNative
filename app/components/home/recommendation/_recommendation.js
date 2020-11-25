import { StyleSheet } from "react-native";
import { colorLightgray, colorGray, windowWidth } from "../../../styles/styles";

export const recommendationStyles = StyleSheet.create({
  main: {
    flex: 3,
    backgroundColor: colorLightgray,
    padding: 20,
  },

  recommendationTitle: {
    color: colorGray,
  },

  recommendationContainer: {
    margin: 10,
  },

  recommendationElement: {
    width: windowWidth/4.5,
    height: '70%',
    margin: 10,
    backgroundColor: colorGray,
  },

  currentRecommendationElement: {
    width: windowWidth/4,
    height: '80%',
    margin: 10,
    backgroundColor: colorGray,
  },
});
