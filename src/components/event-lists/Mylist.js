import { Context } from '../../_Context/Context.js';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';


// Jinhoo changes
import useStyles from '../components_styles.js';
import logo from '../../assets/logo.png';

const Mylist = () => {
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     padding: 0,
  //     height: 700,
  //   },
  //   container: {
  //     height: 650,
  //     overflowX: 'scroll',
  //   },
  //   card: {
  //     margin: 20,
  //   },
  //   content: {
  //     paddingBottom: 2,
  //   },
  //   title: {
  //     fontSize: 14,
  //     fontWeight: 'bold',
  //   },
  //   body: {
  //     fontSize: 12,
  //   },
  //   action: {
  //     height: 30,
  //     paddingBottom: 10,
  //     paddingTop: 2,
  //   },
  //   button: {
  //     color: '#20A46B',
  //     marginTop: 10,
  //   },
  //   remove: {
  //     color: '#20A46B',
  //   },
  //   browse: {
  //     marginBottom: 15,
  //     marginTop: 10,
  //     color: '#20A46B',
  //   },
  // }));

  const classes = useStyles();

  const { myEventList, setMyList, eventIdArr, setEventIdArr, currentUser } = useContext(Context);

  // ------------ removing event --------------
  // const removeEvent = (eventId) => {
  //   for (var i = 0; i < myEventList.length; i++) {
  //     if (myEventList[i].event_id === eventId) {
  //       setMyList(myEventList.slice(0, i).concat(myEventList.slice(i + 1)));
  //     }
  //   }
  //   var removedIndex = eventIdArr.indexOf(eventId);
  //   setEventIdArr(eventIdArr.slice(0, removedIndex).concat(eventIdArr.slice(removedIndex + 1)));
  // };

  // ----------- delete request --------------
  const deleteEvent = (event) => {
    axios.delete(`http://localhost:3100/data/events/user/`, { eventName: event.event_name, email: currentUser.email })
      .then((res) => {
        axios.get(`http://localhost:3100/data/events/user/${currentUser.email}`)
        .then((res) => {
          let temp = [...res.data.driver_events, ...res.data.rider_events, ...res.data.host_events];
          setMyList(temp);
        })
      })
      .catch((err) => { console.log(err) });
  }

  // ------------ switching routes --------------
  let history = useHistory();

  const handleCreate = () => {
    history.push('/eventForm');
  };

  const handleBrowse = () => {
    history.push('/upcoming');
  };

  const handleAttendedEvent = () => {
    history.push('/eventSummary');
  };

  // console.log(currentUser.email);

  // --------- get request -----------
  return (
    // <Container maxWidth="xs" className={classes.root}>
    //   <Header/>
    //   <Container maxWidth="xs" className={classes.container}>
    //     <h3>My events</h3>
    //     <div className="container-slide">
    //     {myEventList.length === 0 ? <div>You're not attending any events right now, please select some events or create one! </div> :
    //       myEventList.map((event) => (
    //         <Card className={classes.card}>
    //           <CardActionArea>
    //             <CardContent className={classes.content} onClick={handleAttendedEvent}>
    //               <Typography className={classes.title}>
    //                 {event.event_name}
    //               </Typography>
    //               <Typography className={classes.body}>
    //                 {event.event_host}
    //               </Typography>
    //               <Typography className={classes.body}>
    //               {`${event.event_date}  ${event.event_time}`}
    //               </Typography>
    //               <Typography className={classes.body}>
    //                 {event.event_location}
    //               </Typography>
    //             </CardContent>
    //             <CardActions className={classes.action}>
    //               <Button size="small" className={classes.remove} onClick={() => removeEvent(event.event_id)}>Remove</Button>
    //             </CardActions>
    //           </CardActionArea>
    //         </Card>
    //       ))}
    //     </div>
    //     <Button size="small" className={classes.button} onClick={handleCreate}>Create new event</Button><br/>
    //     <Button size="small" color="primary" className={classes.browse} onClick={handleBrowse}>Browse upcoming events</Button>
    //   </Container>
    //   <Footer/>
    // </Container>



    // update with new css
    <Container maxWidth="xs" className={classes.div2}>
      <img alt="logo2" className={classes.logo} src={logo}/>
      <Container maxWidth="xs" className={classes.formSlide}>
        <h1 className={classes.title}>My events</h1>
        <div className="container-slide">
        {myEventList.length === 0 ? <div>You're not attending any events right now, please select some events or create one! </div> :
          myEventList.map((event) => (
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent className={classes.content} onClick={handleAttendedEvent}>
                  <Typography className={classes.title2}>
                    {event.event_name}
                  </Typography>
                  <Typography className={classes.font}>
                    {event.host_name}
                  </Typography>
                  <Typography className={classes.font}>
                  {`${event.date}  ${event.time}`}
                  </Typography>
                  <Typography className={classes.font}>
                    {event.location}
                  </Typography>
                </CardContent>
                <CardActions className={classes.action}>
                  <Button size="small" className={classes.remove} onClick={() => deleteEvent(event)}>Remove</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          ))}
        </div>
        <Button size="small" className={classes.links} onClick={handleCreate}>Create new event</Button><br/>
        <Button size="small" color="primary" className={classes.links} onClick={handleBrowse}>Browse upcoming events</Button>
      </Container>
    </Container>
  );
};

export default Mylist;