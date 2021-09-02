import SignUpForm from './signupform.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import useStyles from './homepage_styles.js';
import logo from '../../assets/logo.png';
import clsx from 'clsx';

import { Container, AppBar, Typography } from '@material-ui/core';

const Homepage = () => {
  const classes = useStyles();
  return (
    <Container className={clsx(classes.div, classes.backgroundImg)}>
      {/* <AppBar position="static" className={classes.header}> */}
        {/* <Typography variant="h3" className={classes.headerTitle}>
          Dorfdash
        </Typography> */}
        {/* <img className={classes.logo} alt="why" src={logo}/> */}
      {/* </AppBar> */}
      <SignUpForm />
      {/* <Container className={classes.footer}>
        <p>Designed by Team GUCCI @ 2021</p>
      </Container> */}
    </Container>
    /* <Container className={classes.root}>
      <Header />
      <SignUpForm />
      <Footer />
    </Container> */
  )
}

export default Homepage;
