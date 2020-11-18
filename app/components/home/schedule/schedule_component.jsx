import React from "react"
import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { scheduleStyles } from "./_schedule"
import { Icon } from "react-native-elements";

const schedules = ['Morning', 'Afternoon', 'Evening', 'Nighttime'];

const ScheduleComponent = () => {
  return(
    <View style={scheduleStyles.main}>
      <Text style={scheduleStyles.title}>Daily Schedule</Text>
      <View>
        {schedules.map((prop, key) => {
          return (
            <View style={scheduleStyles.navigationBar} key={key}>
              <Text>{prop}</Text>
              <Link to='/schedule'>
                <Icon name='add-circle'
                      type='material' />
              </Link>
            </View>
          );
        })}
      </View>
    </View>
  )
}

export default ScheduleComponent
