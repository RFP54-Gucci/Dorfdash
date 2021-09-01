import React from 'react';
import {Container, Avatar, Grid, Paper,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    borderColor: '#ECECEC',
    borderStyle: 'solid',
    borderWidth:1,
    padding:0,
    paddingLeft:5,
    paddingRight:5,
    alignItems:'center'
 },
 paper: {
  padding: theme.spacing(2),
  textAlign: 'center',
  color: "black",
  backgroundColor:'#ECECEC',
  marginBottom:15
},
typography: {
  backgroundColor:'#ECECEC',
  height:40
},
avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin:4
},
riderInfo: {
  padding:5
}
}))

const DriverForm = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  let history = useHistory();



  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleSubmit = () => {
    history.push("/map");
  }
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Header />

    <Container maxWidth="xs" >

      <p style = {{fontStyle:'italic'}}>Hey Helio! Select your Riders</p>

      <Grid container spacing={2} style={{paddingBottom:8}}>
        <Grid>
        <Avatar className={classes.avatar} />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper} >
            <div className={classes.riderInfo}>Taurus</div>
            <div className={classes.riderInfo}>(123)456-789</div>
            <div className={classes.riderInfo}>21 Pike Place</div>
          </Paper>
        </Grid>
        <Grid item xs={0}>
          <Checkbox
        defaultChecked
        color="primary"
        onChange={handleChange}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <div>1.1mi</div>
          </Grid>

        <Grid container spacing={2} >
        <Grid>
        <Avatar className={classes.avatar} />
        </Grid>
        <Grid item xs={8} style={{marginBottom:10}}>
          <Paper className={classes.paper} >
            <div className={classes.riderInfo}>Kair</div>
            <div className={classes.riderInfo}>(123)223-789</div>
            <div className={classes.riderInfo}>21 Einstein Place</div>
          </Paper>
        </Grid>

        <Grid item xs={0} style={{marginTop:10}}>
          <Checkbox
        defaultChecked
        color="primary"
        onChange={handleChange}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <div>1.5mi</div>
          </Grid>
      </Grid>
      </Grid>
      <Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#20A46B', color: '#FFFFFF', margin: 40}}
         onClick={handleSubmit}>
  Finish
</Button>

  </Container>
  <Footer />
  </Container>


  )
}

export default DriverForm;



