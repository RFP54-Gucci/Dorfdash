import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import samples from './samples.js';
import Mylist from './Mylist.js';


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

  // ------------- states -----------------
  const [ myEventList, setMyList ] = useState([]);

  const addEvent = (evt) => {
    let myList = [];
    myList.push(evt);
    setMyList(myEventList.concat(myList));
    // console.log(myList);
  }

  return (
    <div>
      {console.log(myEventList)}
      <Container maxWidth="sm" className={classes.root}>
        <h1>Dorfdash</h1>
        <h3>Upcoming events</h3>
        <div className="container-slide">
          {samples.map((event) => (
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent className={classes.content}>
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
                  <Button size="small" className={classes.button} onClick={() => addEvent(event)}>Attend</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </Container>
      <Mylist myEventList={myEventList} setMyList={setMyList}/>
    </div>
  );
};

export default Upcoming;