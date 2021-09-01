import useStyles from './homepage_styles.js';
import { Context } from '../../_Context/Context.js';

import { useState, useEffect, useContext } from 'react';
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

// This component will be what is displayed on the homepage
// This is the log in form
// inputs for : first name, lastname, email, username,
// sign up button
const SignUpForm = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const { currentUser, setCurrentUser } = useContext(Context);
  console.log(currentUser);

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
    setValidInfo(true);
    // setUserData[0].email = e.target.value;
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName + ' ' + lastName + ' ' + email);
    // set up an axios post request to backend
    if (firstName && lastName && emailValidation(email)) {
      setValidInfo(true);
    }

    setCurrentUser({
      name: firstName + ' ' + lastName,
      email: email
    });

    console.log('current', currentUser);

    axios({
      method: 'post',
      url: 'http://localhost:3100/data/users',
      data: {
        name: firstName + ' ' + lastName,
        email: email
      }
    })
      .then((response) => console.log(response))
      .catch((err) => console.log('err', err));
  }

  let emailValidation = (email) => {
    let validRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  const validLink = validInfo ? '/newUser' : '#';

  return (
    <Container className={classes.form} maxWidth="xs">
      <h2 className={classes.title}>New Here?</h2>
      <TextField fullWidth={true} id="filled-basic" label="First Name" variant="filled" required margin="normal"
        onChange={(e) => {handleFirstName(e)}}/>
      <TextField fullWidth={true} id="filled-basic" label="Last Name" variant="filled" required margin="normal"
        onChange={(e) => {handleLastName(e)}}/>
      <TextField fullWidth={true} id="filled-basic" label="Email" variant="filled" required margin="normal"
       onChange={(e) => {handleEmail(e)}}/>
     <Button className={classes.signupBtn} onClick={(e) => handleSubmit(e)}>
        <Link className={classes.link} to={validLink}>Sign Up</Link>
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