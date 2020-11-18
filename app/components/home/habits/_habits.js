import { StyleSheet } from "react-native";

export const habitStyles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
  },

  habit: {
    display: "flex",
    flexDirection: "row",
    height: 20,
    width: "100%",
  },
  
  progressBar: {
    height: 30,
    width: 300,
    backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "row",
    // color: "white",
  },
})