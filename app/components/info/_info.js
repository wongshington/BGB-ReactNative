import { StyleSheet } from "react-native";
import { colorWhite, windowHeight } from '../../styles/styles';

export const infoStyles = StyleSheet.create({
  main: {
    backgroundColor: colorWhite,
    height: windowHeight - 200,
  },

  scrollView: {
    display: 'flex', 
    alignItems: 'center',
    margin: 20,
  },
  
  text: {
    fontStyle: 'italic',
    fontWeight: '300',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#444141',
    margin: 20,
    marginTop: 0,
  },

  cardContainer: {
    marginBottom: 20,
  },

  card: {
    height: 100,
  }
})