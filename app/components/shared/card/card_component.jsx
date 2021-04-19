import * as React from 'react';
import { ImageBackground } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { cardStyles } from './_card';

const CardComponent = ({ 
  navigation, 
  title, 
  content, 
  cardHeight, 
  cardWidth, 
  cardImage, 
  guide 
}) => (
  <Card
    style={ [
      cardStyles.main, 
      {height: cardHeight, width: cardWidth},
    ] }>
    <ImageBackground 
      style={ [cardStyles.background, {height: cardHeight}] } 
      imageStyle={ {borderRadius: 10} }
      source={ cardImage } 
      resizeMode="cover"
    />
    <Card.Actions>
      <Button
        style={ cardStyles.link } 
        onPress={ guide ? 
          () => navigation.navigate('Guide', {guide: title}) :
          () => navigation.navigate('Infopage', {topic: title}) 
        }>
        <Card.Content style={ cardStyles.layout }>
          <Title style={ cardStyles.title }>{ title }</Title>
          <Paragraph style={ cardStyles.content }>
            { content }
          </Paragraph>
        </Card.Content>
      </Button>
    </Card.Actions>
  </Card>
);

export default CardComponent;