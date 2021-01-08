import React from 'react';
import { View, Text } from 'react-native';
import { emailAuthStyles } from '../_email_auth';

const NavBar = ({ signupActive, signinActive, activateSignup, activateSignin }) => {

    return (
        <View style={emailAuthStyles.navBar}>
            <Text
                onPress={activateSignup}
                style={[emailAuthStyles.navBarText, emailAuthStyles[signupActive]]}
            >
                SIGN UP
            </Text>

            <Text
                onPress={activateSignin}
                style={[emailAuthStyles.navBarText, emailAuthStyles[signinActive]]}
            >
                LOG IN
            </Text>
        </View>
    );
};

export default NavBar;