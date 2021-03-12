import React from 'react'
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import { Link } from 'react-router-native';
import { sessionFormStyles } from './_session_form';
import { colorGray } from '../../../../styles/styles';

const facebookIcon = require('../../../../../assets/facebook_icon.png');
const googleIcon = require('../../../../../assets/google_icon.png');

const SignupFormComponent = ({ nextForm, user, update, activeButton }) => {
    const properties = ['name', 'email', 'password', 'confirm_password'];

    return (
        <View style={sessionFormStyles.main}>

            <View style={sessionFormStyles.passwordReqContainer}>
                <Text style={sessionFormStyles.passwordReqText}>
                    password must be at least 8 characters long, include one 
                    uppercase letter, one special character, and one number
                </Text>
            </View>

            <View style={sessionFormStyles.form}>

                <View style={sessionFormStyles.inputContainer}>
                    <Text style={sessionFormStyles.inputStar}>*</Text>
                    <TextInput 
                        placeholder='full name'
                        placeholderTextColor={"#353434"}
                        placeholderStyle={{ fontStyle: 'italic' }}
                        value={user.name}
                        onChangeText={update('name')}
                        style={[sessionFormStyles.input, sessionFormStyles.signupInput]}
                    /> 
                </View>

                <View style={sessionFormStyles.inputContainer}>
                    <Text style={sessionFormStyles.inputStar}>*</Text>
                    <TextInput 
                        placeholder='email address'
                        placeholderTextColor={"#353434"}
                        value={user.email}
                        onChangeText={update('email')}
                        style={[sessionFormStyles.input, sessionFormStyles.signupInput]}
                    />
                </View>

                <View style={sessionFormStyles.inputContainer}>
                    <Text style={sessionFormStyles.inputStar}>*</Text>
                    <TextInput 
                        placeholder='password'
                        placeholderTextColor={"#353434"}
                        // secureTextEntry={true}
                        value={user.password}
                        onChangeText={update('password')}
                        style={[sessionFormStyles.input, sessionFormStyles.signupInput]}
                    />
                </View>

                <View style={sessionFormStyles.inputContainer}>
                    <Text style={sessionFormStyles.inputStar}>*</Text>
                    <TextInput 
                        placeholder='confirm password'
                        placeholderTextColor={"#353434"}
                        // secureTextEntry={true}
                        value={user.confirmPassword}
                        onChangeText={update('confirm_password')}
                        style={[sessionFormStyles.input, sessionFormStyles.signupInput]}
                    />
                </View>

            </View>

            <TouchableHighlight onPress={() => nextForm()}>
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
    );
};

export default SignupFormComponent;