import * as React from 'react';
import { Text, View } from "react-native";
import { infopageStyles } from './_infopage';

import { windowWidth } from '../../styles/styles';
import ToolbarComponent from '../shared/toolbar/toolbar_component';
import HeaderComponent from '../shared/header/header_component';
import GridComponent from '../shared/grid/grid_component';
import ListItemComponent from '../shared/list_item/list_item_component';

const topics = {
  'Meditation': {
    topic: 'Meditation',
    description: 'Sometimes you need to breathe and unwind. Find an everyday medidation video or quick how-to guide',
    title: 'Daily Meditations'
  },
  'Hair Care': {
    topic: 'Hair Care',
    descpription: 'Sometimes you need to breathe and unwind. Find an everyday medidation video or quick how-to guide',
    title: 'Daily Hair Care Routines',
  },
  'Exercise': {
    topic: 'Exercise',
    description: 'Sometimes you need to breathe and unwind. Find an everyday medidation video or quick how-to guide',
    title: 'Daily Exercises',
  },
};

// TODO: remove this once we have backend implemented
const fakeLibrary = [
  {title: 'How to Meditate', content: 'a quick and easy meditation guide"'},
  {title: 'How to Meditate', content: 'a quick and easy meditation guide"'},
];

const InfopageComponent = ({ navigation, route }) => (
  <View>
    <HeaderComponent 
      title={ route.params.topic }
      navigation={ navigation }
    >
    </HeaderComponent>
    <View style={ infopageStyles.main }>
      <Text style={ [infopageStyles.text, infopageStyles.font] }>
        { topics[route.params.topic].description }
      </Text>

      <Text style={ [infopageStyles.header, infopageStyles.font] }>
        Highlighted Video 
      </Text>

      <Text style={ [infopageStyles.header, infopageStyles.font] }>
        { topics[route.params.topic].title } 
      </Text>
      <ListItemComponent
        navigation={ navigation }
        title="10 minute meditation"
        description="5 min">
      </ListItemComponent>
      <ListItemComponent
        navigation={ navigation }
        title="rise and shine"
        description="5 min">
      </ListItemComponent>
      <ListItemComponent
        navigation={ navigation }
        title="unwind tonight"
        description="5 min">
      </ListItemComponent>
      <ListItemComponent
        navigation={ navigation }
        title="let go of stress"
        description="5 min">
      </ListItemComponent>

      <Text style={ [infopageStyles.header, infopageStyles.font] }>
        Guides
      </Text>
      <GridComponent 
        elements={ fakeLibrary }
        cardHeight={ windowWidth/3 }
        cardWidth={ windowWidth/3 }
        navigation={ navigation }
      >
      </GridComponent>
    </View>
    <ToolbarComponent navigation={ navigation }></ToolbarComponent>
  </View>
);

export default InfopageComponent;