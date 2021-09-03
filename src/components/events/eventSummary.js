import React, {useEffect, useState} from 'react';
import { Context } from '../../_Context/Context.js';
import { useContext } from 'react';
import { Container, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import axios from 'axios';

// Jinhoo change
import logo from '../../assets/logo.png';
import useStyles from '../components_styles.js';


const EventSummary = (props) => {

  const { currentEvent, setCurrentEvent } = useContext(Context);
  const { currentUser, setCurrentUser } = useContext(Context);
  const[driverDetails, setDriverDetails] = useState({});

  const classes = useStyles();

  let history = useHistory();

  const handleUpcomingEventPage =() => {
    history.push("/myList");
  }

  const getDriverDetails = () => {
    if (driverDetails.driver_name !== undefined) {
      return;
    }

    axios.get(`/data/riders/driverInfo/${currentUser.email}/${currentEvent.event_name}`,{})
    .then((response) => {
      setDriverDetails(response.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getDriverDetails();
  })



  return (

  // Jinhoo change
  <Container maxWidth="xs" className={classes.div2}>
    <img alt="logo2" className={classes.logo} src={logo}/>
    <Container maxWidth="xs" className={classes.form2}>
    <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
      <Grid item xs={10} className={classes.alignLeft}>
        <div className={classes.spanDivs2}>
          <span className={classes.formSpan}>Event: </span>
          <span className={classes.title3} style={{fontStyle: 'italic', marginLeft: '1%'}}> {currentEvent.event_name}</span>
        </div>

          <div className={classes.spanDivs2}>
            <span className={classes.formSpan}>Host: </span>
            <span className={classes.font} style={{marginLeft: '1%'}}>{currentEvent.host_email}</span>
          </div>

          <div className={classes.spanDivs2}>
            <span className={classes.formSpan}>Date: </span>
            <span className={classes.font} style={{marginLeft: '1%'}}>{currentEvent.date}</span>
          </div>

          <div className={classes.spanDivs2}>
            <span className={classes.formSpan}>Time: </span>
            <span className={classes.font} style={{marginLeft: '1%'}}>{currentEvent.time}</span>
          </div>

          <div className={classes.spanDivs2}>
            <span className={classes.formSpan}>Location: </span>
            <span className={classes.font} style={{marginLeft: '1%'}}>{currentEvent.location}</span>
          </div>
          {driverDetails.driver_name === undefined &&
            <>
          <span className={classes.font2}>You Will Be Notified Soon By Your Driver</span>
          <span><Button variant="contained"  className={classes.root}
              style={{backgroundColor: '#20A46B', color: '#FFFFFF', margin: 20}}
              onClick = {getDriverDetails}>
        Refresh
       </Button></span>
          </>
          }

      {driverDetails.driver_name !== undefined &&
          <div className={classes.card3}>
            <p style={{fontWeight:700}}>You Will Be Picked Up By</p>
            <p>{driverDetails.driver_name}</p>
            <p>{driverDetails.phone}</p>
            <p>{driverDetails.vehicle_info}</p>
          </div>
}
      </Grid>
    </Grid>
      <Button className={classes.solidBtn} onClick = {handleUpcomingEventPage}>Back to Events</Button>
    </Container>
  </Container>
)};

export default EventSummary;