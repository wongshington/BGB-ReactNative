import React from "react";
import { Appbar } from 'react-native-paper';
import { headerStyles } from "./_header";

const HeaderComponent = ({ navigation, title }) => {
  return (
    <Appbar.Header style={ headerStyles.main }>
      <Appbar.BackAction onPress={ () => navigation.goBack() }/>
      <Appbar.Content 
        title={ title }
        titleStyle={ headerStyles.title }
      >
      </Appbar.Content>
    </Appbar.Header>
  )
}

export default HeaderComponent