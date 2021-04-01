import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationPin from './LocationPin.jsx' 
import { View } from "react-native";
import HeaderComponent from "../shared/header/header_component";
import ToolbarComponent from "../shared/toolbar/toolbar_component";
import { mapStyles } from "./_map";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DropDownMenuProps from '@material-ui/core/MenuItem';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}

class MapComponent extends React.Component{
//const MapComponent = ({ zoomLevel, navigation}) => {

    constructor() {
        super();
        this.address = {
            addr : [{address: "East Oakland Youth Development Center", mile: "500 ft", hour: "2 hrs"},
                {address: "Black Organizing Project", mile: "0.2 mi", hour: "2 hrs"},
                {address: "East Oakland Collective", mile: "0.7 mi", hour: "2 hrs"},
                {address: "Oakland YMCA", mile: "1 mi", hour: "3 hrs"},
                {address: "Tri-City Health Center", mile: "1.5 mi", hour: "2 hrs"}
            ]
        }

        this.state = {
            resource:false
        }

        this.updateResourceToTrue = this.updateResourceToTrue.bind(this)
        this.updateResourceToFalse = this.updateResourceToFalse.bind(this)

    }

    updateResourceToTrue = () => {
        this.setState({
            resource:true});
    }

    updateResourceToFalse = () => {
        this.setState({
            resource:false});
    }

    mapContent(address, location) {

        return(

            <div>


                    <div className="map">
                        <div className="google-map">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                                defaultCenter={location}
                                // defaultZoom={zoomLevel}
                                defaultZoom = {17}
                            >
                                <LocationPin
                                    lat={location.lat}
                                    lng={location.lng}
                                    text={location.address}
                                />
                            </GoogleMapReact>
                        </div>
                        <div className = "otherStuff">
                        </div>
                    </div>

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
                                <MenuItem > Mental Health </MenuItem>
                                <MenuItem > LGBTQ </MenuItem>
                                <MenuItem > BLM </MenuItem>
                                <MenuItem > Food Banks </MenuItem>
                                <MenuItem > Health Centers </MenuItem>
                                <MenuItem > Community cleanup/art </MenuItem>


                            </Select>
                        </DropDownMenuProps>


                    </Grid>

                    {(address).map((address, )=> (
                        <Card>
                            {/*<Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />*/}
                            <Card.Content >
                                <Title class = "card">
                                    {address.address}
                                    {"      "}
                                    {"Hours"}
                                </Title>
                                <Paragraph>
                                    {address.mile}
                                    {"      "}
                                    {address.hour}
                                </Paragraph>
                            </Card.Content>

                        </Card>

                    ))}

            </div>

        )


    }



    render(){

        const resource = this.state.resource;
        const address = this.address.addr;
        let header;

        if(resource) {
            header =
                <div>resource is on</div>
        } else {
            header = this.mapContent(address, location);

        }

        var {navigation} = this.props;




        return (
            <View >
                <HeaderComponent style={mapStyles.main}
                                 navigation={navigation}
                                 title='Map'
                >
                </HeaderComponent>

                <Grid container direction="row"
                      justify="center">

                    <Button onClick={this.updateResourceToFalse}>map</Button>
                    <Divider orientation="vertical" flexItem />
                    <Button onClick={this.updateResourceToTrue}>resource</Button>

                </Grid>

                <div>{header}</div>

                <ToolbarComponent style={mapStyles.navigation} navigation={navigation}></ToolbarComponent>
            </View>
        )
    }


    };




export default MapComponent;
