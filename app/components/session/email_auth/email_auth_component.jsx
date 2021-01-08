import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { emailAuthStyles } from './_email_auth';
import NavBar from './navbar/nav_bar_component';
import SignupFormComponent from './session_forms/signup_form_component';
import SigninFormComponent from './session_forms/signin_form_component';
import AdditionalInfoComponent from './session_forms/additional_info_component';

const background = require('../../../../assets/auth_background.png');

const EmailAuthComponent = ({ match: { params }}) => {
    const [formType, setFormType] = useState(params.formType);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        dob: '',
        city: ''
    });

    function update(field) {
        return (value) => setUser({ ...user, [field]: value });
    }

    function activeButton(user, properties) {
        for (let i = 0; i < properties.length; i++) {
            if (user[properties[i]] === '') return '';
        }
        return 'activeButton';
    }

    function renderNavBar() {
        if (formType !== 'additionalInfo') {
            return (
                <NavBar
                    signupActive={signupActive}
                    signinActive={signinActive}
                    activateSignup={() => setFormType('signup')}
                    activateSignin={() => setFormType('signin')}
                />
            );
        }
        return null;
    }

    let signupActive, signinActive, form, backBtn;
    let line = <View style={emailAuthStyles.line}></View>;

    switch (formType) {
        case 'signup':
            signupActive = 'active';
            form = <SignupFormComponent 
                nextForm={() => setFormType('additionalInfo')}
                user={user}
                update={update}
                activeButton={activeButton}
            />;
            break;
        case 'additionalInfo':
            form = <AdditionalInfoComponent 
                user={user}
                update={update}
                nextForm={() => setFormType('signup')}
                activeButton={activeButton}
            />;
            line = null;

            backBtn = <TouchableWithoutFeedback onPress={() => setFormType('signup')}>
                        <View style={emailAuthStyles.backBtn}></View>
                    </TouchableWithoutFeedback>
            
            break;
        case 'signin':
            signinActive = 'active';
            form = <SigninFormComponent activeButton={activeButton}/>;
            break;                       
    }

    return (
        <ImageBackground source={background} style={emailAuthStyles.main}>
            <View style={emailAuthStyles.contentContainer}>
                <View style={emailAuthStyles.titleContainer}>
                    {backBtn}
                    <Text style={emailAuthStyles.titleText}>BGB</Text>
                </View>

                {renderNavBar()}
                {line}
                {form}
            </View>
        </ImageBackground>
    );
}

export default EmailAuthComponent;