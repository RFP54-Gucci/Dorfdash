import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Upcoming = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      height: 130,
    },
    content: {
      padding: 8,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
  }));

  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent className={classes.content}>
            <Typography className={classes.title}>
              Event name
            </Typography>
            <Typography>
              Event host
            </Typography>
            <Typography>
              Event date {`&`} time
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Attend</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default Upcoming;