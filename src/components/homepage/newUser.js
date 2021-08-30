import { useState } from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';

const NewUser = () => {
  return (
    <Container>
      <AppBar position="static">
        <Typography variant="h3" className="header header-title">
          Dorfdash
        </Typography>
      </AppBar>
      <Container className="footer">
        <p>Designed by Team GUCCI @ 2021</p>
      </Container>
    </Container>
  )
}

export default NewUser;