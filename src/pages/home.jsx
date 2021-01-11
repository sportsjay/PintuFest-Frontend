import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, makeStyles, Button, withStyles } from "@material-ui/core";
import { Animate } from "react-simple-animate";

//import components
import Banner from "../components/home/banner";

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#941616",
    color: "#000",
    borderStyle: "solid",
    borderColor: "#941616",
    borderWidth: 2,
    borderRadius: 0,
    fontFamily: "XiaoWei",
    fontWeight: "bold",

    "&:hover": {
      color: "#941616",
      backgroundColor: "#000",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  text: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.4rem",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container style={styles.root}>
      <div style={styles.block}>
        <div style={styles.block}>
          <Animate
            play={true}
            duration="5"
            end={{ opacity: 1, filter: "blur(0)" }}
            start={{ opacity: 0, filter: "blur(10px)" }}
          >
            <Typography style={styles.title}>
              Are you ready to solve the Unsolved?
            </Typography>
          </Animate>
        </div>
      </div>
      <Banner
        gameNumber="1"
        title="The Invitation"
        status="16 January 2021"
        image="./images/game_1_assets/game1_1x1.png"
      />
      <Banner
        gameNumber="2"
        title="A Death is Announced"
        image="./images/comingsoon_1x1.png"
      />
      <Banner
        gameNumber="3"
        title="Second Chance"
        image="./images/comingsoon_1x1.png"
      />
      <div style={styles.block}>
        <div style={styles.block}>
          
          <p style={styles.title}>GTD Unsolved</p>
          <div
            className="content"
            style={{
              textAlign: "justify",
              fontFamily: "XiaoWei",
              fontSize: 12,
            }}
          >
            <p className={classes.text} style={{ margin: 0 }}>
              GTD Unsolved is a series of escape room-esque games where you are
              tasked to solve cases and figure out their underlying enigmatic
              stories along the way. Expect brain-teasing puzzles and
              tantalizing mysteries for you and your inquisitive friends and
              colleagues to discover!
            </p>
          </div>
          <h1 style={{ fontSize: 50, color: "white", fontFamily: "EastSea", marginBottom: 20, marginTop: 50 }}>
            PRICING
          </h1>
          <Typography style={{ fontFamily: "XiaoWei" }}>
          Individual: $6/person
          </Typography>
          <Typography style={{ fontFamily: "XiaoWei" }}>
          Bundle of 4: $22/group
          </Typography>
          <Typography style={{ fontFamily: "XiaoWei" }}>
          Bundle of 7: $35/group
          </Typography>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdB2Jeq6VNKzL_S-J3WI6RanVVFvKPLB56SHvUTR94YHcqNmg/viewform?usp=sf_link"
              style={{
                textDecoration: "none",
                padding: 0,
                margin: 0,
                marginBottom: 50,
                marginTop: 50,
              }}
            >
              <ColorButton>BUY TICKET</ColorButton>
            </a>
        </div>
      </div>
    </Container>
  );
}

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#000",
    color: "white",
  },
  title: {
    margin: 0,
    marginTop: 20,
    color: "white",
    fontSize: 50,
    textAlign: "center",
    fontFamily: "EastSea",
  },
  block: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "90%",
    paddingTop: 50,
    paddingBottom: 50,
  },
};
