import React from "react"
import { View, Text } from "react-native";
import ToolbarComponent from "../shared/toolbar/toolbar_component";
import HeaderComponent from "../shared/header/header_component";
import TaskComponent from "./task/task_component";
import { scheduleStyles } from "./_schedule";

const times = {
  'Morning': ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM'],
  'Afternoon': ['12:00PM','1:00AM','2:00AM','3:00AM','4:00AM','5:00AM'],
  'Evening': ['6:00PM','7:00PM','8:00PM','9:00PM','10:00PM','11:00PM'],
  'Nighttime': ['12:00AM','1:00AM','2:00AM','3:00AM','4:00AM','5:00AM'],
};

// TODO: remove this fake data once it's connected to the BE
// We may need to add a service to map tasks to their icons, so we
// don't have to save icon names in the DB.
const events = {
  '1:00AM': [],
  '2:00AM': [],
  '3:00AM': [],
  '4:00AM': [],
  '5:00AM': [],
  '6:00AM': [
    {
      task: 'Drink Water',
      icon: 'water'
    },{
      task: 'Meditate', 
      icon: 'cloud'
    },
  ],
  '7:00AM': [
    {
      task: 'Drink Water', 
      icon: 'water'
    },{
      task: 'Meditate', 
      icon: 'cloud'
    }
  ],
  '8:00AM': [
    {
      task: 'Meditate', 
      icon: 'cloud'
    }
  ],
  '9:00AM': [],
  '10:00AM': [],
  '11:00AM': [],
  '12:00PM': [],
  '1:00PM': [],
  '2:00PM': [],
  '3:00PM': [],
  '4:00PM': [],
  '5:00PM': [],
  '6:00PM': [],
  '7:00PM': [],
  '8:00PM': [],
  '9:00PM': [],
  '10:00PM': [],
  '11:00PM': [],
  '12:00AM': [],
}

const ScheduleComponent = ({ navigation, route }) => {
  return(
    <View style={scheduleStyles.main}>
      <HeaderComponent 
        title={`My ${route.params.time}`}
        navigation={navigation}>
      </HeaderComponent>
      <View style={scheduleStyles.mainList}>
        {times[`${route.params.time}`].map((timeProp, key) => {
          return (
            <View 
              style={scheduleStyles.time} 
              key={key}>
              <Text>{timeProp}</Text>
              {events[timeProp].map((prop, key) => {
                return (
                  <TaskComponent
                    key={key} 
                    icon={prop.icon} 
                    task={prop.task}>
                  </TaskComponent>
                );
              })}
            </View>
          );
        })}
      </View>
      <ToolbarComponent navigation={navigation}></ToolbarComponent>
    </View>
  )
}

export default ScheduleComponent