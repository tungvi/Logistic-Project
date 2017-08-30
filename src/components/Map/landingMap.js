import React from 'react';

import { Button, Card, Icon, Transition } from 'semantic-ui-react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class LandingMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }


  render() {
    
    let google = this.props.google;


    return (
      <div>
        <Map google={google} zoom={17} className = "landingMapHolder">
  
          <Marker 
            onClick={this.onMarkerClick.bind(this)}
            name={'Justin'} 
            className = "mapMarker"
            icon={{
              url: "/assets/img/user/user1.jpg",
            }}
          />
  
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div className = "infoWindowMarker">
              <Card>
                <Card.Content header='Joshua Demmi' />
                <Card.Content description={"Audi A4 - 2014 make - Black"} />
                <Card.Content description={"Normal Wash"} />
                <Card.Content extra className = "red-important f-w-900">
                  <Icon name='lock' />
                    Not received yet
                </Card.Content>
              </Card>
              <Button.Group labeled>
                <Button color= "teal"  size= "big" icon='check' content='Assgin task'/>
                <Button color= "red"  size= "big" icon='remove' content='Remove'/>
              </Button.Group>
            </div>

          </InfoWindow>
        </Map>
      </div>
    );
  }
}
  
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyDem6EnSybtUjD-4FLDOPbI_mDObyiime8")
  })(LandingMap)