import React,{useState} from 'react';
import dotenv from 'dotenv';
import GoogleMapReact from 'google-map-react';
import makeAsyncScriptLoader from "react-async-script";
import PlacesAutoComplete,{geocodeByAddress,geocodeByPlaceId,getLatLng,} from 'react-places-autocomplete';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import {LocationOutlinedIcon} from '@material-ui/icons';
import Rating from '@material-ui/lab';
import mapStyles from './mapStyles';
import useStyles from './styles';
dotenv.config();
const API_KEY = process.env.REACT_APP_API_KEY

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = {lat:45.421532,lng:-75.6971189};
  const [mapStyle,setMapStyle] = useState(mapStyles['dark']);
  const [title, setTitle] = useState('default');
  const updateMapStyle = (style) => {
   if(style === 'dark'){
    setMapStyle(mapStyles[style]);
    setTitle('default');
   }else{
    setMapStyle(mapStyles[style]);
    setTitle('dark');
   }

 }
  return (
    <div className={classes.mapContainer}>
      <h3>Your Route</h3>
      <GoogleMapReact
        bootstrapURLKeys={{key:API_KEY}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={{styles:mapStyle}}
        onChange={''}
        onChildClick={''}
      >
      </GoogleMapReact>
      <button onClick={(e)=>updateMapStyle(e.target.innerText)} className={classes.button}>{title}</button>
    </div>
  );
};

export default Map;