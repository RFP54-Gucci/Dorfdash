import React from 'react';
// import Container from '@material-ui/core/Container';
import {Typography } from '@material-ui/core';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <Typography variant="h3" className={classes.header}>
        Dorfdash
    </Typography>
  );
}

export default Header;


