import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Map from '../Map/Map';

// import Footer from './components/Footer/Footer';
// import useStyles from './styles';

// Jinhoo change
import logo from '../../../assets/logo.png';
import useStyles from '../../components_styles.js';


const MapContainer = () => {
  const [displayMap, setDisplayMap] = useState(false);
  const classes = useStyles();

  let history = useHistory();

  return (

      // <Container maxWidth="sm" className={classes.container}>
      //    <Header />
      //    <Container className={classes.formContainer}>
      //      <h3>Your Route</h3>
      //       <div className={classes.mapContainer}>
      //       {displayMap? <Map />: <p>Click Start to see route</p>}
      //       </div>
      //       <div className={classes.buttonContainer}>
      //         <Button
      //         onClick={() => setDisplayMap(!displayMap) }
      //          className={classes.button} >
      //           Start
      //          </Button>
      //         <Button className={classes.button}>
      //               <Link
      //                className={classes.button}
      //                href='/mylist'>
      //                   My Events
      //                </Link>
      //         </Button>
      //       </div>
      //     </Container>
      //     <Footer />
      // </Container>



      // Jinhoo change
      <Container maxWidth="xs" className={classes.div}>
        <img alt="logo2" className={classes.logo} src={logo}/>
        <Container maxWidth="xs" className={classes.form}>
          <h3 className={classes.title2}>Your Route</h3>
          <div className={classes.mapContainer}>
            {displayMap? <Map />: <p className={classes.font}>Click Start to see route</p>}
          </div>
          <div className={classes.mapBtnDiv}>
            <Button
              onClick={() => setDisplayMap(!displayMap) }
              className={classes.solidBtn} >
                Start
            </Button>
            <Button className={classes.solidBtn} onClick={() => {
              history.push('/myList');
            }}>
            </Button>
          </div>
        </Container>
      </Container>
  );
}

export default MapContainer;