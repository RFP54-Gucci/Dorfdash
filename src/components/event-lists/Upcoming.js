import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../../_Context/Context.js';
import { useContext, useState } from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';
import TransitionsModal from '../events/modal.js';

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
      minHeight: 110,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 12,
    },
    attendBtn: {
      color: '#20A46B',
    },
    myListBtn: {
      color: 'white',
      marginLeft: 230,
      marginTop: 10,
    },
  }));

  const classes = useStyles();

  // ------------ switch routes ---------------
  let history = useHistory();

  const handleMyList = () => {
    history.push('/myList');
  };

  const handleAttendingEvent = () => {
    history.push('/riderForm');
  };

  const handleAttendedEvent = () => {
    history.push('/eventSummary');
  };

  // ---------- adding events to my list ----------
  const { myEventList, setMyList, eventIdArr, setEventIdArr, eventData,
    currentEvent, setCurrentEvent, currentUser } = useContext(Context);

  // console.log('this is from upcoming', myEventList, eventIdArr);

   const addEvent = (evt) => {
     let myList = [];
     let idArr = [];
     if (eventIdArr.indexOf(evt.event_id) < 0) {
       idArr.push(evt.event_id);
       setEventIdArr(eventIdArr.concat(idArr));
       myList.push(evt);
       setMyList(myEventList.concat(myList));
     }
   };

   // --------- checking if already attended --------
  //  const [ noDup, setDup ] = useState(true);
  //  const checkAttended = (evt) => {
  //   setCurrentEvent(evt);
  //   for (var i = 0; i < myEventList.length; i++) {
  //     if (evt.event_id === myEventList[i].event_id) {
  //       setDup(false);
  //     }
  //   }
  //   if (noDup) {
  //     handleAttendingEvent();
  //     console.log('no duplicates');
  //   } else {
  //     handleAttendedEvent();
  //     console.log('trying to add duplicates');
  //   }
  //  };

  // ----------- checking duplacates ----------------
  const checkAttended = (event) => {
    setCurrentEvent(event);
    if (eventIdArr.indexOf(event.event_id) < 0) {
      addEvent(event);
      handleAttendingEvent();
    } else {
      handleAttendedEvent();
    }
  };

  return (
    <div>
      <Container maxWidth="xs" className={classes.root}>
        <Header/>
        <Container maxWidth="xs" className={classes.container}>
        <Button className={classes.myListBtn} size="small" onClick={handleMyList}>My event list</Button>
        <h3>Upcoming events</h3>
        <div className="container-slide">
          {eventData.map((event) => (
            <Card className={classes.card} key={event.index}>
              <CardActionArea>
                <CardContent>
                  <Typography className={classes.title}>
                    {event.event_name}
                  </Typography>
                  <Typography className={classes.body}>
                    {event.name}
                  </Typography>
                  <Typography className={classes.body}>
                  {`${event.date}  ${event.time}`}
                  </Typography>
                  <Typography className={classes.body}>
                    {event.location}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.attendBtn} size="small" onClick = {() => checkAttended(event)}>Attend</Button>
                  <TransitionsModal selectedEvent={event}/>
                </CardActions>
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