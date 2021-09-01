import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import useStyles from './homepage_styles.js';

import { Context } from '../../_Context/Context.js';
import { useState, useContext } from 'react';
import { Container, AppBar, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const ReturningUser = () => {

  const classes = useStyles();

  const [email, setEmail] = useState('');

  // with the returning user, we want to set the GLOBAL CURRENT USER to be whatevr the user types in
  const { currentUser, setCurrentUser } = useContext(Context);

  let handleEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser(email);
    // console.log('this is email', email);
    // this needs to simply set the current user information with what's passed in
  }

  return (
    <Container className={classes.div}>
      <AppBar position="static" className={classes.header}>
        <Typography variant="h3" className={classes.headerTitle}>
          Dorfdash
        </Typography>
      </AppBar>
      <Container className={classes.returning_form} maxWidth="xs">
      <h2>Welcome Back!</h2>
      <TextField fullWidth={true} id="filled-basic" label="Email" variant="filled" required margin="normal"
        onChange={(e) => {handleEmail(e)}}/>
      <Button className={classes.returning_button} onClick={(e) => handleSubmit(e)}>
        <Link to="/myList" className={classes.returning_link}>
          Log in
        </Link>
      </Button>
    </Container>
      <Container className={classes.footer}>
        <p>Designed by Team GUCCI @ 2021</p>
      </Container>
    </Container>
    // <Container className={classes.root}>
    //   <Header />
    //   <Container className={classes.form} maxWidth="xs">
    //     <h2>Welcome Back!</h2>
    //     <TextField fullWidth={true} id="filled-basic" label="Email" variant="filled" required margin="normal"
    //       onChange={(e) => {handleEmail(e)}}/>
    //     <Button className={classes.button} onClick={(e) => handleSubmit(e)}>
    //       <Link to="/myList" className={classes.link}>Log in</Link>
    //     </Button>
    //   </Container>
    //   <Footer />
    // </Container>
  )
}

export default ReturningUser;