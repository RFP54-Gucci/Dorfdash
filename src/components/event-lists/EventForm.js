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

// Jinhoo
import logo from '../../assets/logo.png';
import useStyles from '../components_styles.js';

const EventForm = () => {
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     '& .MuiTextField-root': {
  //       margin: theme.spacing(1),
  //       width: '25ch',
  //     },
  //     marginTop: 40,
  //   },
  //   container: {
  //     height: 700,
  //     padding: 0,
  //   },
  //   button: {
  //     backgroundColor: '#20A46B',
  //     color: 'white',
  //     marginTop: 20,
  //     marginBottom: 40,
  //   },
  //   input: {
  //     marginBottom: 20,
  //   },
  //   validate: {
  //     color: 'red',
  //     fontStyle: 'italic',
  //     fontSize: 12,
  //     height: 10,
  //   },
  // }));

  const classes = useStyles();

  // --------------- states --------------------
  const [ eventName, setEventName ] = useState('');
  const [ eventDate, setEventDate] = useState('');
  const [ eventTime, setEventTime ] = useState('');
  const [ eventLocation, setEventLocation ] = useState('');
  const [ eventDes, setEventDes ] = useState('');
  const [ validation, setValidation ] = useState('');

  const { currentUser, setMyList, setEventData } = useContext(Context);

  // ------------ switch routes ---------------
  let history = useHistory();

  // ---------- onChange funcs ------------
  const handleEventName = (e) => {
    e.preventDefault();
    setEventName(e.target.value);
  };

  const handleEventDate = (date) => {
    date.preventDefault();
    setEventDate(date.target.value);
  };

  const handleEventTime = (time) => {
    time.preventDefault();
    setEventTime(time.target.value);
  };

  const handleEventLocation = (e) => {
    e.preventDefault();
    setEventLocation(e.target.value);
  };

  const handleEventDes = (e) => {
    e.preventDefault();
    setEventDes(e.target.value);
  };

  // -------- axios post new event ----------
  const handleSubmit = () => {
    if (eventName === '' || eventDate === '' ||
    eventTime === '' || eventLocation === '') {
      return setValidation('Please fill all required (*) fileds!');
    }

    let hostEmail = currentUser.email;
    axios.post('http://localhost:3100/data/events', {
      event_name: eventName,
      host_email: hostEmail,
      date: eventDate,
      time: eventTime,
      description: eventDes,
      location: eventLocation
    })
    .then(() => {
      axios.get(`http://localhost:3100/data/events/user/${currentUser.email}`)
      .then((res) => {
        let driverEvents = res.data.driver_events || [];
        let hostEvents = res.data.host_events || [];
        let riderEvents =  res.data.rider_events || [];
        let temp = [...driverEvents, ...hostEvents, ...riderEvents];
        setMyList(temp);
      })
    })
    .then(() => {
      axios.get('http://localhost:3100/data/events')
      .then((res) => {
        setEventData(res.data);
      })
    })
      .then((res) => {
        console.log('successfully create new event!');
        history.push('/upcoming');
      })
      .catch((err) => { console.log(err) });
  }

  return (
    // <Container maxWidth="xs" className={classes.container}>
    //   <Header/>
    //   <h3>Create a new event</h3>
    //   <form className={classes.root} noValidate autoComplete="off">
    //     <div className={classes.input}>
    //       <TextField
    //         id="outlined-size-small"
    //         label="Event name*"
    //         variant="outlined"
    //         size="small"
    //         fullWidth
    //         onChange={handleEventName}
    //       />

    //     </div>
    //     <div className={classes.input}>
    //     <TextField
    //         id="outlined-size-small"
    //         // label="Event date*"
    //         variant="outlined"
    //         size="small"
    //         type="date"
    //         onChange={(e) => handleEventDate(e)}
    //       />
    //       {/* <div className={classes.validate}>{validateDate}</div> */}
    //     </div>
    //     <div className={classes.input}>
    //       <TextField
    //         id="outlined-size-small"
    //         // label="Event time*"
    //         variant="outlined"
    //         size="small"
    //         type="time"
    //         onChange={(e) => handleEventTime(e)}
    //       />
    //       {/* <div className={classes.validate}>{validateTime}</div> */}
    //     </div>
    //     <div className={classes.input}>
    //       <TextField
    //         id="outlined-size-small"
    //         label="Event location*"
    //         multiline
    //         rows={2}
    //         variant="outlined"
    //         size="small"
    //         fullWidth
    //         onChange={handleEventLocation}
    //       />
    //       {/* <div className={classes.validate}>{validateLocation}</div> */}
    //     </div>
    //     <div className={classes.input}>
    //       <TextField
    //         id="outlined-size-small"
    //         label="Event description"
    //         multiline
    //         rows={4}
    //         variant="outlined"
    //         size="small"
    //         fullWidth
    //         onChange={handleEventDes}
    //       />
    //     </div>
    //     <div className={classes.validate}>{validation}</div>
    //     <Button className={classes.button} onClick={() => handleSubmit()}>Create event</Button>
    //   </form>
    //   <Footer/>
    // </Container>


    // Jinhoo change
     <Container maxWidth="xs" className={classes.div2}>
       <img alt="logo2" className={classes.logo} src={logo}/>
       <Container maxWidth="xs" className={classes.form2}>
        <h3 className={classes.title2}>Create a new event</h3>
        <form className={classes.inputForm} noValidate autoComplete="off">
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
          <Button className={classes.solidBtn} onClick={() => handleSubmit()}>Create event</Button>
        </form>
      </Container>
    </Container>
  );
};

export default EventForm;