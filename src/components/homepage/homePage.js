import SignUpForm from './signupform.js';

import { Container, AppBar, Typography } from '@material-ui/core';

const Homepage = () => {
  return (
    <Container>
      <AppBar position="static">
        <Typography variant="h3" className="header header-title">
          Dorfdash
        </Typography>
      </AppBar>
      <SignUpForm />
      <Container className="footer">
        <p>Designed by Team GUCCI @ 2021</p>
      </Container>
    </Container>
  )
}

export default Homepage;