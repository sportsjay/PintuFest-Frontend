import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../components/styles.css';
import BannerImage from '../components/banner_image';

export default function Game1() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container id="container">
        <BannerImage/>
        <div className="style">Escape Room 1</div> 
      </Container>
    </React.Fragment>
  );
}
