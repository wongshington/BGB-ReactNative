import React, { Component } from "react"
import { Text, View } from "react-native";
import { habitStyles } from "./_habits";
import { Icon } from "react-native-elements"
import { LinearGradient } from 'expo-linear-gradient';
import { colorWhite } from "../../../styles/styles";

export default class HabitComponent extends Component { 
  constructor(props) {
    super(props) 
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
    this.calculatePercent = this.calculatePercent.bind(this);
  }

  increaseItem() {
    if (this.state.completed < this.state.total) {
      this.setState({completed: this.state.completed + 1});
    }
  }

  decreaseItem() {
    if (this.state.completed > 0) {
      this.setState({completed: this.state.completed - 1});
    }
  }

  calculatePercent() {
    return this.state.completed / this.state.total;
  }

  render() {
    if (!this.props.name) {
      return 'Loading...'
    }

    return(
      <View style={habitStyles.habit}>
        <Icon name={this.state.icon} 
              type={this.state.type}
              style={habitStyles.icon}/>
        <LinearGradient colors={['gray', 'lightgray']} 
                        start={{x: 0, y: 1}}
                        end={{ x: 0, y: 1 }}
                        locations={[
                          this.calculatePercent(), 
                          this.calculatePercent()
                        ]}
                        style={habitStyles.linearGradient}>
        <View style={habitStyles.progressBar}>
          <View style={habitStyles.progressBarText}>
            <Text style={habitStyles.text}>{this.state.name}</Text>
          </View>
          <View style={habitStyles.progressBarButtons}>
            <Text style={habitStyles.text}>{`
              ${this.state.completed}/${this.state.total} 
              ${this.state.unit}`}
            </Text>
            <Icon name='add' 
                  color={colorWhite}
                  size={17}
                  onPress={this.increaseItem} />
            <Icon name='remove'
                  color={colorWhite}
                  style={{marginLeft: 7}}
                  size={17}
                  onPress={this.decreaseItem} />
          </View>
        </View>
        </LinearGradient>
      </View>
    )
  }
}