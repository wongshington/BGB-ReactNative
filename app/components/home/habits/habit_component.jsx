import React, { Component } from "react"
import { Text, View } from "react-native";
import { habitStyles } from "./_habits";

const fakeHabits = [
  {name: 'Drink water', icon: 'water', total: '8', completed: '5', unit: 'cups'},
  {name: 'Drink water', icon: 'water', total: '8', completed: '5', unit: 'cups'},
  {name: 'Drink water', icon: 'water', total: '8', completed: '5', unit: 'cups'},
];

export default class HabitsComponent extends Component { 

  constructor() {
    super(props) 
      this.state = { 
        icon: this.props.icon,
        name: this.props.name,
        unit: this.props.unit,
        total: this.props.total,
        completed: this.props.completed
      }
  }

  increaseItem() {
    if (this.props.completed < this.props.total) {
      this.setState({completed: this.state.completed + 1});
    }
  }

  increaseItem() {
    if (this.props.completed < this.props.total) {
      this.setState({completed: this.state.completed + 1});
    }
  }

  decreaseItem() {
    if (this.props.completed > 0) {
      this.setState({completed: this.state.completed - 1});
    }
  }

  render() {
    return(
      <View style={habitStyles.habit}>
        <Icon name={this.state.icon} />
        <View style={habitStyles.progressBar}>
          <Text>{this.state.name}</Text>
          <Text>`${this.state.completed}/${this.state.total} %{this.state.unit}`</Text>
          <Icon name='plus' onPress={this.increaseItem} />
          <Icon name='minus' onPress={this.decreaseItem} />
        </View>
      </View>
    )
  }
}