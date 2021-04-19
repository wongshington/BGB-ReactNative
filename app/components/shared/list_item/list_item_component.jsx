import * as React from 'react';
import { List } from 'react-native-paper';
import { 
  colorDarkPurple, 
  colorPalePurple, 
  colorMedGray 
} from '../../../styles/styles';
import { listitemStyles } from './_list_item';

const ListItemComponent = ({ navigation, title, description, locked }) => {
  const icon = locked ? 'lock' : 'heart';
  const backgroundColor = locked ? colorPalePurple : colorDarkPurple;

  return (
    <List.Item
      style={ [listitemStyles.main, {backgroundColor: backgroundColor}] } 
      titleStyle={ listitemStyles.text }
      descriptionStyle={ listitemStyles.time }
      title={ title }
      description={ description }
      right={ 
        props => 
          <List.Icon {...props} 
            icon={ icon }
            style={ listitemStyles.text }
            color={ colorMedGray }
        /> }
      onPress={ () => navigation.navigate('Checkin') }
    />
  );
}
  
export default ListItemComponent;