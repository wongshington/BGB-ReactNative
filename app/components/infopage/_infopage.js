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
    margin: 40,
    marginTop: 0,
  },

  header: {
    color: '#9A9A9A',
    fontWeight: '700',
    textTransform: 'uppercase',
  }
})