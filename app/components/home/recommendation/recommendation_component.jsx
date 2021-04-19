import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { recommendationStyles } from "./_recommendation";
import { windowWidth } from "../../../styles/styles";
import CardComponent from "../../shared/card/card_component";

// TODO: remove once we get data from DB
const fakeRecs = [
  {
    title: 'Exercise', 
    content: 'rec 1', 
    image: require( "../../../../assets/plant.png"),
  },
  {
    title: 'Exercise', 
    content: 'rec 2', 
    image: require( "../../../../assets/plant.png"),
  },
  {
    title: 'Exercise', 
    content: 'rec 3', 
    image: require( "../../../../assets/plant.png"),
  },
  {
    title: 'Exercise', 
    content: 'rec 4', 
    image: require( "../../../../assets/plant.png"),
  },
  {
    title: 'Exercise', 
    content: 'rec 5', 
    image: require( "../../../../assets/plant.png"),
  },
  {
    title: 'Exercise', 
    content: 'rec 6', 
    image: require( "../../../../assets/plant.png"),
  },
  {
    title: 'Exercise', 
    content: 'rec 7', 
    image: require( "../../../../assets/plant.png"),
  },
  {
    title: 'Exercise', 
    content: 'rec 8', 
    image: require( "../../../../assets/plant.png"),
  },
];

const elWidth = windowWidth/4.5;
const cardWidth = windowWidth/4;

export default class RecommendationComponent extends Component{
  constructor(props) {
    super(props)
    this.state = {
      scrollX: 0,
      currentEl: 1,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    const currentEl = Math.floor(
      event.nativeEvent.contentOffset.x / elWidth) + 1;
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
          {fakeRecs.map((rec, key) => {
            return (
              <View 
                key={ key }
                style={ recommendationStyles.container }>
                <CardComponent 
                  title={ rec.title }
                  content={ rec.content }
                  cardHeight="100%"
                  cardImage={ rec.image }
                  cardWidth={ cardWidth }
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
