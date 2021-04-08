import * as React from 'react';
import { List } from 'react-native-paper';
import { listitemStyles } from './_list_item';

const ListItemComponent = ({ navigation, title, description }) => (
  <List.Item
    style={ listitemStyles.main } 
    titleStyle={ listitemStyles.text }
    descriptionStyle={ listitemStyles.text }
    title={ title }
    description={ description }
    right={ 
      props => 
        <List.Icon {...props} icon="heart" style={ listitemStyles.text }
      /> }
    onPress={ () => navigation.navigate('Checkin') }
  />
);
  
export default ListItemComponent;