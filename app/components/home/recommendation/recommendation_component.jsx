import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { recommendationStyles } from "./_recommendation";
import { windowWidth } from "../../../styles/styles";

const fakeRecs = [
  {name: 'recommendation 1'},
  {name: 'recommendation 2'},
  {name: 'recommendation 3'},
  {name: 'recommendation 4'},
  {name: 'recommendation 5'},
  {name: 'recommendation 6'},
  {name: 'recommendation 7'},
  {name: 'recommendation 8'},
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
      <View style={recommendationStyles.main}>
        <Text style={recommendationStyles.recommendationTitle}>
          Your Recommendations
        </Text>
        <ScrollView horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={this.handleScroll}
                    scrollEventThrottle={16}
                    centerContent
                    style={recommendationStyles.recommendationContainer}>
          {fakeRecs.map((_, key) => {
            return (
              <View style={[
                      key === this.state.currentEl ?
                      recommendationStyles.currentRecommendationElement 
                      : recommendationStyles.recommendationElement
                    ]}
                    key={key}>
              </View>
            );
          })}
        </ScrollView>
      </View>
    )
  }
}
