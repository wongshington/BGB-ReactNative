import { StyleSheet } from "react-native";
import { colorGray, colorLightgray } from "../../../styles/styles";

export const headerStyles = StyleSheet.create({
  main: {
    backgroundColor: colorLightgray,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 80,
    paddingBottom: 40,
  },

  profileLink: {
    position: "absolute",
    left: 20,
    bottom: 40,
    height: 37,
    width: 37,
    borderRadius: 50,
    backgroundColor: colorGray,
  },

  title: {
    fontSize: 25,
  },
});