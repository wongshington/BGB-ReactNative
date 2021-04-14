import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { recommendationStyles } from "./_recommendation";
import { windowWidth } from "../../../styles/styles";
import CardComponent from "../../shared/card/card_component";

// TODO: remove once we get data from DB
const fakeRecs = [
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
  {title: 'Exercise', content: 'This is a description.'},
];

const elWidth = windowWidth / 4.5;

export default class RecommendationComponent extends Component{
  constructor(props) {
    super(props)
    this.state = {
      scrollX: 0,
      currentEl: 1,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  // TODO: this is not ideal. Fix it.
  handleScroll(event) {
    const currentEl = Math.floor(event.nativeEvent.contentOffset.x / elWidth) + 1;
    if (this.state.currentEl !== currentEl){
      this.setState({currentEl: currentEl});
    }
  }

  render() {
    return (
      <View style={ recommendationStyles.main }>
        <Text style={ recommendationStyles.title }>
          Your Recommendations
        </Text>
        <ScrollView 
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={ false }
          onScroll={ this.handleScroll }
          scrollEventThrottle={ 16 }
          centerContent
          style={ recommendationStyles.containter }
        >
          {fakeRecs.map((_, key) => {
            return (
              <View style={ recommendationStyles.container }>
              <CardComponent 
                key={ key } 
                title="Exercise"
                content="descript..."
                cardHeight="100%"
                cardWidth={ windowWidth/4 }
                navigation={ this.props.navigation }
              >
              </CardComponent>
              </View>
            );
          })}
        </ScrollView>
      </View>
    )
  }
}
