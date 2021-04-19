import { StyleSheet } from "react-native";
import { colorGray, colorWhite } from "../../../styles/styles";

export const headerStyles = StyleSheet.create({
  main: {
    backgroundColor: colorWhite,
    height: 75,
  },
  
  title: {
    fontStyle: 'normal', 
    fontWeight: 'bold',
    fontSize: 18, 
    lineHeight: 22,
    color: colorGray,
  }
})