import { StyleSheet } from "react-native";
import { colorWhite, windowHeight } from '../../styles/styles';

export const infoStyles = StyleSheet.create({
  main: {
    backgroundColor: colorWhite,
    height: windowHeight - 200,
  },

  scrollview: {
    display: 'flex', 
    alignItems: 'center',
  },
  
  text: {
    fontStyle: 'italic',
    fontWeight: '300',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#444141',
    margin: 40,
    marginTop: 0,
  }
})