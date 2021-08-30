import React, {useState} from 'react';
import { Container, Paper, Grid, Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 390,
    justifyContent:'center',
    marginBottom:10,
    backgroundColor:'#ECECEC',
    paddingTop:80
  },
  control: {
    padding: theme.spacing(2),
  },
  container: {
    borderColor: '#ECECEC',
    borderStyle: 'solid',
    marginTop:20,
    alignItems:'center'
 },
 label: {
   paddingRight:70,
   marginBottom:10,
   textAlign:'left'
 },
 textField: {
   padding:13,
   width:300
 },
 city: {
   width:140,
   paddingRight:5,
   padding:10
 },
 state: {
   width:60,
   padding:10
 },
 header: {
   backgroundColor:'#20A46B',
   height:40
 },
 zip: {
   width:80,
   padding:10
 },
 gridStyle: {
   height:400,
  paddingTop:5,
 backgroundColor:'#ECECEC'
}
}));


const RiderForm = () => {

  const[addRider, setAddRider] = useState({
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: '',
  })
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.container}>
      <h1>Dorfdash</h1>
    <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
        <Grid item xs={12}>

            <p style={{fontStyle:'italic'}}>Enter your contact details*</p>
          <form className={classes.root} Validate autoComplete="off">
            <TextField id="outlined-basic" label="Contact Number *"
             variant="outlined" className={classes.textField}/>
             <br />

             <TextField id="outlined-basic" label="Address Line 1 *"
             variant="outlined" className={classes.textField} />
             <br />

             <TextField id="outlined-basic" label="Address Line 2"
             variant="outlined" className={classes.textField} />
              <br />
             <TextField id="outlined-basic" label="City *"
             variant="outlined" className={classes.city}/>

             <TextField id="outlined-basic" label="State *"
             variant="outlined" className={classes.state} />

            <TextField id="outlined-basic" label="Zip code *"
             variant="outlined" className={classes.zip} />
          </form>

        </Grid>
    </Grid>

    <Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#12824C', color: '#FFFFFF', margin: 40}}>
  Back
</Button>

    <Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#12824C', color: '#FFFFFF', margin: 40}}
         onClick = {() => alert(addRider.phone)}>
  Submit
</Button>
  </Container>
  )
//sta
}
//fe
export default RiderForm;