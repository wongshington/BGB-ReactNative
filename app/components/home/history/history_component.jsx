import React from "react";
import { historyStyles } from "./_history";
import { Card, Title, Paragraph } from 'react-native-paper';

const HistoryComponent = () => {
  return (
    <Card>
    <Card.Content>
      <Title style={historyStyles.title}>July 25</Title>
      <Paragraph>This is a bunch of important history</Paragraph>
    </Card.Content>
  </Card>
  )
}

export default HistoryComponent