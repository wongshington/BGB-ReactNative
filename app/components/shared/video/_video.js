import * as React from 'react';
import HeaderComponent from '../header/header_component';
import { Text, View } from "react-native";
import { checkinStyles } from './_checkin';
import FeelingButtonComponent from '../feeling_button/feeling_button_component';
import { Button } from 'react-native-paper';

const feelings = [
  'Happy', 
  'Calm', 
  'Tired', 
  'Sad', 
  'Bored', 
  'Angry', 
  'Nervous', 
  'Anxious', 
  'Excited', 
  'Defeated',
];

const CheckinComponent = ({ navigation, title }) => {
  return (
    <View>
      <HeaderComponent 
        title=""
        navigation={ navigation }
      >
      </HeaderComponent>
      <View style={ checkinStyles.main }>
        <Text style={ checkinStyles.text }>
          Daily Videos
        </Text>
        <Text style={ checkinStyles.textLarge }>
          { title }
        </Text>
      </View>
    </View>
  );
};

export default CheckinComponent;