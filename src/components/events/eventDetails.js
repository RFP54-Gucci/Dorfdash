import React, {useContext} from 'react';
import { Container, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';


import samples from './sample.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    lineHeight:1.6,
    marginLeft:10,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor:'#ECECEC'
  },
  container: {
     borderColor: '#ECECEC',
     borderStyle: 'solid',
     marginTop:20,
     lineHeight:2,
     padding:0
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
    paddingTop:8,
    marginTop:10,
  //  backgroundColor:'#ECECEC'
  }
}));

const EventDetails = (props) => {
  const classes = useStyles();

  let history = useHistory();

   const handleRiderPage =() => {
    history.push("/riderForm");
  }

  const handleUpcomingEventPage =() => {
    history.push("/upcoming");
  }



  return (

    <Container maxWidth="xs" className={classes.container}>
    <Header />
      <Container maxWidth="xs" >
      {samples.map(item => (
      <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
        <Grid item xs={10}>
            <div className={classes.spanDivs}>
            <span className={classes.span}>Event: </span>
            <span style = {{fontWeight:900}}>{item.event_name}</span>
            </div>

            <div className={classes.spanDivs}>
            <span className={classes.span}>Host: </span>
            <span>{item.event_host}</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Date: </span>
              <span>{item.event_date}</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Time: </span>
              <span>{item.event_time}</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Location: </span>
              <span>{item.event_location}</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Description: </span>
              <span>{item.event_des}</span>
            </div>
            </Grid>

        </Grid>
        ))}
        <Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#20A46B', color: '#FFFFFF', margin: 20}}
         onClick = {handleUpcomingEventPage}>
  Back
</Button>

<Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#20A46B', color: '#FFFFFF', margin: 20}}
         onClick = {handleRiderPage}>
  Attend
</Button>

    </Container>
    <Footer />
    </Container>


    )}
export default EventDetails;