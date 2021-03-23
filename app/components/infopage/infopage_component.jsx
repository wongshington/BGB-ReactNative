import * as React from 'react';
import { Text, View } from "react-native";
import { infopageStyles } from './_infopage';

import { windowWidth } from '../../styles/styles';
import ToolbarComponent from '../shared/toolbar/toolbar_component';
import HeaderComponent from '../shared/header/header_component';
import CardComponent from '../shared/card/card_component';
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
      <CardComponent
        navigation={ navigation }
        title="How to Meditate"
        content="a quick and easy meditation guide"
        cardWidth={windowWidth/3}
        cardHeight={windowWidth/3}
      >
      </CardComponent>
      <CardComponent
        navigation={ navigation }
        title="How to Meditate"
        content="a quick and easy meditation guide"
        cardWidth={windowWidth/3}
        cardHeight={windowWidth/3}
      >
      </CardComponent>

    </View>
    <ToolbarComponent navigation={ navigation }></ToolbarComponent>
  </View>
);

export default InfopageComponent;