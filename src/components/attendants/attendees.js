// a page that lists all of the attendees that are going
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import useStyles from '../homepage/homepage_styles.js';

import { Context } from '../../_Context/Context.js';
import { useState, useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';

import logo from '../../assets/logo.png';

const axios = require('axios');

const Attendees = () => {
  const classes = useStyles();

  const [attendees, setAttendees] = useState(['aasdfasf', 'asfasdf', 'asdfasdf']);

  const { currentEvent } = useContext(Context);

  // upon reload, it should get all of the attendees
  // useEffect(() => {
  //   // getAttendees();
  // }, [attendees]);

  let getAttendees = () => {
    // axios request to get all attendants from the current event

    axios.get(`http://localhost:3100/data/users/${currentEvent}`)
    .then((response) => {
      setAttendees(response.data);
    })
    .catch((err) => {
      console.log('err', err);
    })
  };

  return (
    <Container className={classes.div2}>
      {/* <Header /> */}
      <img alt="logo2" className={classes.logo} src={logo}/>
      <Container className={classes.form2} maxWidth="xs">
        <h1 className={classes.title}>List of Attendees</h1>
        <p className={classes.title2}>Current Event</p>
        {attendees.map((item, i) => {
          return <p className={classes.font}>{item}</p>
        })}
      </Container>
      {/* <Footer /> */}
    </Container>
  )

}

export default Attendees;