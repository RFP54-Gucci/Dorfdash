import { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';
import {Context} from '../../_Context/Context.js';



const EventForm = () => {
  const {eventData} = useContext(Context);

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    container: {
      height: 700,
      padding: 0,
    },
    button: {
      backgroundColor: '#20A46B',
      color: 'white',
      marginTop: 2,
    },
    input: {
      marginBottom: 15,
    },
    validate: {
      color: 'red',
      fontStyle: 'italic',
      fontSize: 12,
    },
  }));

  const classes = useStyles();

  // --------------- states --------------------
  const [ eventName, setEventName ] = useState('');
  const [ eventHost, setEventHost ] = useState('');
  const [ eventDate, setEventDate] = useState('');
  const [ eventTime, setEventTime ] = useState('');
  const [ eventLocation, setEventLocation ] = useState('');
  const [ eventDes, setEventDes ] = useState('');

  const [ validateName, setValidateName ] = useState('.');
  const [ validateHost, setValidateHost ] = useState('.');
  const [ validateDate, setValidateDate ] = useState('.');
  const [ validateTime, setValidateTime ] = useState('.');
  const [ validateLocation, setValidateLocation ] = useState('.');

  // ------------ switch routes ---------------
  let history = useHistory();

  const handleCreate = () => {
    history.push('/upcoming');
  }

  // ---------- onChange funcs ------------
  const handleValidation = () => {
    if (eventName === '') {
      setValidateName('Please enter the event name!');
    }
    if (eventHost === '') {
      setValidateHost('Please enter the event host!');
    }
    if (eventDate === '') {
      setValidateDate('Please enter the event date!');
    }
    if (eventTime === '') {
      setValidateTime('Please enter the event time!');
    }
    if (eventLocation === '') {
      setValidateLocation('Please enter the event location!');
    }
  };

  const handleEventName = (e) => {
    e.preventDefault();
    setEventName(e.target.value);
    setValidateName('.');
  };

  const handleEventHost = (e) => {
    e.preventDefault();
    setEventHost(e.target.value);
    // console.log(eventHost);
    setValidateHost('.');
  };

  const handleEventDate = (date) => {
    date.preventDefault();
    setEventDate(date);
    // console.log(date);
    setValidateDate('.');
  };

  const handleEventTime = (time) => {
    time.preventDefault();
    setEventTime(time);
    // console.log(time);
    setValidateTime('.');
  };

  const handleEventLocation = (e) => {
    e.preventDefault();
    setEventLocation(e.target.value);
    // console.log(eventLocation);
    setValidateLocation('.');
  };

  const handleEventDes = (e) => {
    e.preventDefault();
    setEventDes(e.target.value);
    // console.log(eventDes);
  };

  // const handleSubmit = () => {
  //   axios.post('', {
  //     event_name: eventName,
  //     event_host: eventHost,
  //     event_date: eventDate,
  //     event_time: eventTime,
  //     event_location: eventLocation,
  //     event_des: eventDes
  //   })
  //     .then(handleValidation())
  //     .then((res) => {
  //       res.send('successfully create new event!');
  //       history.push('/upcoming');
  //     })
  //     .catch((err) => { console.log(err) });
  // }

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Header/>
      <h3 styles={{ marginTop: 20 }}>Create a new event</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.input}>
          <TextField
            id="outlined-size-small"
            label="Event name*"
            variant="outlined"
            size="small"
            fullWidth
            onChange={handleEventName}
          />
          <div className={classes.validate}>{validateName}</div>
        </div>
        <div className={classes.input}>
          <TextField
            id="outlined-size-small"
            label="Event host*"
            variant="outlined"
            size="small"
            fullWidth
            onChange={handleEventHost}
          />
          <div className={classes.validate}>{validateHost}</div>
        </div>
        <div className={classes.input}>
        <TextField
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="date"
            onChange={handleEventDate}
          />
          <div className={classes.validate}>{validateDate}</div>
        </div>
        <div className={classes.input}>
          <TextField
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="time"
            onChange={handleEventTime}
          />
          <div className={classes.validate}>{validateTime}</div>
        </div>
        <div className={classes.input}>
          <TextField
            id="outlined-size-small"
            label="Event location*"
            multiline
            rows={2}
            variant="outlined"
            size="small"
            fullWidth
            onChange={handleEventLocation}
          />
          <div className={classes.validate}>{validateLocation}</div>
        </div>
        <div className={classes.input}>
          <TextField
            id="outlined-size-small"
            label="Event description"
            multiline
            rows={4}
            variant="outlined"
            size="small"
            fullWidth
            onChange={handleEventDes}
          />
        </div>
        <Button className={classes.button} onClick={() => {handleCreate(); }}>Create event</Button>
      </form>
      <Footer/>
    </Container>
  );
};

export default EventForm;