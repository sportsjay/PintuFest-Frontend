import React from "react";
import { Container, Typography } from "@material-ui/core";

//import redux
import { useSelector } from "react-redux";

//import components
import HorizontalLabelPositionBelowStepper from "../components/home/progress";
import Banner from "../components/home/banner";

//import game pages here based on days

export default function Home() {
  const day = 1;

  const authToken = useSelector((state) => state.admin.authToken);
  const roomDescriptions = [
    {
      room: 1,
      description: "description 1",
      time: "100",
    },
    {
      room: 2,
      description: " description 2",
      time: "",
    },
    {
      room: 3,
      description: " description 3",
      time: "",
    },
  ]; //test data

  return (
    <Container style={styles.root}>
      <Banner gameNumber="1" />
      <Banner gameNumber="2" />
      <Banner gameNumber="3" />
      {day === 1 ? (
        <React.Fragment>
          {roomDescriptions.map((room) => (
            <HorizontalLabelPositionBelowStepper
              title={"Room " + room.room}
              description={room.description}
              timer={room.time}
              isAdmin={authToken !== "none" ? true : false} //use for admins only
            />
          ))}
        </React.Fragment>
      ) : (
        <HorizontalLabelPositionBelowStepper
          isAdmin={authToken !== "none" ? true : false} //use for admins only
        />
      )}
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
