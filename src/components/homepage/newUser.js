import { useState } from 'react';
import { Container, AppBar, Typography, Button } from '@material-ui/core';

const NewUser = () => {

  // unsure if i need functions to link to pages

  return (
    <Container>
      <AppBar position="static">
        <Typography variant="h3" className="header header-title">
          Dorfdash
        </Typography>
      </AppBar>
      <Container className="outline userContainer" display="flex" flexDirection="column">
        <Button className="userBtn">
          Create Event
        </Button>
        <Button className="userBtn">
          Attend Event
        </Button>
      </Container>
      <Container className="footer">
        <p>Designed by Team GUCCI @ 2021</p>
      </Container>
    </Container>
  )
}

export default NewUser;