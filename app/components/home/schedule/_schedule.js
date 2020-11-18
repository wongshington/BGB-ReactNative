import { StyleSheet } from "react-native";

export const scheduleStyles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    backgroundColor: "lightgray",
    padding: 20,
  },

  title: {
    marginBottom: 10,
  },

  navigationBar: {
    height: 30,
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    margin: 10,
    backgroundColor: "white",
  },
})