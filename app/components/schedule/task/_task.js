import { StyleSheet } from "react-native";

export const taskStyles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  task: {
    fontSize: 15,
  },

  checkbox: {
    marginRight: 10,
  },
})