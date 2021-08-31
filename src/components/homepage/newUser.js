import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import { Container, AppBar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
  card: {
    padding: '6%',
    margin: '15% auto',
    borderRadius: '25px',
    boxShadow: '0px 5px 22px 0px rgba(0,0,0,0.65)',
    display: 'flex',
    flexDirection: 'column'
  },
  createButton: {
    padding: '6%',
    backgroundColor: '#20A46B',
    color: '#fff',
    marginBottom: '10%'
  },
  attendButton: {
    padding: '6%',
    backgroundColor: '#20A46B',
    color: '#fff',
    marginTop: '10%'
  },
  link: {
    color: '#fff',
    fontSize: '1.1rem',
    textDecoration: 'none'
  },
  createButton2: {
    width: '40%',
    margin: 'auto',
    padding: '6%',
    backgroundColor: '#20A46B',
    color: '#fff',
    marginTop: '10%'
  },
  attendButton2: {
    width: '40%',
    margin: 'auto',
    padding: '6%',
    backgroundColor: '#20A46B',
    color: '#fff',
    marginTop: '10%'
  },
  mobileDiv: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const NewUser = () => {
  const classes = useStyles();

  return (
    // <Container className={classes.div}>
    //   <AppBar position="static" className={classes.header}>
    //     <Typography variant="h3" className={classes.headerTitle}>
    //       Dorfdash
    //     </Typography>
    //   </AppBar>
    //   <Container className={classes.card} maxWidth="xs">
    //     <Button className={classes.createButton}>
    //       <Link to="/eventForm" className={classes.link}>
    //         Create Event
    //       </Link>
    //     </Button>
    //     <Button className={classes.attendButton}>
    //       <Link to="/upcoming" className={classes.link}>
    //         Attend Event
    //       </Link>
    //     </Button>
    //   </Container>
    //   <Container className={classes.footer}>
    //     <p>Designed by Team GUCCI @ 2021</p>
    //   </Container>
    // </Container>
    <div className={classes.mobileDiv}>
      <Header />
      <Button className={classes.createButton2}>
         <Link to="/eventForm" className={classes.link}>
           Create Event
         </Link>
       </Button>
       <Button className={classes.attendButton2}>
        <Link to="/upcoming" className={classes.link}>
           Attend Event
         </Link>
       </Button>
       <Footer/>
    </div>
  )
}

export default NewUser;