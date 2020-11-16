import { StyleSheet } from "react-native";
import { colorGray, colorWhite } from "../../../styles/styles";

export const historyStyles = StyleSheet.create({
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: colorGray,
    padding: 20,
    
  },

  dateText: {
    fontSize: 20,
    color: colorWhite,
    fontWeight: 500,
    height: 25,
    display: "flex",
    alignItems: "flex-end",
  },

  historyText: {
    fontSize: 15,
    color: colorWhite,
    marginLeft: 5,
    height: 25,
    display: "flex",
    alignItems: "flex-end",
  }
});