import React from "react"
import { View } from "react-native";
import HabitsComponent from "../habits/habits_component";
import ScheduleComponent from "../schedule/schedule_component";
import ToolbarComponent from "../../shared/toolbar/toolbar_component";
import { dayStyles } from "./_day";

const DayComponent = () => {
  return(
    <View style={dayStyles.main}>
      <HabitsComponent style={dayStyles.container}></HabitsComponent>
      <ScheduleComponent style={dayStyles.container}></ScheduleComponent>
      <ToolbarComponent style={dayStyles.toolbar}></ToolbarComponent>
    </View>
  )
}

export default DayComponent