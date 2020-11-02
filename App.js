import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles"
import {Provider} from 'react-redux'
import Store from "./app/store/store"
import { fetchAllNotes } from "./app/actions/note_actions"
const store = Store()

export default function App() {
  window.store = store 
  window.fetchAllNotes = fetchAllNotes()
  return (
      <Provider store={store}>
        <View>
          <Text>
            this is a banana!!!!
          </Text>
        </View>
      </Provider>
    );
}

