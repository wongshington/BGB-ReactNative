import { StyleSheet } from "react-native";
import { windowWidth } from "../../../styles/styles";

export const cardStyles = StyleSheet.create({
 main: {
  //  height: 200, 
  //  width: windowWidth - 60,
   marginTop: 10, 
  //  marginBottom: 10,
  //  marginLeft: 30,
  //  marginRight: 30,
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
  //  height: 200,
  },

  button: {
    position: 'absolute',
    top: 10,
    right: 10,
    transform: [{rotate: "30deg"}],
  },

  title: {
    // fontStyle: 'normal',
    // fontWeight: 'normal',
    fontSize: 21,
    lineHeight: 25,
    color: '#ffffff',
  },

  content: {
    // fontStyle: 'normal',
    // fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#dbd3f9',
  },
})