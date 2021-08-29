import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, TextField } from '@material-ui/core';


const EventForm = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();

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
            label="Event date"
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