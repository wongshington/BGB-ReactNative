import React from "react";
import { historyStyles } from "./_history";
import { Card, Title, Paragraph } from 'react-native-paper';

const HistoryComponent = () => {
  const historyDate = "July 25"
  const historyText = "This is history that happened on this day";

  return (
    <Card>
    <Card.Content>
      <Title style={ historyStyles.title }>{ historyDate }</Title>
      <Paragraph>{ historyText }</Paragraph>
    </Card.Content>
  </Card>
  )
}

export default HistoryComponent;