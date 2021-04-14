import * as React from 'react';
import { Button } from 'react-native-paper';
import { Text, View } from "react-native";
import { Icon } from "react-native-elements"
import { feelingButtonStyles } from './_feeling_button';

const FeelingButtonComponent = ({ label }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Button
      mode="text"
      onPress={ () => setChecked(!checked) }
    >
      <View style={ feelingButtonStyles.buttonContainer }>
        <Icon 
          name="circle" 
          type="material-community" 
          size={ 55 } 
          color={ checked ? '#544799' : "#c4c4c4" } 
        />
        <Text style={ feelingButtonStyles.text }>{ label }</Text>
      </View>
    </Button>
  )
  };

export default FeelingButtonComponent;