import React, {useState} from 'react';
import { Container, Paper, Grid, Button, TextField} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
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
  },
  control: {
    padding: theme.spacing(2),
  },
  container: {
    borderColor: '#ECECEC',
    borderStyle: 'solid',
    marginTop:20,
    alignItems:'center',
    padding:0
 },
 label: {
   paddingRight:70,
   marginBottom:10,
   textAlign:'left'
 },
 textField: {
   padding:12,
   width:300,
   margin:10,
   marginTop:30,
   color:'#ECECEC'
 },

 header: {
   backgroundColor:'#20A46B',
   height:40
 },

 gridStyle: {
   height:400,
  paddingBottom:70,
//  backgroundColor:'#ECECEC'
}
}));


const RiderForm = () => {
  let history = useHistory();

  const[addRider, setAddRider] = useState({
    phone: '',
    location: ''
  })
  const[validatePhone, setValidatePhone] = useState('');
  const[validateAddress, setValidateAddress] = useState('');
  const [value, setValue] = React.useState('Rider');
  const[errorMessage, setErrorMessage] =  useState('');
  const[buttonText, setButtonText] = useState('Confirm Ride');


  const handleChange = (event) => {
    setValue(event.target.value);
    if(event.target.value === 'Rider') {
      setButtonText('Confirm Ride');
    } else {
      setButtonText('Select Your Riders')
    }
    setErrorMessage('');
  };

  const handleSubmit = () => {
    if(addRider.phone === '' && addRider.location === '') {
      setValidatePhone('Please Enter Your Phone Number!');
      setValidateAddress('Please Enter Your Location!');
      return;
    }

// //----------------------------------
    if(value === 'Rider'  ) {
      history.push('/eventSummary');
    } else {
      history.push('/driverForm')
    }
//
    // if(value === 'Rider') {
    //   axios.post('/R', {
    //     phone:addRider.phone ,
    //     location: addRider.location
    //   })
    //   .then(() => {
    //     history.push("/upcoming");
    //   })
    //   .catch((error) => {
    //     setErrorMessage('Failed To Submit!');
    //   });
    // } else {
    //   axios.post('/D', {
    //     phone:addRider.phone ,
    //     location: addRider.location
    //   })
    //   .then(() => {
    //     history.push("/driverForm");
    //   })
    //   .catch( (error) => {
    //     setErrorMessage('Failed To Submit!');
    //   });
    // }
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
    <Header />
    <Container maxWidth="xs">
      <div style={{color:'red', fontStyle:'italic', fontWeight:700}}>
      {errorMessage!=='' ? errorMessage : ''}
      </div>
      <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <span><FormControlLabel  value="Rider" control={<Radio style={{color:'green'}} />} label="Rider" />
        <FormControlLabel value="Driver" control={<Radio style={{color:'green'}} />} label="Driver" /></span>
      </RadioGroup>
    </FormControl>

    <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
        <Grid item xs={12}>
            <p style={{fontStyle:'italic'}}>Enter your contact details*</p>

          <form className={classes.root} Validate autoComplete="phone">
            <TextField id="filled-basic" type="tel" label="Contact Number"
             variant="filled" inputProps={{ maxLength: 12 }}className={classes.textField} required
              onChange ={handlePhoneChange}/>

             <br />

             <div style={{color:'red', fontStyle:'italic'}}>
               {validatePhone !== ''?validatePhone : ''}</div>

             <TextField id="filled-basic"  variant="filled" multiline maxRows={4} label="Location"
             className={classes.textField} required
             onChange ={handleAddressChange}/>

             <br />

             <div style={{color:'red', fontStyle:'italic'}}>
               {validateAddress!== '' ? validateAddress : ''}</div>

          </form>
        </Grid>
    </Grid>
    <Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#12824C', color: '#FFFFFF', marginBottom:70}}
         onClick = {handleSubmit}>
  {buttonText}
</Button>

  </Container>
  <Footer />
  </Container>


  )
}

export default RiderForm;