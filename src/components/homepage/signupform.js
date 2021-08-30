// import React from 'react';
import {  FormControl, Input } from '@material-ui/core';

// This component will be what is displayed on the homepage
// This is the log in form
// inputs for : first name, lastname, email, username,
// sign up button
const SignUpForm = () => {
  return (
    <div className="signup_div">
      <FormControl>
        <inputLabel htmlFor="firstName">First Name</inputLabel>
        <Input required />
      </FormControl>
    </div>
  )

}

export default SignUpForm;