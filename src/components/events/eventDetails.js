import React from 'react';
import { Container, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 400,
    width: 360,
    lineHeight:1.5,
    margin:"auto",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor:'#ECECEC'
  },
  container: {
     borderColor: '#ECECEC',
     borderStyle: 'solid',
     marginTop:20
  },
  span: {
    color: '#037041',
    fontStyle:'italic',
    fontWeight:900,
    padding:10
  },
  spanDivs: {
    marginBottom:10,
    // marginRight:10,
    // justifyContent:'center'
  },
  gridStyle: {
  justify:"center",
  margin:"auto"
  }
}));

const EventDetails = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.container}>
      <h1>Dorfdash</h1>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Paper className={classes.paper} style ={{marginRight:40}}>
            <div className={classes.spanDivs}>
            <span className={classes.span}>Event: </span>
            <span >Pollich-Wehner</span>
            </div>

            <div className={classes.spanDivs}>
            <span className={classes.span}>Host: </span>
            <span>Jud Boule</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Date: </span>
              <span>10/26/2020</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Time: </span>
              <span>10:20 AM</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Location: </span>
              <span>22 Fordem Place</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Description: </span>
              <span>Integer ac leo.
             Pellentesque ultrices mattis odio. Donec vitae nisi.
             \n\nNam ultrices, libero non mattis pulvinar,
             nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.
             Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit
             ligula in lacus.</span>
            </div>
             </Paper>
        </Grid>
        </Grid>
        <Button variant="contained" color="primary" className={classes.root}
         style={{backgroundColor: '#12824C', color: '#FFFFFF',margin:30}}>
  Rider
</Button>
<Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#12824C', color: '#FFFFFF', margin: 30}}>
  Driver
</Button>

    </Container>
  )
}
export default EventDetails;