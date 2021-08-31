import { Container} from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.Footer}>
    <p>Designed by Team GUCCI @ 2021</p>
    </Container>
  );
}

export default Footer;