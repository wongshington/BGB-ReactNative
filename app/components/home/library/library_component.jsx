import React from "react";
import { ScrollView, Text, View } from "react-native";
import { libraryStyles } from "./_library";

// TODO: remove this once we have backend implemented
const fakeLibrary = [
  {name: 'saved item 1'},
  {name: 'saved item 2'},
  {name: 'saved item 3'},
  {name: 'saved item 4'},
  {name: 'saved item 5'},
  {name: 'saved item 6'},
  {name: 'saved item 7'},
  {name: 'saved item 8'},
];

const LibraryComponent = () => {
  return (
    <View style={libraryStyles.main}>
      <Text style={libraryStyles.titleText}>My Library</Text>
      <ScrollView horizontal={ false } 
                  showsVerticalScrollIndicator={ false }
                  style={libraryStyles.scrollView}>
        
        <View style={libraryStyles.libraryContainer}>
          {fakeLibrary.map((_, key) => {
            return (
              <View style={libraryStyles.libraryElement} 
                    key={key}>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default LibraryComponent