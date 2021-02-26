import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../styles/styles";

export const mapStyles = StyleSheet.create({
  main: {
    height: windowHeight,
    width: windowWidth,
    flex: 1,
  },
  navigation: {
    height: windowHeight,
    width: windowWidth,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  }
});
