import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
	modalContainer: {
		position: "absolute",
		width: "100%",
	},
	modalShade: {
		position: "absolute",
		width: "100%",
		height: "100%",
		backgroundColor: "#5F5F5F",
		opacity: "90%",
		zIndex: -1,
	},
	pinkBox: {
		width: 200,
		height: 160,
		display: "flex",
		alignItems: "center",
		position: "relative",
		top: "30%",
	},
	warningIcon: {
		width: 50,
		height: 50,
		top: "12%",
	},
	textBox: {
		fontSize: 10,
		marginTop: 45,
		textAlign: "center",
		width: "80%",
	},
	textItem: {
		color: "#4D4D4D",
		fontStyle: "italic",
		fontFamily: "Avenir",
	},
});
