import { StyleSheet } from "react-native";
import { colorLightgray } from "../../../styles/styles";

export const feelingButtonStyles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  text: {
    color: colorLightgray,
    fontSize: 14,
    margin: 5,
  },
});