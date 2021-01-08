import React from "react"
import { Text, View } from "react-native";
import { scheduleStyles } from "./_daily_schedule"
import { Icon } from "react-native-elements";

const schedules = ['Morning', 'Afternoon', 'Evening', 'Nighttime'];

const ScheduleComponent = ({ navigation }) => {
  return(
    <View style={scheduleStyles.main}>
      <Text style={scheduleStyles.title}>Daily Schedule</Text>
        <View>
        {schedules.map((prop, key) => {
          return (
            <View style={scheduleStyles.navigationBar} key={key}>
              <Text>{prop}</Text>
              <Icon name='add-circle'
                    size={20}
                    type='material' 
                    onPress={() => navigation.navigate('Schedule', {time: prop})}
              />
            </View>
          );
        })}
      </View>
    </View>
  )
}

export default ScheduleComponent
