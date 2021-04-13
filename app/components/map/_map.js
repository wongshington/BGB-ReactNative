
import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../styles/styles";

export const mapStyles = StyleSheet.create({
    main: {
        height: windowHeight,
        width: windowWidth,
        flex: 1,
    },
    navigation: {
        height: windowHeight,
        width: windowWidth,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
    },
    card: {
        display: "flex",
        justifyContent: "row",


    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {

        // vertical padding + font size from searchIcon



    },

    search: {
        color: 'systemColorWhite',
        backgroundColor:'white',
        justifyContent:"center",

    }

});