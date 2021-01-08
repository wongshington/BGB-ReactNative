import { StyleSheet } from "react-native";
import { colorLightgray } from "../../../styles/styles";

export const toolbarStyles = StyleSheet.create({
  main: {
    backgroundColor: colorLightgray,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  homeLink: {
    position: "absolute",
    left: "46.62%",
  },
  
  scheduleLink: {
    margin: 30,
  },
});