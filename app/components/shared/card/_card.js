import { StyleSheet } from "react-native";
import { colorLightPurple, colorWhite } from "../../../styles/styles";

export const cardStyles = StyleSheet.create({
 main: {
   marginTop: 10, 
   borderRadius: 10,
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.3,
   shadowRadius: 2,
   elevation: 2,
   position: 'relative',
  },

  layout: {
   display: 'flex',
   justifyContent: 'center',
   height: '100%',
   minWidth: '100%',
  },

  link: {
    width: '100%',
  },

  title: {
    fontSize: 21,
    lineHeight: 25,
    color: colorWhite,
  },

  content: {
    fontSize: 16,
    lineHeight: 19,
    color: colorLightPurple,
  },

  background: {
    overflow: 'hidden', 
    width: '100%', 
    position: 'absolute'
  },
})