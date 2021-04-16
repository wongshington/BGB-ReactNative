import React from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { sessionFormStyles, additionalInfoStyles } from './_session_form';

const AdditionalInfoComponent = ({ user, update, activeButton, signup }) => {
    const properties = ['username', 'date_of_birth', 'city'];

    function handleSubmit() {
        signup(user);
    }

    return (
        <View style={additionalInfoStyles.main}>
            <View style={additionalInfoStyles.greeting}>
                <Text style={additionalInfoStyles.greetingText}>Let's get to know you!</Text>
            </View>

            <View>
                <View style={sessionFormStyles.inputContainer}>
                    <Text style={sessionFormStyles.inputStar}>*</Text>
                    <TextInput
                        placeholder='set a username'
                        placeholderTextColor={"#353434"}
                        placeholderStyle={{ fontStyle: 'italic' }}
                        value={user.username}
                        onChangeText={update('username')}
                        style={[sessionFormStyles.input, sessionFormStyles.signupInput]}
                    /> 
                </View>

                <View style={sessionFormStyles.inputContainer}>
                    <Text style={sessionFormStyles.inputStar}>*</Text>
                    <TextInput
                        placeholder='date of birth'
                        placeholderTextColor={"#353434"}
                        placeholderStyle={{ fontStyle: 'italic' }}
                        value={user.date_of_birth}
                        onChangeText={update('date_of_birth')}
                        style={[sessionFormStyles.input, sessionFormStyles.signupInput]}
                    /> 
                </View>

                <View style={sessionFormStyles.inputContainer}>
                    <Text style={sessionFormStyles.inputStar}>*</Text>
                    <TextInput
                        placeholder='city'
                        placeholderTextColor={"#353434"}
                        placeholderStyle={{ fontStyle: 'italic' }}
                        value={user.city}
                        onChangeText={update('city')}
                        style={[sessionFormStyles.input, sessionFormStyles.signupInput]}
                    /> 
                </View>

                <TouchableHighlight onPress={handleSubmit}>
                    <View style={[
                        sessionFormStyles.button, 
                        additionalInfoStyles.button,
                        sessionFormStyles[activeButton(user, properties)]
                    ]}>
                        <Text style={sessionFormStyles.buttonText}>CONTINUE</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
};

export default AdditionalInfoComponent;
