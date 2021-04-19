import * as React from 'react';
import { Image, Text, View, ScrollView } from "react-native";
import { infopageStyles } from './_infopage';

import { windowWidth } from '../../styles/styles';
import ToolbarComponent from '../shared/toolbar/toolbar_component';
import HeaderComponent from '../shared/header/header_component';
import GridComponent from '../shared/grid/grid_component';
import ListItemComponent from '../shared/list_item/list_item_component';
import YoutubePlayer from 'react-native-youtube-iframe';

const topics = {
  'Meditation': {
    topic: 'Meditation',
    description: 'Sometimes you need to breathe and unwind. Find an'+
    'everyday medidation video or quick how-to guide',
    title: 'Daily Meditations'
  },
  'Hair Care': {
    topic: 'Hair Care',
    descpription: 'Sometimes you need to breathe and unwind. Find an' + 
    'everyday medidation video or quick how-to guide',
    title: 'Daily Hair Care Routines',
  },
  'Exercise': {
    topic: 'Exercise',
    description: 'Sometimes you need to breathe and unwind. Find an' +
    'everyday medidation video or quick how-to guide',
    title: 'Daily Exercises',
  },
};

const fakeVideos = [
  {
    title: '10 minute meditation', 
    length: '5 min',
    image: require("../../../assets/stress.png"), 
  },
  {
    title: 'rise and shine', 
    length: '5 min',
    image: require("../../../assets/rise.png"),
  },
  {
    title: 'unwind tonight', 
    length: '5 min',
    image: require("../../../assets/unwind.png"),
  },
];

// TODO: remove this once we have backend implemented
const fakeLibrary = [
  {
    title: 'Meditate', 
    content: 'a quick and easy meditation guide',
    image: require("../../../assets/meditation.png"),
  },
  {
    title: 'Breathe', 
    content: 'center your mind and body',
    image: require("../../../assets/meditation.png"),
  },
];

const InfopageComponent = ({ navigation, route }) => {
  const videoID = 'QK2mtWjtyDU';
  const cardSize = windowWidth/2.6;

  return(
    <View>
      <HeaderComponent 
        title={ route.params.topic }
        navigation={ navigation }
      >
      </HeaderComponent>
      <ScrollView style={ infopageStyles.main }>
        <Text style={ [
          infopageStyles.text, 
          infopageStyles.font, 
          {marginBottom: 10}
        ] }>
          { topics[route.params.topic].description }
        </Text>
        <View style={ infopageStyles.video }>
          <Text style={ [
            infopageStyles.header, 
            infopageStyles.font, 
            {marginBottom: 20}
            ] }>
            Highlighted Video 
          </Text>
          <YoutubePlayer
            height={ 200 }
            width={ 250 }
            play={ false }
            videoId={ videoID }
          />
        </View>
        <View style={{margin: 10, marginTop: 0}}>
          <Text style={ [infopageStyles.header, infopageStyles.font] }>
            { topics[route.params.topic].title } 
          </Text>
          {fakeVideos.map((video, key) => {
            return (
              <View key={ key }>
                <ListItemComponent
                  navigation={ navigation }
                  title={ video.title }
                  description={ video.length }>
                </ListItemComponent>
                <Image 
                  source={ video.image }
                  style={ infopageStyles.image }
                >
                </Image>
              </View>
            );
          })}
        </View>
        <View style={ infopageStyles.guides }>
          <Text style={ [infopageStyles.header, infopageStyles.font] }>
            Guides
          </Text>
          <GridComponent 
            elements={ fakeLibrary }
            cardHeight={ cardSize }
            cardWidth={ cardSize }
            navigation={ navigation }
            guide={ true }
          >
          </GridComponent>
        </View>
      </ScrollView>
      <ToolbarComponent navigation={ navigation }></ToolbarComponent>
    </View>
  )
}

export default InfopageComponent;