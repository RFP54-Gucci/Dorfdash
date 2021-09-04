import React, {useState} from 'react';
import { Context } from '../../_Context/Context.js';
import { useContext } from 'react';

import { Container, Grid, Button, TextField} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import axios from 'axios';


// Jinhoo change
import logo from '../../assets/logo.png';
import useStyles from '../components_styles.js';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 400,
//     width: 390,
//     justifyContent:'center',
//     marginBottom:10,
//     backgroundColor:'#ECECEC',
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
//   container: {
//     borderColor: '#ECECEC',
//     borderStyle: 'solid',
//     marginTop:20,
//     alignItems:'center',
//     padding:0,
//  },
//  label: {
//    paddingRight:70,
//    marginBottom:10,
//    textAlign:'left'
//  },
//  textField: {
//    padding:12,
//    width:300,
//    margin:10,
//    marginTop:30,
//    color:'#ECECEC'
//  },

//  header: {
//    backgroundColor:'#20A46B',
//    height:40
//  },

//  gridStyle: {
//    height:400,
//   paddingBottom:70,
// }
// }));



const RiderForm = () => {
  let history = useHistory();
  const { currentUser, setCurrentUser } = useContext(Context);
  const { currentEvent, setCurrentEvent, setMyList } = useContext(Context);

  const[addRider, setAddRider] = useState({
    phone: '',
    location: '',
    vehicleInfo: ''
  })
  const[validatePhone, setValidatePhone] = useState('');
  const[validateAddress, setValidateAddress] = useState('');
  const[validateVehicleInfo, setValidateVehicleInfo] = useState('');
  const [value, setValue] = React.useState('Rider');
  const[errorMessage, setErrorMessage] =  useState('');
  const[buttonText, setButtonText] = useState('Confirm Ride');


  const[eventDetails, setEventDetails] = useState([]);



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
      setValidateVehicleInfo('Please Enter Your Vehicle Info');
      return;
    }



