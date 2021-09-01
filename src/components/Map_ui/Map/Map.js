import React, { useState, useEffect, useRef, useContext } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { MAPS_KEY } from '../../../config.js';
import {Context} from '../../../_Context/Context.js';
import axios from 'axios';

const Map = (props) => {
  const [riders, setRiders] = useState([]);
  const {currentEvent, currentDriver} = useContext(Context);
  useEffect(()=>{
    async function fetchData() {
      try{
       const {data:riderArr} = await axios.get(`http://localhost:3100/data/riders/${currentEvent}`);
       setRiders(riderArr)
      }
       catch(err){
         console.log('ERROR:', err);
       }
     }
     fetchData();
  },[currentEvent])

  const origin = currentDriver.location;
  const destination = currentEvent.location;
  const riderLocations = riders?.map(({location}) => ({location}) );
  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: MAPS_KEY,
      version: 'weekly',
    });
    let map;
    loader.load().then((google) => {
      map = new google.maps.Map(googlemap.current, {
        center: new google.maps.LatLng(39.8097343, -98.5556199),
        zoom: 5,
      });

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: origin }, (results, status) => {
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);
        } else {
          console.error(status);
        }
      });

      var directionsService = new google.maps.DirectionsService();
      var directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      directionsService.route(
        {
          origin: { query: origin },
          destination: { query: destination },
          waypoints: riders,
          travelMode: 'DRIVING',
        },
        function (response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            console.error(status);
          }
        }
      );
    });
  }, [riderLocations, destination, origin]);

  return (
    <div>
      <div id="map" ref={googlemap} />
    </div>
  );
};

export default Map;
