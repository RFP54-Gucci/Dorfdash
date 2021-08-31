import { Context } from '../../_Context/Context.js';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import samples from './samples.js';

const Upcoming = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 375,
      height: 770,
      borderColor: '#ECECEC',
      borderStyle: 'solid',
      overflowX: 'scroll',
      marginBottom: 25,
    },
    card: {
      marginBottom: 20,
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

  // ---------- adding events to my list ----------
  const { myEventList, setMyList, eventIdArr, setEventIdArr } = useContext(Context);

  const addEvent = (evt) => {
    let myList = [];
    let idArr = [];
    if (eventIdArr.indexOf(evt.event_id) < 0) {
      idArr.push(evt.event_id);
      setEventIdArr(eventIdArr.concat(idArr));
      myList.push(evt);
      setMyList(myEventList.concat(myList));
    }
    // console.log(eventIdArr);
  };

  // ------------ switch routes ---------------
  let history = useHistory();

  const handleDetails = () => {
    history.push('/eventDetails');
  };

  const handleAttendingEvent = () => {
    history.push('/riderForm');
  };

  const handleAttendedEvent = () => {
    // history.push('/eventSummary');
  };

  // --------- checking if already attended --------
  const checkAttended = (event) => {
    if (eventIdArr.indexOf(event.event_id) < 0) {
      addEvent(event);
      handleAttendingEvent();
    }
    return handleAttendedEvent();
  };

  return (
    <div>
      <Container maxWidth="sm" className={classes.root}>
        <h1>Dorfdash</h1>
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
                <CardActions className={classes.action}>
                  <Button size="small" className={classes.button} onClick={() => checkAttended(event)}>Attend</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Upcoming;