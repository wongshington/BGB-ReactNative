import { StyleSheet } from "react-native";
import { windowHeight, colorWhite } from "../../../styles/styles";

export const habitStyles = StyleSheet.create({
  main: {
    display: "flex",
    padding: 20,
    height: (windowHeight - 240) * .5,
  },

  title: {
    fontSize: 20,
    marginBottom: 10,
  },

  habit: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  
  linearGradient: {
    flex: 1,
    height: 35,
    marginTop: 10,
    marginBottom: 10,
  },

  progressBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  progressBarText: {
    display: 'flex',
    flexDirection: 'row',
  },

  progressBarButtons: {
    display: 'flex',
    flexDirection: 'row',
  },

  text: {
    color: colorWhite,
    fontSize: 10,
    marginRight: 10,
  },

  icon: {
    marginRight: 10,
    color: colorWhite,
  },
})