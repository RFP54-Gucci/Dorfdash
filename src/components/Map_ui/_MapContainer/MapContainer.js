import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Map from '../Map/Map';

// import Footer from './components/Footer/Footer';
import useStyles from './styles';

const MapContainer = () => {
  const [displayMap, setDisplayMap] = useState(false);
  const classes = useStyles();
  return (

      <Container maxWidth="sm" className={classes.container}>
         <Header />
         <Container className={classes.formContainer}>
           <h3>Your Route</h3>
            <div className={classes.mapContainer}>
            {displayMap? <Map />: <p>Click Start to see route</p>}
            </div>
            <div className={classes.buttonContainer}>
              <Button
              onClick={() => setDisplayMap(!displayMap) }
               className={classes.button} >
                Start
               </Button>
              <Button className={classes.button}>
                    <Link
                     className={classes.button}
                     href='/mylist'>
                        My Events
                     </Link>
              </Button>
            </div>
          </Container>
          <Footer />
      </Container>
  );
}

export default MapContainer;