import React, { Component } from "react"
import { Text, View } from "react-native";
import { HabitComponent } from "./habit_component";
import { habitStyles } from "./_habits";

const fakeHabits = [
  {name: 'Drink water', icon: 'water', total: '8', completed: '5', unit: 'cups'},
  {name: 'Drink water', icon: 'water', total: '8', completed: '5', unit: 'cups'},
  {name: 'Drink water', icon: 'water', total: '8', completed: '5', unit: 'cups'},
];

export default class HabitsComponent extends Component { 

  render() {
    return(
      <View style={habitStyles.main}>
        <Text>Daily Habits</Text>
        <View >
          {fakeHabits.map((prop, key) => {
            return (
              <HabitComponent
                name={prop.name}
                icon={prop.icon}
                total={prop.total}
                completed={prop.completed}
                unit={prop.unit}
              ></HabitComponent>
            );
          })}
        </View>
      </View>
    )
  }
}