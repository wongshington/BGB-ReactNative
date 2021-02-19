import React, { Component } from "react";
// import CircleCheckBox from 'react-native-circle-checkbox'; 
import {View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { taskStyles } from "./_task";
import { colorPurple } from "../../../styles/styles";

export default class TaskComponent extends Component { 
  constructor(props) {
    super(props) 
    this.state = { 
      icon: this.props.icon,
      task: this.props.task,
      toggleCheckBox: false,
    }
    this.setToggleCheckbox = this.setToggleCheckbox.bind(this);
  }

  // This will eventually update the state of the task in the DB 
  setToggleCheckbox(newValue) {
    this.setState({toggleCheckBox: newValue});
  }

  render() {
    return(
      <View style={taskStyles.main}>
        <View style={taskStyles.flex}>
          {/* <CircleCheckBox
            checked={this.state.toggleCheckBox}
            outerColor={colorPurple}
            innerColor={colorPurple}
            onToggle={(checked) => this.setToggleCheckbox(checked)}
            styleCheckboxContainer={taskStyles.checkbox}
          /> */}
          <Icon name={this.state.icon}
                size={30}
                type='material-community' 
                style={{marginRight: 5}}
          />
          <Text style={taskStyles.task}>{this.state.task}</Text>
        </View>
        <View>
          <Icon 
            name='menu'
            size={20}
            type='material' 
          />
        </View>
      </View>
    );
  }
}