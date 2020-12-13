import { StyleSheet } from "react-native";
import { 
    colorWhite, 
} from '../../../../styles/styles';

export const sessionFormStyles = StyleSheet.create({
    main: {
        width: 315,
        height: 394,
    },

    passwordReqContainer: {
        width: 356,
        height: 38,
        marginBottom: 25,
        alignSelf: 'center',
    },

    passwordReqText: {
        fontStyle: 'italic',
        color: "#4D4D4D",
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 19,
        fontWeight: '300',
        fontFamily: 'Avenir'
    },

    form: {
        height: 229,
        marginBottom: 30,
    },

    signinForm: {
        height: 292,
    },

    inputContainer: {
        flexDirection: 'row',
    },

    inputStar: {
        fontSize: 26,
        position: 'absolute',
        top: -10,
    },

    input: {
        width: 313,
        height: 46,
        borderWidth: 1,
        borderColor: "#353434",
        borderStyle: 'solid',
        borderRadius: 7,
        fontSize: 16,
        paddingHorizontal: 26,
        fontStyle: 'italic',
        fontFamily: 'Avenir',
        marginBottom: 15,
    },

    signupInput: {
        marginLeft: 15,
    },

    button: {
        width: 192,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#BEBEBE",
        borderRadius: 10,
        marginBottom: 26,
    },

    activeButton: {
        backgroundColor: '#791FEB',
        borderColor: '#B88CF0',
        borderWidth: 2,
    },

    buttonText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        color: colorWhite,
    },

    oAuth: {
        height: 99,
    },

    oAuthTextContainer: {
        width: 286,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    oAuthText: {
        color: "#353434",
        fontSize: 18,
        lineHeight: 21,
        fontStyle: 'italic',
        fontWeight: '300',
        marginBottom: 23,
    },

    socialIconContainer: {
        width: 130,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    },

    socialIcon: {
        resizeMode: 'contain',
        width: 45,
        height: 48,
    },
});

export const additionalInfoStyles = StyleSheet.create({
    main: {
        height: 481,
        marginTop: 4,
    },

    greeting: {
        width: 286,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 36,
    },

    greetingText: {
        fontSize: 18,
        lineHeight: 18,
        fontStyle: 'italic',
        fontWeight: '300',
        color: "#353434",
    },

    button: {
        marginTop: 33,
    },
})
