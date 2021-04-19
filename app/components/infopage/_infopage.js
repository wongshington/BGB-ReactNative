import { StyleSheet } from "react-native";
import { colorWhite, windowHeight } from '../../styles/styles';

export const infopageStyles = StyleSheet.create({
  main: {
    height: windowHeight - 200,
    backgroundColor: colorWhite,
  },

  font: {
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
  },

  text: {
    fontWeight: '300',
    fontStyle: 'italic',
    color: '#444141',
    marginTop: 0,
  },

  header: {
    color: '#9A9A9A',
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  guideTitle: {
    textAlign: 'left',
  },

  guides: {
    marginLeft: 30, 
    marginRight: 30, 
    display: 'flex', 
  },

  video: {
    margin: 10, 
    marginBottom: 0, 
    display: 'flex', 
    alignItems: 'center',
  },

  image: {
    width: 120, 
    height: 60, 
    position: 'absolute', 
    top: 20, 
    right: 60, 
    resizeMode: 'contain'
  },
})