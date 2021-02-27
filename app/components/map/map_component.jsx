import React from "react";
import { View } from "react-native";
import HeaderComponent from "../shared/header/header_component";
import ToolbarComponent from "../shared/toolbar/toolbar_component";
import { mapStyles } from "./_map";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DropDownMenuProps from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const MapComponent = ({navigation}) => {
  return (
    <View >
      <HeaderComponent style={mapStyles.main}
        navigation={navigation} 
        title='Map'
      >
      </HeaderComponent>

        <ToolbarComponent style={mapStyles.navigation} navigation={navigation}></ToolbarComponent>

    <Grid container alignItems="center">

        <DropDownMenuProps>
            <InputLabel>Distance </InputLabel>
            <Select
                labelId="distance"
                id="distance"
            >
                <MenuItem >0.5 miles</MenuItem>
                <MenuItem >1.5 miles</MenuItem>
                <MenuItem >2.5 miles</MenuItem>
            </Select>
        </DropDownMenuProps>

        <Divider orientation="vertical" flexItem />

          <DropDownMenuProps>
            <InputLabel>Topic</InputLabel>
            <Select
                labelId="topics"
                id="topics"
                >
                <MenuItem >Topic 1</MenuItem>
                <MenuItem >Topic 2</MenuItem>
                <MenuItem >Topic 3</MenuItem>
            </Select>
          </DropDownMenuProps>


        </Grid>


    </View>
  )
}

export default MapComponent