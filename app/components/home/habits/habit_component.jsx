import React, { Component } from "react"
import { Text, View } from "react-native";
import { habitStyles } from "./_habits";
import { Icon } from "react-native-elements"

export default class HabitComponent extends Component { 
  constructor(props) {
    super(props) 
    console.log(this.props);
    this.state = { 
      icon: this.props.icon,
      name: this.props.name,
      unit: this.props.unit,
      total: parseInt(this.props.total),
      completed: parseInt(this.props.completed),
      type: this.props.type,
    }
    this.increaseItem = this.increaseItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);
  }

  // componentWillReceiveProps(props) {
  //   this.setState({
  //     icon: props.icon,
  //     name: props.name,
  //     unit: props.unit,
  //     total: props.total,
  //     completed: props.completed
  //   });
  // }

  increaseItem() {
    console.log(this.state.completed, this.props.total);
    if (this.state.completed < this.state.total) {
      this.setState({completed: this.state.completed + 1});
    }
  }

  decreaseItem() {
    if (this.state.completed > 0) {
      this.setState({completed: this.state.completed - 1});
    }
  }

  render() {
    if (!this.props.name) {
      return 'Loading...'
    }

    return(
      <View style={habitStyles.habit}>
          <Icon name={this.state.icon} type={this.state.type}/>
        <View style={habitStyles.progressBar}>
          <Text>{this.state.name}</Text>
          <Text>{`${this.state.completed}/${this.state.total} ${this.state.unit}`}</Text>
          <Icon name='add' onPress={this.increaseItem} />
          <Icon name='delete' onPress={this.decreaseItem} />
        </View>
      </View>
    )
  }
}