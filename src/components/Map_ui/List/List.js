import React from 'react';
import useStyles from './styles';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <h1>Dorfdash</h1>
    </Container>
  );
}

export default Header;