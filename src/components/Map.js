import React, { Component, useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { MAPS_KEY } from '../config.js';

const google = window.google;

const TestMap = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const googlemap = useRef(null);

  useEffect(() => {
    setOrigin('32757 Hanford Court, Union City, CA 94587')
    setDestination('30920 Dyer St, Union City, CA 94587')
    const loader = new Loader({
      apiKey: MAPS_KEY,
      version: 'weekly',
    });
    let map;
    loader.load().then((google) => {
      map = new google.maps.Map(googlemap.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }, [googlemap]);

  const calculateAndDisplayRoute = () => {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(googlemap);
    directionsService.route(
      {
        origin: { query: origin },
        destination: { query: destination },
        travelMode: 'DRIVING',
      },
      function (response, status) {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
  };

  if (origin.length && destination.length) calculateAndDisplayRoute();

  return (
    <div>
      <div id="map" ref={googlemap} />
    </div>
  );
};

export default TestMap;

// import {
//   GoogleMap,
//   LoadScript,
//   DirectionsService,
// } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100vw',
//   height: '100vh',
// };

// const MapTest = () => {
//   const [originCoords, setOriginCoords] = useState({});
//   // const [destCoords, setDestCoords] = useState({});
//   const [directions, setDirections] = useState([]);

//   const origin = '32757 Hanford Court, Union City, CA 94587'.replace(
//     / /g,
//     '%20'
//   );

//   const destination = '30920 Dyer St, Union City, CA 94587'.replace(
//     / /g,
//     '%20'
//   );

//   const directionsUpdate = (response) => {
//     console.log(response);

//     if (response !== null) {
//       if (response.status === 'OK') {
//         setDirections(response);
//       } else {
//         console.log('response: ', response);
//       }
//     }
//   };

//   useEffect(() => {
//     axios
//       .get(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${origin}&key=${MAPS_KEY}`
//       )
//       .then((response) => {
//         setOriginCoords(response.data.results[0].geometry.location);
//       });
//   }, [originCoords, origin, destination]);

//   return (
//     <LoadScript googleMapsApiKey={MAPS_KEY}>
//       {originCoords.lat ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={originCoords}
//           zoom={12}
//         >
//           {!directions.length && (
//             <DirectionsService
//               options={{
//                 destination: destination,
//                 origin: origin,
//                 travelMode: 'DRIVING',
//               }}
//               callback={directionsUpdate}
//             />
//           )}
//         </GoogleMap>
//       ) : (
//         <h4>Loading</h4>
//       )}
//     </LoadScript>
//   );
// };

// export default React.memo(MapTest);

//////////////////////////////////////////////////////////

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
