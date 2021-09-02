import { useState, useContext } from 'react';
import { Context } from '../../_Context/Context';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

const EventForm = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      marginTop: 40,
    },
    container: {
      height: 700,
      padding: 0,
    },
    button: {
      backgroundColor: '#20A46B',
      color: 'white',
      marginTop: 20,
      marginBottom: 40,
    },
    input: {
      marginBottom: 20,
    },
    validate: {
      color: 'red',
      fontStyle: 'italic',
      fontSize: 12,
      height: 10,
    },
  }));

  const classes = useStyles();

  // --------------- states --------------------
  const [ eventName, setEventName ] = useState('');
  const [ eventDate, setEventDate] = useState('');
  const [ eventTime, setEventTime ] = useState('');
  const [ eventLocation, setEventLocation ] = useState('');
  const [ eventDes, setEventDes ] = useState('');
  const [ validation, setValidation ] = useState('');

  // const [ validateName, setValidateName ] = useState('.');
  // const [ validateDate, setValidateDate ] = useState('.');
  // const [ validateTime, setValidateTime ] = useState('.');
  // const [ validateLocation, setValidateLocation ] = useState('.');

  const { currentUser } = useContext(Context);

  // ------------ switch routes ---------------
  let history = useHistory();

  // ---------- onChange funcs ------------
  const handleEventName = (e) => {
    e.preventDefault();
    setEventName(e.target.value);
    // setValidateName('.');
  };

  const handleEventDate = (date) => {
    date.preventDefault();
    setEventDate(date.target.value);
    // console.log(new Date(date.timeStamp * 1000).toDateString());
    // setValidateDate('.');
  };

  const handleEventTime = (time) => {
    time.preventDefault();
    setEventTime(time.target.value);
    // console.log(new Date(time.timeStamp * 1000));
    // console.log(time);
    // setValidateTime('.');
  };

  const handleEventLocation = (e) => {
    e.preventDefault();
    setEventLocation(e.target.value);
    // setValidateLocation('.');
  };

  const handleEventDes = (e) => {
    e.preventDefault();
    setEventDes(e.target.value);
  };

  // -------- axios post new event ----------
  const handleSubmit = () => {
    // if (eventName === '') {
    //   return setValidateName('Please enter the event name!');
    // } else if (eventDate === '') {
    //   return setValidateDate('Please enter the event date!');
    // } else if (eventTime === '') {
    //   return setValidateTime('Please enter the event time!');
    // } else if (eventLocation === '') {
    //   return setValidateLocation('Please enter the event location!');
    // }
    if (eventName === '' || eventDate === '' ||
    eventTime === '' || eventLocation === '') {
      return setValidation('Please enter all required (*) fileds!');
    }

    let hostEmail = currentUser.email;
    // console.log(eventName, hostEmail, eventDate, eventTime, eventDes, eventLocation);
    axios.post('http://localhost:3100/data/events', {
      event_name: eventName,
      host_email: hostEmail,
      date: eventDate,
      time: eventTime,
      description: eventDes,
      location: eventLocation
    })
      .then((res) => {
        console.log('successfully create new event!');
        history.push('/upcoming');
      })
      .catch((err) => { console.log(err) });
  }

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

        </div>
        <div className={classes.input}>
        <TextField
            id="outlined-size-small"
            // label="Event date*"
            variant="outlined"
            size="small"
            type="date"
            onChange={(e) => handleEventDate(e)}
          />
          {/* <div className={classes.validate}>{validateDate}</div> */}
        </div>
        <div className={classes.input}>
          <TextField
            id="outlined-size-small"
            // label="Event time*"
            variant="outlined"
            size="small"
            type="time"
            onChange={(e) => handleEventTime(e)}
          />
          {/* <div className={classes.validate}>{validateTime}</div> */}
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
          {/* <div className={classes.validate}>{validateLocation}</div> */}
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
        <div className={classes.validate}>{validation}</div>
        <Button className={classes.button} onClick={() => handleSubmit()}>Create event</Button>
      </form>
      <Footer/>
    </Container>
  );
};

export default EventForm;