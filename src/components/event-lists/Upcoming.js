import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import samples from './samples.js';

const Upcoming = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      height: 130,
      marginBottom: 20,
    },
    content: {
      paddingBottom: 2,
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
    },
    body: {
      fontSize: 12,
    },
    action: {
      height: 30,
      paddingBottom: 10,
      paddingTop: 2,
    },
  }));

  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      {samples.map((event) => (
        <Card className={classes.root}>
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
              <Button size="small" color="primary">Attend</Button>
            </CardActions>
          </CardActionArea>
        </Card>
      ))}
    </Container>
  );
};

export default Upcoming;