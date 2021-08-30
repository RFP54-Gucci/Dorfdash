import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { MAPS_KEY } from '../config.js';
import axios from 'axios';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const origin = '30920 Dyer St, Union City, CA 94587';
// const mapOrigin = origin.replace(/ /g, '+');
const geoOrigin = origin.replace(/ /g, '%20');

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    originCoords: {}
  };

  getOriginCoords = () => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${geoOrigin}&key=${MAPS_KEY}`
      )
      .then((response) => {
        this.setState({originCoords: response.data.results[0].geometry.location})
      });
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  componentDidMount() {
    this.getOriginCoords();
  }

  render() {
    return (
      <Map
        centerAroundCurrentLocation
        google={this.props.google}
        style={mapStyles}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
          position={this.state.originCoords}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS_KEY,
})(MapContainer);
