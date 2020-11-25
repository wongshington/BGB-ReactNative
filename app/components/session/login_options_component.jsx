import React from "react";
import { Text, View } from "react-native";
import { layoutStyles, loginOptionsStyles } from "../../styles/styles";

const LoginOptionsComponent = () => {
  return(
    <View style={[layoutStyles.backgroundLayout,loginOptionsStyles.loginLayoutCentering]}>
      <View style={loginOptionsStyles.contentContainer}>
        <View style={loginOptionsStyles.circleElementTitleContainer}> 
          <View style={loginOptionsStyles.circleElement}>

          </View>

          <View style={loginOptionsStyles.titleContainer}>
            <Text style={[loginOptionsStyles.Title,loginOptionsStyles.font]}>
              BGB
            </Text>
          </View>
        </View>

        <View style={loginOptionsStyles.sessionsContainer}>
          <View style={loginOptionsStyles.sessionsButtonContainer}>
            <View style={[loginOptionsStyles.sessionsButtonLayout, loginOptionsStyles.sessionsButtonEmail]}>
              <Text style={[loginOptionsStyles.sessionEmailText,loginOptionsStyles.font]}>
                Sign up with email
              </Text>
            </View>
            <View style={[loginOptionsStyles.sessionsButtonLayout, loginOptionsStyles.sessionsButtonGoogle]}>
              <Text style={[loginOptionsStyles.sessionGoogleText,loginOptionsStyles.font]}>
                Sign up with Google
              </Text>
            </View>
            <View style={[loginOptionsStyles.sessionsButtonLayout, loginOptionsStyles.sessionsButtonFacebook]}>
              <Text style={[loginOptionsStyles.sessionFacebookText,loginOptionsStyles.font]}>
                Sign up with Facebook
              </Text>
            </View>
          </View>

          <View style={loginOptionsStyles.redirectLink}>
              <Text style={[loginOptionsStyles.redirectLinkText,loginOptionsStyles.font]}>
                Have an account? Log in
              </Text>
          </View>
        </View>
      </View>
      </View>
  )
}

export default LoginOptionsComponent
