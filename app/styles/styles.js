import { Dimensions, StyleSheet } from "react-native";

// Window dimensions
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

// Universal color variables
export const colorGray = "#979191";
export const colorLightgray = "#c4c4c4";
export const colorWhite = "#fff";

export const layoutStyles = StyleSheet.create({
	backgroundLayout: {
		flex: 1,
		backgroundColor: "#383838",
	},
});

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

export const loginOptionsStyles = StyleSheet.create({
	font: {
		fontFamily: "System",
	},

	loginLayoutCentering: {
		justifyContent: "center",
		alignItems: "center",
	},

	contentContainer: {
		alignItems: "center",
		justifyContent: "space-between",
		width: 270,
		height: 461,
	},

	circleElementTitleContainer: {
		width: 174,
		height: 193,
		alignItems: "center",
		justifyContent: "space-between",
	},

	circleElement: {
		width: 96,
		height: 96,
		borderRadius: 96 / 2,
		backgroundColor: colorLightgray,
	},

	titleContainer: {
		width: 174,
		height: 84,
		justifyContent: "center",
		alignItems: "center",
	},

	Title: {
		fontSize: 72,
		fontStyle: "italic",
		color: colorWhite,
		fontWeight: "bold",
	},

	sessionsContainer: {
		justifyContent: "space-between",
		width: 270,
		height: 218,
		alignItems: "center",
	},

	sessionsButtonContainer: {
		height: 170,
		width: 270,
		justifyContent: "space-between",
		alignItems: "center",
	},

	sessionsButtonLayout: {
		width: 270,
		height: 48,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},

	sessionsButtonEmail: {
		backgroundColor: colorLightgray,
	},

	sessionsButtonGoogle: {
		backgroundColor: "#BC3535",
	},

	sessionsButtonFacebook: {
		backgroundColor: "#4C55AB",
	},

	sessionEmailText: {
		fontSize: 21,
		color: "black",
	},

	sessionGoogleText: {
		fontSize: 21,
		color: colorWhite,
	},

	sessionFacebookText: {
		fontSize: 21,
		color: colorWhite,
	},

	redirectLink: {
		width: 245,
		height: 28,
		justifyContent: "center",
		alignItems: "center",
	},

	redirectLinkText: {
		fontWeight: "300",
		fontSize: 21,
		fontStyle: "italic",
		color: colorWhite,
	},
});
