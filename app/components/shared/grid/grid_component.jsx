import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import CardComponent from "../card/card_component";
import { gridStyles } from "./_grid";

export default class GridComponent extends Component { 
  constructor(props) {
    super(props) 
  }

  render() {
    if (!this.props.elements) {
      return 'Loading...'
    }

    return(
      <ScrollView horizontal={ false } 
        showsVerticalScrollIndicator={ false }
        style={ gridStyles.scrollView }
      >
        <View style={ gridStyles.gridContainer }>
          {this.props.elements.map((el, key) => {
            return (
              <View 
                key={ key }
                style={{
                  margin: 10, 
                }}
              >
                <CardComponent 
                  title={ el.title }
                  content={ el.content }
                  cardHeight={ this.props.cardHeight }
                  cardWidth={ this.props.cardWidth }
                  cardImage={ el.image }
                  navigation={ this.props.navigation }
                  guide={ this.props.guide }
                >
                </CardComponent>
              </View>
            );
          })}
        </View>
      </ScrollView>
    )
  }
}