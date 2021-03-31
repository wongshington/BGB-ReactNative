import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import { Link } from 'react-router-native';
import { sessionFormStyles } from './_session_form';

const facebookIcon = require('../../../../../assets/facebook_icon.png');
const googleIcon = require('../../../../../assets/google_icon.png');

const SigninFormComponent = ({ activeButton, signin }) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const properties = ['email', 'password'];

    function handleSubmit(e) {
        e.preventDefault();
        signin(user);
    }

    function update(field) {
        return (value) => setUser({ ...user, [field]: value });
    }

    return (
        <View style={sessionFormStyles.main}>

            <View style={[sessionFormStyles.form, sessionFormStyles.signinForm]}>
                <TextInput
                    placeholder='email address'
                    placeholderTextColor={"#353434"}
                    value={user.email}
                    onChangeText={update('email')}
                    style={sessionFormStyles.input}
                />

                <TextInput
                    placeholder='password'
                    placeholderTextColor={"#353434"}
                    value={user.password}
                    onChangeText={update('password')}
                    style={sessionFormStyles.input}
                />

            </View>

            <TouchableHighlight onPress={handleSubmit}>
                <View style={[
                    sessionFormStyles.button, 
                    sessionFormStyles[activeButton(user, properties)]
                ]}>
                    <Text style={sessionFormStyles.buttonText}>CONTINUE</Text>
                </View>
            </TouchableHighlight>

            <View style={sessionFormStyles.oAuth}>
                <View style={sessionFormStyles.oAuthTextContainer}>
                    <Text style={sessionFormStyles.oAuthText}>Sign up with Google or Facebook</Text>
                </View>

                <View style={sessionFormStyles.socialIconContainer}>
                    <Link to='/'>
                        <Image
                            source={facebookIcon}
                            style={sessionFormStyles.socialIcon}
                        />
                    </Link>

                    <Link to='/'>
                        <Image
                            source={googleIcon}
                            style={sessionFormStyles.socialIcon}
                        />
                    </Link>
                </View>
            </View>
        </View>
    )
};

export default SigninFormComponent;