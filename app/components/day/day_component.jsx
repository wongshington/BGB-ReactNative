import React from "react"
import { View } from "react-native";
import HeaderComponent from "../shared/header/header_component";
import HabitsComponent from "./habits/habits_component";
import DailyScheduleComponent from "./daily_schedule/daily_schedule_component";
import ToolbarComponent from "../shared/toolbar/toolbar_component";
import { dayStyles } from "./_day";

const DayComponent = ({navigation}) => {
  return(
    <View style={dayStyles.main}>
      <HeaderComponent 
        title="My Day"
        navigation={navigation}
      >
      </HeaderComponent>
      <View style={dayStyles.content}>
        <HabitsComponent style={dayStyles.container}></HabitsComponent>
        <DailyScheduleComponent 
          style={dayStyles.container} 
          navigation={navigation}
        >
        </DailyScheduleComponent>
      </View>
      <ToolbarComponent 
        style={dayStyles.toolbar} 
        navigation={navigation}
      >
      </ToolbarComponent>
    </View>
  )
}

export default DayComponent