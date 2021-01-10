import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WebIcon from "@material-ui/icons/Web";

export default function Footer() {
  return (
    <div style={styles.root}>
      <Typography variant="h5">GTD XXIII</Typography>
      <Typography>
        <IconButton>
          <a
            href="https://instagram.com/pintugtd?igshid=kyeu1mowknr"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon style={{ color: "white" }} />
          </a>
        </IconButton>
        |
        <IconButton>
          <a href="http://fb.me/PINTUGTD" target="_blank" rel="noreferrer">
            <FacebookIcon style={{ color: "white" }} />
          </a>
        </IconButton>
        |
        <IconButton>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <WebIcon style={{ color: "white" }} />
          </a>
        </IconButton>
      </Typography>
    </div>
  );
}

const styles = {
  root: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#000",
    color: "white",
    width: "100vw",
  },
};
