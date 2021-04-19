import * as React from 'react';
import { Image, Text, View, ScrollView } from "react-native";

import ToolbarComponent from '../shared/toolbar/toolbar_component';
import HeaderComponent from '../shared/header/header_component';
import ListItemComponent from '../shared/list_item/list_item_component';
import { guideStyles } from './_guide';

// TODO: remove this once we have backend implemented
const fakeVideos = [
  {
    title: 'how to breathe', 
    content: 'breathing is vital in meditative practice', 
    length: '4 min',
    locked: false,
  },
  {
    title: 'center yourself', 
    content: 'control your emotions and moods', 
    length: '4 min',
    locked: true,
  },
  {
    title: 'practice mindfulness', 
    content: 'be present wherever you are', 
    length: '4 min',
    locked: true,
  },
  {
    title: 'let go', 
    content: 'let go of stress and barriers in your way', 
    length: '4 min',
    locked: true,
  },
  {
    title: 'continuing your practice', 
    content: 'incorporate meditation in your life', 
    length: '4 min',
    locked: true,
  },
];

const guides = {
  'Meditate': {
    title: 'How to Meditate', 
    description: "Meditation might be intimidating at first, but we" +
    "promise it's easy! Just take a breath, check in, and follow" +
    "along with the videos. Follow the guide to get started.",
  },
  'Breathe': {
    title: 'Learn to Breathe', 
    description: "Meditation might be intimidating at first, but we" + 
    "promise it's easy! Just take a breath, check in, and follow" + 
    "along with the videos. Follow the guide to get started.",
  },
}

const GuideComponent = ({ navigation, route }) => {
  const headerTitle = "";
  const videos = fakeVideos;

  return(
  <View>
    <HeaderComponent 
      title={ headerTitle }
      navigation={ navigation }
    >
    </HeaderComponent>
    <Image 
      style={ guideStyles.image }
      source={ require("../../../assets/meditation.png") }></Image>
    <ScrollView style={ guideStyles.main }>
      <Text style={ guideStyles.title }>
        { guides[route.params.guide].title }
      </Text>
      <View style={ guideStyles.divider }>
        <Text style={ guideStyles.description }>
          { guides[route.params.guide].description } 
        </Text>
      </View>
      
      {videos.map((video, key) => {
        return (
          <View style={ guideStyles.videoContainer } key={ key }>
            <View style={ guideStyles.videoInfo }>
              <Text style={ guideStyles.videoTitle }>
                Video { key + 1 }
              </Text>
              <Text style={ guideStyles.videoContent }>
                { video.content }
              </Text>
            </View>
            <ListItemComponent
              navigation={ navigation }
              title={ video.title }
              description={ video.length }
              locked={ video.locked }>
            </ListItemComponent>
          </View>
        );
      })}

    </ScrollView>
    <ToolbarComponent navigation={ navigation }></ToolbarComponent>
  </View>
  )
}

export default GuideComponent;