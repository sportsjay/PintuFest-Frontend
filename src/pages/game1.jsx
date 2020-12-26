import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../components/styles.css';

export default function Game1() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container id="container">
        <img src ="./images/image_banner.jpg" width="100%" />
        <div className="style"  >Escape Room 1</div> 
      </Container>
    </React.Fragment>
  );
}
