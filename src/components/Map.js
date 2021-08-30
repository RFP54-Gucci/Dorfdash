import React, { useState, Component, useEffect } from 'react';
import { MAPS_KEY } from '../config.js';
import axios from 'axios';
import {
  GoogleMap,
  LoadScript
} from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const MapTest = () => {
  const [originCoords, setOriginCoords] = useState({});

  const origin = '30920 Dyer St, Union City, CA 94587'.replace(/ /g, '%20');

  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${origin}&key=${MAPS_KEY}`
      )
      .then((response) => {
        setOriginCoords(response.data.results[0].geometry.location);
      });
  }, [originCoords, origin]);

  return (
    <LoadScript googleMapsApiKey={MAPS_KEY}>
      {originCoords.lat ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={originCoords}
          zoom={10}
        >
          <></>
        </GoogleMap>
      ) : (
        <h4>Loading</h4>
      )}
    </LoadScript>
  );
};

export default React.memo(MapTest);

// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%',
// };

// const origin = '30920 Dyer St, Union City, CA 94587';
// const mapOrigin = origin.replace(/ /g, '+');
// const geoOrigin = origin.replace(/ /g, '%20');

// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {},
//     originCoords: {},
//     waypoints: []
//   };

//   getOriginCoords = () => {
//     axios
//       .get(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${geoOrigin}&key=${MAPS_KEY}`
//       )
//       .then((response) => {
//         this.setState({originCoords: response.data.results[0].geometry.location})
//       });
//   };

//   getRoute = () => {
//     axios
//     .get(
//       `https://maps.googleapis.com/maps/api/directions/json?origin=${mapOrigin}&key=${MAPS_KEY}`
//     )
//     .then((response) => {
//       console.log(response)
//       // this.setState({waypoints: response.routes.legs})
//     });
//   }

//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true,
//     });

//   onClose = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null,
//       });
//     }
//   };

//   componentDidMount() {
//     this.getOriginCoords();
//     this.getRoute();
//   }

//   render() {
//     return (
//       <Map
//         centerAroundCurrentLocation
//         google={this.props.google}
//         style={mapStyles}
//       >
//         <Marker
//           onClick={this.onMarkerClick}
//           name={'Current Location'}
//           position={this.state.originCoords}
//         />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: MAPS_KEY,
// })(MapContainer);
