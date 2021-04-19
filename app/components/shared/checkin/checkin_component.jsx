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

const CheckinComponent = ({ navigation }) => {
  const clicked = true;
  const headerTitle = "";

  return (
    <View>
      <HeaderComponent 
        title={ headerTitle }
        navigation={ navigation }
      >
      </HeaderComponent>
      <View style={ checkinStyles.main }>
        <Text style={ checkinStyles.text }>
          Check in with yourself
        </Text>
        <Text style={ checkinStyles.textLarge }>
          How do you feel right now?
        </Text>
        <View style={ checkinStyles.buttons }>
            {feelings.map((label, key) => {
              return (
                <View>
                  <FeelingButtonComponent
                    label={ label }
                    key={ key }
                  >
                  </FeelingButtonComponent>
                </View>
              );
            })}
        </View>
        <Button 
          mode="contained"
          disabled={ !clicked }
          style={ checkinStyles.continue } 
          labelStyle={ checkinStyles.labelStyle }
          onPress={ () => navigation.navigate('Video') }>
            Continue
        </Button>
      </View>
    </View>
  );
};

export default CheckinComponent;