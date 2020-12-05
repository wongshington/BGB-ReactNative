import { StyleSheet } from "react-native";

export const habitStyles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 3,
    padding: 20,
  },

  title: {
    fontSize: "14px",
    marginBottom: 5,
  },

  habit: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  
  progressBar: {
    height: 30,
    // width: "100%",
    backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    
  },

  progressBarText: {
    display: 'flex',
    flexDirection: 'row',
    // color: "white",
  },

  progressBarButtons: {
    display: 'flex',
    flexDirection: 'row',
    // color: "white",
  },

  text: {
    color: '#fff',
    size: 10,
  },

  icon: {
    marginRight: 5,
  },
})