import React from "react";
import { Container } from "@material-ui/core";

//import components
import HorizontalLabelPositionBelowStepper from "../components/home/progress";

//import game pages here based on days

export default function Home() {
  const day = 1;
  const roomDescriptions = [
    {
      room: 1,
      description: "Game 1 adalah case file tentang sesuatu",
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
    <div>
      Home
      {/* Test your development page below */}
      {/* 
      """"""""""
      Code Test
      """"""""""
      */}
      {/* get a progress slider */}
      {day === 1 ? (
        <React.Fragment>
          {roomDescriptions.map((room) => (
            <HorizontalLabelPositionBelowStepper
              title={"Room " + room.room}
              description={room.description}
              timer={room.time}
              isAdmin={false} //use for admins only
            />
          ))}
        </React.Fragment>
      ) : (
        <HorizontalLabelPositionBelowStepper
          isAdmin={false} //use for admins only
        />
      )}
    </div>
  );
}
