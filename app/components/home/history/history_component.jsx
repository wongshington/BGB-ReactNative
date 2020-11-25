import React from "react";
import { Text, View } from "react-native";
import { historyStyles } from "./_history";

const HistoryComponent = () => {
  return (
    <View style={historyStyles.main}>
      <Text style={historyStyles.dateText}>
        July 25:
      </Text>
      <Text style={historyStyles.historyText}>
        History here
      </Text>
    </View>
  )
}

export default HistoryComponent