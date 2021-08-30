import React from 'react';
import {Container, Avatar, Grid, Paper, Typography, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    borderColor: '#ECECEC',
    borderStyle: 'solid',
    // borderWidth:1,
    marginTop:20,
    alignItems:'center'
 },
 paper: {
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
},
typography: {
  backgroundColor:'#ECECEC',
  height:40
},
avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin:4
}
}))

const DriverForm = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Container maxWidth="xs" className={classes.container}>
      <h1>Dorfdash</h1>
      <p style = {{fontStyle:'italic'}}>Select your Riders</p>
      <Grid container spacing={2} style={{paddingBottom:8}}>
        <Grid>
        <Avatar className={classes.avatar} />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={0}>
          <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
          </Grid>
      </Grid>
  </Container>
  )
}

export default DriverForm;



