import SignUpForm from './signupform.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import useStyles from './homepage_styles.js';

import { Container, AppBar, Typography } from '@material-ui/core';

const Homepage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.div}>
      <AppBar position="static" className={classes.header}>
        <Typography variant="h3" className={classes.headerTitle}>
          Dorfdash
        </Typography>
      </AppBar>
      <SignUpForm />
      <Container className={classes.footer}>
        <p>Designed by Team GUCCI @ 2021</p>
      </Container>
    </Container>
    // <Container className={classes.root}>
    //   <Header />
    //   <SignUpForm />
    //   <Footer />
    // </Container>
  )
}

export default Homepage;