// //----------------------------------
    // if(value === 'Rider'  ) {
    //   history.push('/eventSummary');
    // } else {
    //   history.push('/driverForm')
    // }


    if(value === 'Rider') {
      axios.post('/data/riders', {
        riderEmail: currentUser.email,
        eventName: currentEvent.event_name,
        phone:addRider.phone ,
        location: addRider.location
      })
      .then(() => {
        axios.get(`http://localhost:3100/data/events/user/${currentUser.email}`)
        .then((res) => {
        let driverEvents = res.data.driver_events || [];
        let hostEvents = res.data.host_events || [];
        let riderEvents =  res.data.rider_events || [];
        let temp = [...driverEvents, ...hostEvents, ...riderEvents];
        setMyList(temp);
        })
      })
      .then((response) => {
        console.log(response)
        history.push("/eventSummary");
      })
      .catch((error) => {
        setErrorMessage('Failed To Submit!');
        console.log(error);
      });
    } else {

      axios.post('/data/drivers', {

        driverEmail: currentUser.email,
        eventName: currentEvent.event_name,
        phone:addRider.phone ,
        location: addRider.location,
        vehicleInfo: addRider.vehicleInfo
      })
      .then(() => {
        axios.get(`http://localhost:3100/data/events/user/${currentUser.email}`)
        .then((res) => {
        let driverEvents = res.data.driver_events || [];
        let hostEvents = res.data.host_events || [];
        let riderEvents =  res.data.rider_events || [];
        let temp = [...driverEvents, ...hostEvents, ...riderEvents];
        setMyList(temp);
        })
      })
      .then((response) => {
        history.push("/driverForm");
      })
      .catch( (error) => {
        setErrorMessage('Failed To Submit!');
      });
    }
  }

  const handlePhoneChange = (e) => {
    setAddRider({
     ...addRider, phone: e.target.value
    });
    setValidatePhone('');
  }


  const handleAddressChange = (e) => {
    setAddRider({
      ...addRider, location: e.target.value
    });
    setValidateAddress('');
  }

  const handleVehicleInfo = (e) => {
    setAddRider({
      ...addRider, vehicleInfo: e.target.value
    });
    setValidateVehicleInfo('');
  }

  const classes = useStyles();
  // console.log(addRider.phone)
  if(value==='Rider') {
    return (

    // Jinhoo change
    <Container maxWidth="xs" className={classes.div2}>
      <img alt="logo2" className={classes.logo} src={logo}/>
      <Container maxWidth="xs" className={classes.form2}>
        <div style={{color:'red', fontStyle:'italic', fontWeight:700}}>
        {errorMessage!=='' ? errorMessage : ''}
        </div>
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <span><FormControlLabel value="Rider" control={<Radio style={{color:'#10BD82'}} />} label="Rider" />
            <FormControlLabel value="Driver" control={<Radio style={{color:'#10BD82'}} />} label="Driver" /></span>
          </RadioGroup>
        </FormControl>

        <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
            <Grid item xs={12}>
                <p className={classes.font} style={{fontStyle:'italic'}}>Enter your contact details*</p>

              <form className={classes.inputForm} Validate autoComplete="phone">
                <TextField id="filled-basic"  label="Contact Number"
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
        <Button variant="contained"  className={classes.solidBtn}
            onClick = {handleSubmit}>
          {buttonText}
        </Button>

      </Container>
    </Container>


    )
  } else {
    return (

  //     <Container maxWidth="xs" className={classes.container}>
  //     <Header />
  //     <Container maxWidth="xs">
  //       <div style={{color:'red', fontStyle:'italic', fontWeight:700}}>
  //       {errorMessage!=='' ? errorMessage : ''}
  //       </div>
  //       <FormControl component="fieldset">
  //       <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
  //         <span><FormControlLabel  value="Rider" control={<Radio style={{color:'green'}} />} label="Rider" />
  //         <FormControlLabel value="Driver" control={<Radio style={{color:'green'}} />} label="Driver" /></span>
  //       </RadioGroup>
  //     </FormControl>

  //     <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
  //         <Grid item xs={12}>
  //             <p style={{fontStyle:'italic'}}>Enter your contact details*</p>

  //           <form className={classes.root} Validate autoComplete="phone">
  //             <TextField id="filled-basic" type="tel" label="Contact Number"
  //              variant="filled" inputProps={{ maxLength: 12 }}className={classes.textField} required
  //               onChange ={handlePhoneChange}/>

  //              <br />

  //              <div style={{color:'red', fontStyle:'italic'}}>
  //                {validatePhone !== ''?validatePhone : ''}</div>

  //              <TextField id="filled-basic"  variant="filled" multiline maxRows={4} label="Location"
  //              className={classes.textField} required
  //              onChange ={handleAddressChange}/>

  //              <br />

  //              <div style={{color:'red', fontStyle:'italic'}}>
  //                {validateAddress!== '' ? validateAddress : ''}</div>


  //              <TextField id="filled-basic"  variant="filled" multiline maxRows={4} label="Vehicle Info"
  //              className={classes.textField} required
  //              onChange ={handleVehicleInfo}/>

  //              <br />

  //              <div style={{color:'red', fontStyle:'italic'}}>
  //                {validateVehicleInfo!== '' ? validateVehicleInfo : ''}</div>

  //           </form>
  //         </Grid>
  //     </Grid>
  //     <Button variant="contained"  className={classes.root}
  //          style={{backgroundColor: '#20A46B', color: '#FFFFFF', marginBottom:20,
  //         marginTop:90}}
  //          onClick = {handleSubmit}>
  //   {buttonText}
  // </Button>

  //   </Container>
  //   <Footer />
  //   </Container>


  <Container maxWidth="xs" className={classes.div2}>
    <img alt="logo2" className={classes.logo} src={logo}/>
    <Container maxWidth="xs" className={classes.form2}>
      <div style={{color:'red', fontStyle:'italic', fontWeight:700}}>
        {errorMessage!=='' ? errorMessage : ''}
      </div>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <span><FormControlLabel  value="Rider" control={<Radio style={{color:'#10BD82'}} />} label="Rider" />
          <FormControlLabel value="Driver" control={<Radio style={{color:'#10BD82'}} />} label="Driver" /></span>
        </RadioGroup>
      </FormControl>

      <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
        <Grid item xs={12}>
          <p className={classes.font} style={{fontStyle:'italic'}}>Enter your contact details*</p>
          <form className={classes.inputForm} Validate autoComplete="phone">
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
          <TextField id="filled-basic"  variant="filled" multiline maxRows={4} label="Vehicle Info"
           className={classes.textField} required
           onChange ={handleVehicleInfo}/>
           <br />
           <div style={{color:'red', fontStyle:'italic'}}>
             {validateVehicleInfo!== '' ? validateVehicleInfo : ''}</div>
          </form>
        </Grid>
      </Grid>
      <Button variant="contained"  className={classes.solidBtn}
        onClick = {handleSubmit}>
          {buttonText}
      </Button>
    </Container>
  </Container>


    )
  }

}

export default RiderForm;