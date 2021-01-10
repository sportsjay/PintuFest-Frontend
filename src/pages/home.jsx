import React, {Component, useState} from "react";
import { Container, Typography } from "@material-ui/core";
import { Animate }  from 'react-simple-animate';
//import redux
import { useSelector } from "react-redux";

//import components
import Banner from "../components/home/banner";

//import game pages here based on days

export default function Home() {
  const authToken = useSelector((state) => state.admin.authToken);

  return (
    <Container style={styles.root}>
      <div style={styles.block}>
          <div style={styles.block}>
            <Animate
              play={true}
              duration = "5"
              end={{ opacity: 1, filter: 'blur(0)' }}
              start={{ opacity: 0, filter: 'blur(10px)' }}
            >
              <Typography  style={styles.title} >
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
            <p  style={styles.title} >
              GTD Unsolved
            </p>
            <div className="content" style={{ textAlign: "justify", fontFamily: 'XiaoWei', fontSize: 12 }}>
              <p style={{ margin: 0 }}>
              GTD Unsolved is a series of escape room-esque games where you are tasked to solve cases and figure out their underlying enigmatic stories along the way. Expect brain-teasing puzzles and tantalizing mysteries for you and your inquisitive friends and colleagues to discover!
              </p>
            </div>
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
    fontFamily: "EastSea"
  },
  block: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "90%",
    paddingTop: 50,
    paddingBottom: 50
  },
};
