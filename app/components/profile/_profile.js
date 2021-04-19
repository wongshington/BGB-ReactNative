import { StyleSheet } from "react-native";
import { colorDarkgray, colorWhite, windowHeight } from "../../styles/styles";

export const profileStyles = StyleSheet.create({
  main: {
    display: "flex",
  },

  content: {
    height: windowHeight - 200,
  },

  container: {
    height: "30%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  name: {
    fontWeight: "700",
    fontSize: 28,
  },

  description: {
    margin: 30,
    textAlign: "center",
  },

  tabs: {
    flex: 1,
    backgroundColor: colorWhite,
  },

  gridContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },

  emptyMessage: {
    textAlign: "center",
    fontSize: 14,
    color: colorDarkgray,
    fontStyle: "italic",
    margin: 20,
  },
})