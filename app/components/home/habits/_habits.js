import { StyleSheet } from "react-native";

export const habitStyles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
  },

  habit: {
    display: "flex",
    flexDirection: "row",
  },
  
  progressBar: {
    height: 20,
    width: 200,
    backgroundColor: "lightgray",
    color: "white",
  },
})