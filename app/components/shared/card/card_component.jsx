import * as React from 'react';
import { Button, IconButton, Card, Title, Paragraph } from 'react-native-paper';
import { cardStyles } from './_card';

const CardComponent = ({ navigation, title, content, cardHeight, cardWidth }) => (
  <Card
    style={ [
      cardStyles.main, 
      {height: cardHeight, width: cardWidth}
    ] }>
     {/* <IconButton
        style={ cardStyles.button } 
        icon="pin"
        size={ 35 }
        mode="text" 
        color="#dcdef4"
        onPress={ () => navigation.navigate('Home') }
      /> */}
    <Card.Actions>
      <Button
        style={ cardStyles.layout } 
        onPress={ 
          () => navigation.navigate('Infopage', {topic: title}) 
        }>
          <Card.Content>
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