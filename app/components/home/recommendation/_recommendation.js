import { StyleSheet } from "react-native";
import { colorLightgray, colorGray } from "../../../styles/styles";

export const recommendationStyles = StyleSheet.create({
  main: {
    flex: 3,
    backgroundColor: colorLightgray,
    padding: 20,
  },

  title: {
    color: colorGray,
    marginBottom: 20,
  },

  container: {
    margin: 10,
  },

  card: {
    margin: 10,
    padding: 10,
  },
});
