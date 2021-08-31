import { useState, useEffect } from 'react';
import {  Container, TextField, Button, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

/*
  for rider, it should lead to event page with driver

  for driver, it should lead to map page with people who they're picking up

  - when they sign back in, they should have access this page

  they should also be able to keep track of if they're driver/rider
  and the buttons should either be displayed or not depending on who they are

*/

const axios = require('axios');

const useStyles = makeStyles({
  form: {
    padding: '5%',
    margin: '2% auto',
    borderRadius: '25px',
    boxShadow: '0px 5px 22px 0px rgba(0,0,0,0.65)'
  },
  title: {
    fontSize: '2.2rem'
  },
  signupBtn: {
    backgroundColor: '#20A46B',
    color: '#fff',
    marginTop: '10%',
    fontSize: '1.2rem',
    padding: '5%'
  },
  returningContainer: {
    marginTop: '20%'
  },
  loginBtn: {
    color: '#20A46B',
    fontSize: '1.2rem'
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  },
  link2: {
    color: '#20A46B',
    textDecoration: 'none'
  }
})


// This component will be what is displayed on the homepage
// This is the log in form
// inputs for : first name, lastname, email, username,
// sign up button
const SignUpForm = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [validInfo, setValidInfo] = useState(false);

  let handleFirstName = (e) => {
    // console.log(e.target.value);
    setFirstName(e.target.value);
  }

  let handleLastName = (e) => {
    // console.log(e.target.value);
    setLastName(e.target.value);
  }

  let handleEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);


  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName + ' ' + lastName + ' ' + email);
    // set up an axios post request to backend
    // axios.post()
    if (firstName && lastName && handleEmail(email)) {
      setValidInfo(true);
    }
  }

  let emailValidation = (email) => {
    let validRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  let handleValidation = () => {
    if (firstName && lastName && emailValidation(email)) {
      setValidInfo(true);
    }
  }

  useEffect(() => {
    handleValidation();
  }, []);

  return (
    <Container className={classes.form} maxWidth="xs">
      <h2 className={classes.title}>New Here?</h2>
      <TextField fullWidth={true} id="filled-basic" label="First Name" variant="filled" required margin="normal"
        onChange={(e) => {handleFirstName(e)}}/>
      <TextField fullWidth={true} id="filled-basic" label="Last Name" variant="filled" required margin="normal"
        onChange={(e) => {handleLastName(e)}}/>
      <TextField fullWidth={true} id="filled-basic" label="Email" variant="filled" required margin="normal"
       onChange={(e) => {handleEmail(e)}}/>
      {/* <Button className={classes.signupBtn} variant="contained" disableElevation
        onClick={(e) => {handleSubmit(e)}}
      >Sign Up</Button> */}
     <Button className={classes.signupBtn} onClick={(e) => {handleSubmit(e)}}>
        <Link className={classes.link} to="/newUser">Sign Up</Link>
     </Button>
      <Container className={classes.returningContainer}>
        <p>Already have an account?</p>
        <Button className={classes.loginBtn}>
          <Link className={classes.link2} to="/returningUser">Log In</Link>
        </Button>
      </Container>
    </Container>
  )

}

export default SignUpForm;