import React from "react"
import { Text, View } from "react-native";
import { scheduleStyles } from "./_schedule"

const schedules = ['Morning', 'Afternoon', 'Evening', 'Nighttime'];

const ScheduleComponent = () => {
  return(
    <View style={scheduleStyles.main}>
      <Text>Daily Schedule</Text>
      <View >
        {schedules.map((prop, _) => {
          return (
            <View style={scheduleStyles.navigationBar}>
              <Text>{prop}</Text>
              <Link to='/schedule'>
                <Icon name='plus'/>
              </Link>
            </View>
          );
        })}
      </View>
    </View>
  )
}

export default ScheduleComponent
