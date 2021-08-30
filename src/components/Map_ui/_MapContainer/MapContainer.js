import React from 'react';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

const MapContainer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <h1>MapContainer</h1>
    </Container>
  );
}

export default MapContainer;