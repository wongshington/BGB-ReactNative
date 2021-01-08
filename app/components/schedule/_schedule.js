import { StyleSheet } from "react-native";
import { windowHeight } from "../../styles/styles";

export const scheduleStyles = StyleSheet.create({
  main: {
    display: "flex",
    height: "100%",
  },

  mainList: {
    padding: 20,
    height: windowHeight - 240,
  },

  time: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
  },
})