// a page that lists all of the attendees that are going
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import useStyles from './attendant_style.js';

import { Context } from '../../_Context/Context.js';
import { useState, useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';

const axios = require('axios');

const Attendees = () => {
  const classes = useStyles();

  const [attendees, setAttendees] = useState(['a', 'b', 'c']);

  const {currentEvent, setCurrentEvent} = useContext(Context);

  // upon reload, it should get all of the attendees
  // useEffect(() => {
  //   // getAttendees();
  // }, [attendees]);

  let getAttendees = () => {
    // axios request to get all attendants

    axios.get(`http://localhost:3100/data/users/${currentEvent}`)
    .then((response) => {
      setAttendees(response.data);
    })
    .catch((err) => {
      console.log('err', err);
    })
  };

  return (
    <Container className={classes.root}>
      <Header />
      <h1>List of Attendees</h1>
      <Container>
        {attendees.map((item, i) => {
          return <p>{item}</p>
        })}
      </Container>
      <Footer />
    </Container>
  )

}

export default Attendees;