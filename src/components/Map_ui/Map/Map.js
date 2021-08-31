import React, { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { MAPS_KEY } from '../../../config.js';

const Map = (props) => {
  const [origin, setOrigin] = useState(
    '2240 Golden Gate Ave, San Francisco, CA 94118'
  );
  const [destination, setDestination] = useState(
    '44 Tehama St, San Francisco, CA 94105'
  );
  const [riders, setRiders] = useState([
    { location: '2229 Union St, San Francisco, CA 94123' },
    { location: '350 Turk St, San Francisco, CA 94102' },
  ]);
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
  }, [riders, destination, origin]);

  return (
    <div>
      <div id="map" ref={googlemap} />
    </div>
  );
};

export default Map;
