import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import {LocationOutlinedIcon} from '@material-ui/icons';
import Rating from '@material-ui/lab';
import useStyles from './styles';
const API_KEY = 'AIzaSyBX-OV0pA9RlMAt82YPTeKh-e-4L05HIbQ';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = {lat:45.421532,lng:-75.6971189};
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key:API_KEY}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >
      </GoogleMapReact>
    </div>
  );
};






export default Map;