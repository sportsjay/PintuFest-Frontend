import React from "react";
import { Container } from "@material-ui/core";

//import redux
import { useSelector } from "react-redux";

//import components
import Banner from "../components/home/banner";

//import game pages here based on days

export default function Home() {
  const authToken = useSelector((state) => state.admin.authToken);

  return (
    <Container style={styles.root}>
      <Banner
        gameNumber="1"
        title="The Invitation"
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
    </Container>
  );
}

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#111111",
    color: "white",
  },
};
