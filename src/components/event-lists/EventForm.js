import { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';




const EventForm = () => {
  const [ eventName, setEventName ] = useState('');
  // const [ eventHost, setEventHost ] = useState('');
  const [ eventDate, setEventDate] = useState(new Date("2014-08-18T21:11:54"));
  // const [ eventDate, setEventDate ] = useState('');
  // const [ eventTime, setEventName ] = useState('');
  // const [ eventName, setEventName ] = useState('');
  // const [ eventName, setEventName ] = useState('');

  // ------------ styling -------------
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();

  // ---------- onChange funcs ------------
  const handleEventName = (e) => {
    e.preventDefault();
    setEventName(e.target.value);
    // console.log(eventName);
  }

  const handleEventDate = (date) => {
    setEventDate(date);
  }

  return (
    <Container maxWidth="sm">
      <h1>Dorfdash</h1>
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
          />
        </div>
        <div>
        <TextField
            id="outlined-size-small"
            label="Event Date"
            variant="outlined"
            size="small"
          />
        </div>
        <div>
          <TextField
            id="outlined-size-small"
            label="Event time"
            variant="outlined"
            size="small"
          />
        </div>
        <div>
          <TextField
            id="outlined-size-small"
            label="Event location"
            variant="outlined"
            size="small"
            fullWidth
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
          />
        </div>
        <Button color="primary">Create event</Button>
      </form>
    </Container>
  );
};

export default EventForm;