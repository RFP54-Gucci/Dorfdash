import SignUpForm from './signupform.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import { Container, AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   div: {
//     width: '100vw',
//     maxWidth: '100vw',
//     padding: '0',
//     height: '100vh'
//   },

//   header: {
//     backgroundColor: '#20A46B'
//   },
//   headerTitle: {
//     margin: '0',
//     padding: '2%',
//   },
//   footer: {
//     width: '100vw',
//     maxWidth: '100vw',
//     backgroundColor: '#3F3F3F',
//     padding: '2% 2% 5% 2%',
//     textAlign: 'center',
//     color: '#fff'
//   }
// });

const Homepage = () => {
  // const classes = useStyles();
  return (
    // <Container className={classes.div}>
    //   <AppBar position="static" className={classes.header}>
    //     <Typography variant="h3" className={classes.headerTitle}>
    //       Dorfdash
    //     </Typography>
    //   </AppBar>
    //   <SignUpForm />
    //   <Container className={classes.footer}>
    //     <p>Designed by Team GUCCI @ 2021</p>
    //   </Container>
    // </Container>
    <div>
      <Header />
      <SignUpForm />
      <Footer />
    </div>
  )
}

export default Homepage;
