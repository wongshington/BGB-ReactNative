import { StyleSheet } from "react-native";
import { colorGray, colorDarkgray, colorLightPurple, windowHeight, colorDarkPurple } from "../../styles/styles";

export const guideStyles = StyleSheet.create({

  main: {
    padding: 20,
    height: windowHeight - 400,
  },

  image: {
    width: '100%', 
    height: 200, 
    resizeMode: 'cover',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: colorDarkgray,
    marginBottom: 10,
  },

  videoTitle: {
    color: colorGray,
    fontSize: 15,
    fontWeight: "700",
    marginRight: 15,
    textTransform: 'uppercase',
    paddingLeft: 10,
  },

  videoContent: {
    color: colorGray,
    fontSize: 12,
  },

  videoInfo: {
    display: 'flex',
    flexDirection: 'row',
  },

  videoContainer: {
    marginBottom: 10,
  },

  text: {
    color: colorGray,
    fontSize: 12,
  },

  description: {
    fontWeight: '300',
    fontStyle: 'italic',
    color: colorDarkgray,
    marginBottom: 25,
  },

  divider: {
    borderBottomColor: colorLightPurple,
    borderBottomWidth: 2,
    marginBottom: 10,
  },
})
