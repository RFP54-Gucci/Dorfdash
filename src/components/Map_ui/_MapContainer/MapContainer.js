import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Map from '../Map/Map';

// import Footer from './components/Footer/Footer';
import useStyles from './styles';

const MapContainer = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="sm" className={classes.container}>
         <Header />
         <Container >
           <h3>Your Route</h3>
            <Map />
            <div className={classes.buttonContainer}>
              <Button  className={classes.button} >Start</Button>
              <Button  className={classes.button} >My results</Button>
            </div>
          </Container>
          <Footer />
      </Container>
    </div>

  );
}

export default MapContainer;