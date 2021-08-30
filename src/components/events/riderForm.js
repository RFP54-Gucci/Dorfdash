import React, {useState} from 'react';
import { Container, Paper, Grid, Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

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
    // paddingTop:80
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
//  city: {
//    width:140,
//    paddingRight:5,
//    padding:10
//  },
//  state: {
//    width:60,
//    padding:10
//  },
 header: {
   backgroundColor:'#20A46B',
   height:40
 },
//  zip: {
//    width:80,
//    padding:10
//  },
 gridStyle: {
   height:400,
  paddingBottom:70,
 backgroundColor:'#ECECEC'
}
}));


const RiderForm = () => {

  const[addRider, setAddRider] = useState({
    phone: '',
    location: ''
  })

  const[validatePhone, setValidatePhone] = useState('')
  const[validateAddress, setValidateAddress] = useState('')


  const handleSubmit = () => {
    if(addRider.phone === '' && addRider.location === '') {
      setValidatePhone('Input Required');
      setValidateAddress('Input Required');
    }

    // axios.post('/', {
    //   phone: ,
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  const handlePhoneChange = (e) => {
    setAddRider({
      phone: e.target.value
    });
    setValidatePhone('');
  }


  const handleAddressChange = (e) => {
    setAddRider({
      location: e.target.value
    });
    setValidateAddress('');
  }
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.container}>
      <h1>Dorfdash</h1>
    <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
        <Grid item xs={12}>
            <p style={{fontStyle:'italic'}}>Enter your contact details*</p>
          <form className={classes.root} Validate autoComplete="phone">
            <TextField id="outlined-basic" type="tel" label="Contact Number"
             variant="outlined" className={classes.textField} required
              onChange ={handlePhoneChange}/>

             <br />
             {validatePhone !== ''?validatePhone : ''}
             <TextField id="outlined-basic" multiline maxRows={4} label="Location"
             variant="outlined" className={classes.textField} required
             onChange ={handleAddressChange}/>
             <br />
             {validateAddress!== '' ? validateAddress : ''}
{/*  onChange = {() => setValidate(true)} */}
             {/* <TextField id="outlined-basic" label="Address Line 2"
             variant="outlined" className={classes.textField} />
              <br /> */}
             {/* <TextField id="outlined-basic" label="City *"
             variant="outlined" className={classes.city}/>

             <TextField id="outlined-basic" label="State *"
             variant="outlined" className={classes.state} />

            <TextField id="outlined-basic" label="Zip code *"
             variant="outlined" className={classes.zip} /> */}
          </form>

        </Grid>
    </Grid>

    <Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#12824C', color: '#FFFFFF', margin: 40}}>
  Back
</Button>

    <Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#12824C', color: '#FFFFFF', margin: 40}}
         onClick = {handleSubmit}>
  Submit
</Button>
  </Container>
  )
}

export default RiderForm;