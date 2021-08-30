import { useState } from 'react';
import { Container, AppBar, Typography, TextField, Button } from '@material-ui/core';

const ReturningUser = () => {

  const [email, setEmail] = useState('');

  let handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log('this is email', email);
    // send post request to backedn
  }

  return (
    <Container>
      <AppBar position="static">
        <Typography variant="h3" className="header header-title">
          Dorfdash
        </Typography>
      </AppBar>
      <Container className="form outline" maxWidth="xs">
      <h2>Welcome Back!</h2>
      <TextField fullWidth={true} id="filled-basic" label="Email" variant="filled" required margin="normal"
        onChange={(e) => {handleEmail(e)}}/>
      <Button className="signupBtn" variant="contained" disableElevation
        onClick={(e) => {handleSubmit(e)}}
      >Log In</Button>
    </Container>
      <Container className="footer">
        <p>Designed by Team GUCCI @ 2021</p>
      </Container>
    </Container>
  )
}

export default ReturningUser;