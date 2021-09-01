// a page that lists all of the attendees that are going
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import useStyles from './attendant_style.js';

import { useState } from 'react';
import { Container } from '@material-ui/core';

const Attendees = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Header></Header>

      <Footer></Footer>
    </Container>
  )

}

export default Attendees;