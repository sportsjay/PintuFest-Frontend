import React from 'react';
import { Container } from '@material-ui/core';

export default function Footer() {
  return (
    <div style={styles.root}>
      <h5>GTD XXIII</h5>
      IG | FB | WEB
    </div>
  );
}

const styles = {
  root: {
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#111111',
      color: 'white',
      width: '100vw',
      
      //fontFamily: 'XiaoWei'
    },

}