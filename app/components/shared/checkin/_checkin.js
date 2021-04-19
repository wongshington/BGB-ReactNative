import { StyleSheet } from "react-native";
import { 
  colorLightgray, 
  colorMedGreen, 
  colorPurple, 
  windowHeight 
} from '../../../styles/styles';

export const checkinStyles = StyleSheet.create({
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
    color: colorLightgray,
    margin: 25,
    marginBottom: 40,
  },

  text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: colorLightgray,
    margin: 25,
  },

  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
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