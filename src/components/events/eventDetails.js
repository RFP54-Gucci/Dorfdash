import React from 'react';
import { Container, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
     lineHeight:2

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
    paddingTop:5,
   backgroundColor:'#ECECEC'
  }
}));

const EventDetails = (props) => {
  const classes = useStyles();

  return (
      <Container maxWidth="xs" className={classes.container} >
      <h1>Dorfdash</h1>
      {samples.map(item => (
      <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
        <Grid item xs={10}>
            <div className={classes.spanDivs}>
            <span className={classes.span}>Event: </span>
            <span >{item.event_name}</span>
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
             {/* {/* </Paper> */}

        </Grid>
        ))}
        <Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#12824C', color: '#FFFFFF', margin: 20}}>
  Back
</Button>
        <Button variant="contained" color="primary" className={classes.root}
         style={{backgroundColor: '#12824C', color: '#FFFFFF',margin:20}}>
  Rider
</Button>
<Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#12824C', color: '#FFFFFF', margin: 20}}>
  Driver
</Button>



    </Container>
    )}
export default EventDetails;