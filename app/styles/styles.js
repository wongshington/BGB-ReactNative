import { StyleSheet } from "react-native";

export const layoutStyles = StyleSheet.create({
  backgroundLayout: {
    flex: 1,
    backgroundColor: "#383838"
  } 
})
export const loginOptionsStyles = StyleSheet.create({

  font: {
    fontFamily: "System"
  },

  loginLayoutCentering: {
    justifyContent: "center",
    alignItems: "center"
  },

  contentContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: 270,
    height:461,
  },
  
  circleElementTitleContainer: {
    width: 174,
    height: 193,
    alignItems: "center",
    justifyContent: "space-between"
  },

  circleElement: {
    width: 96,
    height: 96,
    borderRadius: 96/2,
    backgroundColor: "#C4C4C4",
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
    color: "#FFFFFF",
    fontWeight: "bold"
  },

  sessionsContainer: {
    justifyContent: "space-between",
    width: 270,
    height: 218,
    alignItems: "center",
  },

  sessionsButtonContainer:{
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
    backgroundColor: "#C4C4C4",
  },

  sessionsButtonGoogle: {
    backgroundColor: "#BC3535"
  },

  sessionsButtonFacebook: {
    backgroundColor: "#4C55AB"
  },

  sessionEmailText: {
    fontSize: 21,
    color: "black",
  },

  sessionGoogleText: {
    fontSize: 21,
    color: "#FFFFFF"
  },

  sessionFacebookText: {
    fontSize: 21,
    color: "#FFFFFF"
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
    color: "#FFFFFF",
  }

});
