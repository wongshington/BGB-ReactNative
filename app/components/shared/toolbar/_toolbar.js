import { StyleSheet } from "react-native";
import { colorWhite } from "../../../styles/styles";
export const toolbarStyles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: 75,
    backgroundColor: colorWhite,
  },
});