import { useState } from 'react';
import {  Container, TextField, Button } from '@material-ui/core';

// This component will be what is displayed on the homepage
// This is the log in form
// inputs for : first name, lastname, email, username,
// sign up button
const SignUpForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  let handleFirstName = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  }

  let handleLastName = (e) => {
    console.log(e.target.value);
    setLastName(e.target.value);
  }

  let handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName + ' ' + lastName + ' ' + email);
    // set up an axios post request to backend
  }

  return (
    <Container className="form" maxWidth="xs">
      <h2>New Here?</h2>
      <TextField fullWidth={true} id="filled-basic" label="First Name" variant="filled" required margin="normal"
        onChange={(e) => {handleFirstName(e)}}/>
      <TextField fullWidth={true} id="filled-basic" label="Last Name" variant="filled" required margin="normal"
        onChange={(e) => {handleLastName(e)}}/>
      <TextField fullWidth={true} id="filled-basic" label="Email" variant="filled" required margin="normal"
       onChange={(e) => {handleEmail(e)}}/>
      <Button className="signupBtn" variant="contained" disableElevation
        onClick={(e) => {handleSubmit(e)}}
      >Sign Up</Button>
      <p>Already have an account?</p>
      <Button>Log In</Button>
    </Container>
  )

}

export default SignUpForm;