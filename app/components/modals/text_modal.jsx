import React from 'react'
import { Text, View, Image, ImageBackground } from "react-native";
import { layoutStyles, loginOptionsStyles, modalStyles } from "../../styles/styles";

const TextModal = ({text = ["An unexpected error has occured"]}) => {
  //  

  const errorMessages = text.map((err, i) => <Text key={i + text} style={modalStyles.textItem}>{err}</Text> )
  return (
		<View
			style={[
				layoutStyles.backgroundLayout,
				loginOptionsStyles.loginLayoutCentering,
			]}
		>
			<View style={loginOptionsStyles.contentContainer}>
				<ImageBackground
					style={modalStyles.pinkBox}
					source={require("/Users/jwong/Desktop/jesse/BGB-ReactNative/assets/errorModalpink.png")}
				>
					<Image
						style={modalStyles.warningIcon}
						source={require("/Users/jwong/Desktop/jesse/BGB-ReactNative/assets/warningIcon.png")}
					></Image>
          <View style={modalStyles.textBox}>{errorMessages}</View>
				</ImageBackground>

			</View>
		</View>
	); 
}

export default TextModal;
