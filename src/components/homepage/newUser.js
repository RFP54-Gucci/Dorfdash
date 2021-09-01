import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import useStyles from './homepage_styles.js';

import { Container, AppBar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const NewUser = () => {
  const classes = useStyles();

  return (
    <Container className={classes.div}>
      <AppBar position="static" className={classes.header}>
        <Typography variant="h3" className={classes.headerTitle}>
          Dorfdash
        </Typography>
      </AppBar>
      <Container className={classes.card} maxWidth="xs">
        <Button className={classes.createButton}>
          <Link to="/eventForm" className={classes.link}>
            Create Event
          </Link>
        </Button>
        <Button className={classes.attendButton}>
          <Link to="/upcoming" className={classes.link}>
            Attend Event
          </Link>
        </Button>
      </Container>
      <Container className={classes.footer}>
        <p>Designed by Team GUCCI @ 2021</p>
      </Container>
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