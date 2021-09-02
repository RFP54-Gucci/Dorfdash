import React, {useEffect, useState} from 'react';
import { Context } from '../../_Context/Context.js';
import { useContext } from 'react';
import { Container, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import samples from './sample.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },

  container: {
     borderColor: '#ECECEC',
     borderStyle: 'solid',
     marginTop:20,
     lineHeight:2,
     padding:0,
  },
  span: {
    color: '#037041',
    fontStyle:'italic',
    fontWeight:900,
    padding:10
  },
  spanDivs: {
    marginBottom:10,
  },
  gridStyle: {
    paddingTop:10,
  }
}));

const EventSummary = (props) => {

  const { currentEvent, setCurrentEvent } = useContext(Context);

  // const[eventDetails, setEventDetails] = useState([]);


  // useEffect(() => {
  //   axios.get( `http://localhost:3100/events/${currentEvent.event_name}`, {})
  //   .then(response => {
  //     console.log(response.data)
  //     setEventDetails({
  //       eventDetails:response.data
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // })
  const classes = useStyles();

  let history = useHistory();

  const handleUpcomingEventPage =() => {
    history.push("/myList");
  }



  return (
    <Container maxWidth="xs" className={classes.container}>
    <Header />
      <Container maxWidth="xs">
      {/* {samples.map(item => ( */}
      <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
        <Grid item xs={10}>
            <div className={classes.spanDivs}>
            <span className={classes.span}>Event: </span>
            <span style = {{fontWeight:900}}>{currentEvent.event_name}</span>
            </div>

            <div className={classes.spanDivs}>
            <span className={classes.span}>Host: </span>
            <span>{currentEvent.host_email}</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Date: </span>
              <span>{currentEvent.date}</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Time: </span>
              <span>{currentEvent.time}</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Location: </span>
              <span>{currentEvent.location}</span>
            </div>
            <span style={{fontWeight:700}}>You Will Be Notified Soon By Your Driver</span>
            <div style={{backgroundColor:'#ECECEC'}}>
            <div><span style={{fontWeight:600, fontStyle:'italic'}}></span></div>
            <div><span style={{fontWeight:600}}>3M53AF2</span> </div>
            <div><span style={{fontWeight:600}}>Honda Civic- Silver</span></div>
            </div>
            </Grid>

        </Grid>
        {/* ))} */}
        {/* <Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#12824C', color: '#FFFFFF', margin: 20}}
         onClick = {handleUpcomingEventPage}>
  Back
</Button> */}
<Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#20A46B', color: '#FFFFFF', margin: 20}}
         onClick = {handleUpcomingEventPage}>
  Back to Events
</Button>

    </Container>
    <Footer />
    </Container>

    )}
export default EventSummary;