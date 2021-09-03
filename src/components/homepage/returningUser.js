import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import useStyles from './homepage_styles.js';
import axios from 'axios';
import { Context } from '../../_Context/Context.js';
import { useState, useContext } from 'react';
import { Container, AppBar, Typography, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import logo2 from '../../assets/logo2.png';

const ReturningUser = () => {

  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState('');

  // with the returning user, we want to set the GLOBAL CURRENT USER to be whatevr the user types in
  // userData should be an array of objects that hold all of the users information currently in the db
  const { currentUser, setCurrentUser, userData, myEventList, setMyList, eventIdArr, setEventIdArr } = useContext(Context);

  let handleEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  }

  // function to check whether the signing in user already exists, if not then we throw an error
  let validateEmail = () => {
    for (let i = 0; i < userData.length; i++) {
      // console.log(userData[i].email);
      // if the input email exists in the db, then return true
      if (userData[i].email === email) {
        return true;
      }
    }
    // if we can't find the email, return false
    return false;
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    // if the email is validated
    // then setcurrentuser and move to link
    // else give error

    if (validateEmail()) {
      setCurrentUser({email: email});
      // get all attending events for current email:
      axios.get(`http://localhost:3100/data/events/user/${email}`)
        .then((res) => {
          let driverEvents = res.data.driver_events || [];
          let hostEvents = res.data.host_events || [];
          let riderEvents =  res.data.rider_events || [];
          let temp = [...driverEvents, ...hostEvents, ...riderEvents];
          setMyList(temp);
        })
        .then(() => {
          history.push('/upcoming');
        })
        .catch((err) => { console.log(err) });
    } else {
      console.log('here');
    }

    // setCurrentUser(email);
    // console.log('this is email', email);
    // this needs to simply set the current user information with what's passed in
  }

  return (
    <Container className={classes.div}>
      {/* <AppBar position="static" className={classes.header}>
        <Typography variant="h3" className={classes.headerTitle}>
          Dorfdash
        </Typography>
      </AppBar> */}
      <Container className={classes.form} maxWidth="xs">
      <img alt="logo2" className={classes.logo2} src={logo2}></img>
      <h2 className={classes.title}>Welcome Back!</h2>
      <TextField fullWidth={true} id="filled-basic" label="Email" variant="filled" required margin="normal"
        onChange={(e) => {handleEmail(e)}}/>
        {/* {displayErrMessage === true ? <p className={classes.error}>Please enter correct email</p> : <p></p>} */}
      <Button className={classes.solidBtn} onClick={(e) => handleSubmit(e)}>Log in</Button>
    </Container>
      {/* <Container className={classes.footer}>
        <p>Designed by Team GUCCI @ 2021</p>
      </Container> */}
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