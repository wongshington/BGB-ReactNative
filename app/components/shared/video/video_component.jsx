import React from 'react';
import HeaderComponent from '../header/header_component';
import { Text, View } from "react-native";
import { videoStyles } from './_video';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Button } from 'react-native-paper';

const VideoComponent = ({ navigation }) => {
  const videoID = 'QK2mtWjtyDU';
  const videoTitle = '10 minute meditation';

  return (
    <View>
      <HeaderComponent 
        title=""
        navigation={ navigation }
      >
      </HeaderComponent>
      <View style={ videoStyles.main }>
        <Text style={ videoStyles.text }>
          Daily Videos
        </Text>
        <Text style={ videoStyles.textLarge }>
          { videoTitle }
        </Text>
        <YoutubePlayer
          height={ 300 }
          width={ 300 }
          play={ true }
          videoId={ videoID }
        />
        <Button 
          mode="contained"
          style={ videoStyles.continue } 
          labelStyle={ videoStyles.labelStyle }
          onPress={ () => navigation.navigate('Checkin') }>
            Done
        </Button>
      </View>
    </View>
  );
};

export default VideoComponent;