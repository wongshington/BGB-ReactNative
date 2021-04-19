import { StyleSheet } from "react-native";
import { colorWhite } from "../../../styles/styles";

export const listitemStyles = StyleSheet.create({
 main: {
    margin: 10,
    borderRadius: 5,
    height: 75,
  },

  text: {
    color: colorWhite,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 5,
  },

  time: {
    color: colorWhite,
    fontSize: 10,
    fontWeight: "600",
  },
})
