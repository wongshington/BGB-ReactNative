import { StyleSheet } from "react-native";
import { windowHeight, colorWhite } from "../../../styles/styles";

export const scheduleStyles = StyleSheet.create({
  main: {
    display: "flex",
    backgroundColor: "lightgray",
    padding: 20,
    height: (windowHeight - 240) * .5,
  },

  title: {
    fontSize: 20,
    marginBottom: 10,
  },

  navigationBar: {
    height: 40,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colorWhite,
  },
})