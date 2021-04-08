import { StyleSheet } from "react-native";
import { windowWidth } from "../../../styles/styles";

export const cardStyles = StyleSheet.create({
 main: {
   marginTop: 10, 
   borderRadius: 10,
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.3,
   shadowRadius: 2,
   elevation: 2,
   backgroundColor: '#8470D3',
   position: 'relative',
  },

  layout: {
   display: 'flex',
   justifyContent: 'center',
   height: '100%',
   width: '100%',
  },

  button: {
    position: 'absolute',
    top: 10,
    right: 10,
    transform: [{rotate: "30deg"}],
  },

  link: {
    width: '100%',
  },

  title: {
    fontSize: 21,
    lineHeight: 25,
    color: '#ffffff',
  },

  content: {
    fontSize: 16,
    lineHeight: 19,
    color: '#dbd3f9',
  },
})