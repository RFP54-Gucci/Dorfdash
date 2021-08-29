import { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const EventForm = () => {
  const [ eventName, setEventName ] = useState('');
  const [ eventHost, setEventHost ] = useState('');
  // const [ eventDate, setEventDate] = useState('');
  // const [ eventTime, setEventTime ] = useState('');
  const [ eventLocation, setEventLocation ] = useState('');
  const [ eventDes, setEventDes ] = useState('');

  // ------------ styling -------------
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    container: {
      maxWidth: 345,
      maxHeight: 600,
      borderColor: '#ECECEC',
      borderStyle: 'solid',
      marginBottom: 10,
    },
  }));

  const classes = useStyles();

  // ---------- onChange funcs ------------
  const handleEventName = (e) => {
    e.preventDefault();
    setEventName(e.target.value);
    // console.log(eventName);
  };

  const handleEventHost = (e) => {
    e.preventDefault();
    setEventHost(e.target.value);
    // console.log(eventHost);
  };

  // const handleEventDate = (date) => {
  //   setEventDate(date);
  // };

    // const handleEventTime = (time) => {
  //   setEventTime(time);
  // };

  const handleEventLocation = (e) => {
    e.preventDefault();
    setEventLocation(e.target.value);
    // console.log(eventLocation);
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
  //     .then((res) => {
  //       res.send('successfully create new event!');
  //     })
  //     .catch((err) => { console.log(err) });
  // }

  return (
    <Container maxWidth="sm" className={classes.container}>
      <h1>Dorfdash</h1>
      <h3>Create a new event</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-size-small"
            label="Event name"
            variant="outlined"
            size="small"
            fullWidth
            onChange={handleEventName}
          />
        </div>
        <div>
          <TextField
            id="outlined-size-small"
            label="Event host"
            variant="outlined"
            size="small"
            fullWidth
            onChange={handleEventHost}
          />
        </div>
        <div>
        <TextField
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="date"
          />
        </div>
        <div>
          <TextField
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="time"
          />
        </div>
        <div>
          <TextField
            id="outlined-size-small"
            label="Event location"
            multiline
            rows={2}
            variant="outlined"
            size="small"
            fullWidth
            onChange={handleEventLocation}
          />
        </div>
        <div>
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
        <Button color="primary" /* onSubmit={handleSubmit} */>Create event</Button>
      </form>
    </Container>
  );
};

export default EventForm;