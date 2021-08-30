import { useState } from 'react';
import { Container, AppBar, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  div: {
    width: '100vw',
    maxWidth: '100vw',
    padding: '0',
    height: '100vh'
  },

  header: {
    backgroundColor: '#20A46B'
  },
  headerTitle: {
    margin: '0',
    padding: '2%',
  },
  footer: {
    width: '100vw',
    maxWidth: '100vw',
    backgroundColor: '#3F3F3F',
    padding: '2% 2% 5% 2%',
    textAlign: 'center',
    color: '#fff'
  },
  form: {
    padding: '5%',
    margin: '13% auto',
    borderRadius: '25px',
    boxShadow: '0px 5px 22px 0px rgba(0,0,0,0.65)'
  },
  button: {
    backgroundColor: '#20A46B',
    color: '#fff',
    marginTop: '10%',
    fontSize: '1.2rem'
  }
});


const ReturningUser = () => {

  const classes = useStyles();

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
    <Container className={classes.div}>
      <AppBar position="static" className={classes.header}>
        <Typography variant="h3" className={classes.headerTitle}>
          Dorfdash
        </Typography>
      </AppBar>
      <Container className={classes.form} maxWidth="xs">
      <h2>Welcome Back!</h2>
      <TextField fullWidth={true} id="filled-basic" label="Email" variant="filled" required margin="normal"
        onChange={(e) => {handleEmail(e)}}/>
      <Button className={classes.button} variant="contained" disableElevation
        onClick={(e) => {handleSubmit(e)}}
      >Log In</Button>
    </Container>
      <Container className={classes.footer}>
        <p>Designed by Team GUCCI @ 2021</p>
      </Container>
    </Container>
  )
}

export default ReturningUser;