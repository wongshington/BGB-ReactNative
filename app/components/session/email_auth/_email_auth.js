import { StyleSheet } from 'react-native';
import { 
    colorWhite 
} from '../../../styles/styles';

export const emailAuthStyles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },

    contentContainer: {
        alignItems: 'center',
        height: 680,
    },

    titleContainer: {
        width: 174,
        height: 84,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 37,
    },

    titleText: {
        fontSize: 72,
        color: colorWhite,
        lineHeight: 84,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'Avenir',
    },

    navBar: {
        flexDirection: 'row',
        width: 288,
        height: 28,
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    navBarText: {
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        textAlign: 'center',
        color: "#7B7A7A",
        lineHeight: 25,
        fontWeight: 'normal',
        fontSize: 18,
        fontStyle: 'italic',
        fontFamily: 'Avenir',
    },

    active: {
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 33,
        fontStyle: 'normal',
        alignSelf: 'center',
    },

    line: {
        width: 326,
        height: 3,
        backgroundColor: "#7B7A7A",
        marginBottom: 19,
    },

    backBtn: {
        height: 21,
        width: 21,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: colorWhite,
        position: 'absolute',
        left: -76,
        top: 10,
        transform: [{ rotate: '45deg'}],
        padding: 10,
    },
});