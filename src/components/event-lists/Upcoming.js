import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const Upcoming = () => {
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
      
    </Container>
  );
};

export default Upcoming;