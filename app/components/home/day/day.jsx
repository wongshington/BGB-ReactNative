import React from "react"
import { View } from "react-native";
import HabitsComponent from "../habits/habit_component";
import ScheduleComponent from "../schedule/schedule_component";

const DayComponent = () => {
  return(
    <View style={{flex: 1}}>
      <HabitsComponent></HabitsComponent>
      <ScheduleComponent></ScheduleComponent>
    </View>
  )
}

export default DayComponent