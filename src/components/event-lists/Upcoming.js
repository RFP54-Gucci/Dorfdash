import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import samples from './samples.js';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

const Upcoming = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: 0,
    },
    container: {
      height: 650,
      overflowX: 'scroll',
    },
    card: {
      margin: 20,
    },
    content: {
      paddingBottom: 2,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 12,
    },
    action: {
      height: 30,
      paddingBottom: 10,
      paddingTop: 2,
    },
    button: {
      color: '#20A46B',
    }
  }));

  const classes = useStyles();

  // ------------ switch routes ---------------
  let history = useHistory();

  const handleDetails = () => {
    history.push('/eventDetails');
  };

  return (
    <div>
      <Container maxWidth="xs" className={classes.root}>
        <Header/>
        <Container maxWidth="xs" className={classes.container}>
        <h3>Upcoming events</h3>
        <div className="container-slide">
          {samples.map((event) => (
            <Card className={classes.card} key={event.event_id}>
              <CardActionArea>
                <CardContent className={classes.content} onClick={handleDetails}>
                  <Typography className={classes.title}>
                    {event.event_name}
                  </Typography>
                  <Typography className={classes.body}>
                    {event.event_host}
                  </Typography>
                  <Typography className={classes.body}>
                  {`${event.event_date}  ${event.event_time}`}
                  </Typography>
                  <Typography className={classes.body}>
                    {event.event_location}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        </Container>
        <Footer/>
      </Container>
    </div>
  );
};

export default Upcoming;