import { StyleSheet } from "react-native";
import { 
  colorMedGreen, 
  colorWhiteSmoke, 
  colorPurple,
  windowHeight, 
} from '../../../styles/styles';

export const videoStyles = StyleSheet.create({
  main: {
    backgroundColor: colorMedGreen,
    height: windowHeight - 100,
    display: 'flex',
    alignItems: 'center',
  },

  textLarge: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 24,
    color: colorWhiteSmoke,
    margin: 25,
    marginBottom: 40,
  },

  text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: colorWhiteSmoke,
    margin: 25,
  },

  continue: {
    margin: 15,
    marginTop: 40,
    borderRadius: 15,
    backgroundColor: colorPurple,
    padding: 5,
  },

  labelStyle: {
    textTransform: 'lowercase',
    textDecorationLine: 'underline',
  },
})