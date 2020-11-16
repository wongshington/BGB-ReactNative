import { StyleSheet, Dimensions } from "react-native";

// var width = Dimensions.get('window').width; //full width

export const toolbarStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#c4c4c4",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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