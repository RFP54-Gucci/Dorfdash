import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import useStyles from './homepage_styles.js';

import { Container, AppBar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Context } from '../../_Context/Context.js';
import { useContext } from 'react';

import logo2 from '../../assets/logo2.png';

const NewUser = () => {
  const classes = useStyles();
  const history = useHistory();

  let createButton = () => {
    history.push('/eventForm');
  }

  let attendButton = () => {
    history.push('/upcoming');
  }

  const { currentUser } = useContext(Context);

  return (
    <Container className={classes.div}>
      {/* <AppBar position="static" className={classes.header}>
        <Typography variant="h3" className={classes.headerTitle}>
          Dorfdash
        </Typography>
      </AppBar> */}

      <Container className={classes.form} maxWidth="xs">
      <img alt="logo2" className={classes.logo2} src={logo2}></img>
        <p className={classes.font}>Welcome to dorfdash, {currentUser.name}!</p>
        <Button className={classes.solidBtn2} onClick={() => createButton()}>Create Event</Button>
        <Button className={classes.solidBtn2} onClick={() => attendButton()}>Attend Event</Button>
      </Container>
      {/* <Container className={classes.footer}>
        <p>Designed by Team GUCCI @ 2021</p>
      </Container> */}
    </Container>
    // <Container className={classes.root}>
    //   <Header />
    //   <Button className={classes.createButton2}>
    //      <Link to="/eventForm" className={classes.link}>
    //        Create Event
    //      </Link>
    //    </Button>
    //    <Button className={classes.attendButton2}>
    //     <Link to="/upcoming" className={classes.link}>
    //        Attend Event
    //      </Link>
    //    </Button>
    //    <Footer/>
    // </Container>
  )
}

export default NewUser;