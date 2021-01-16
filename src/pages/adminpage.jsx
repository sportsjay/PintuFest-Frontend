import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Typography } from "@material-ui/core";

// components
import TimeSlot from "../components/registration/timeslot";

// redux
import { useSelector } from "react-redux";

// api-route
import { GAMES_API } from "../api-routes/games.api";

export default function RoomStatus() {
  const [roomData, setRoomData] = useState([]);
  const [chooseGame, setChooseGame] = useState(["The Invitation"]);
  const isAdmin = useSelector((state) => state.admin.authToken);

  useEffect(() => {
    axios
      .get(GAMES_API.GET_GAME_BY_NAME(chooseGame))
      .then((res) => {
        setRoomData(res.data);
      })
      .catch((error) => alert(error));
  }, [chooseGame]);

  return (
    <div>
      {console.log(isAdmin)}
      {isAdmin === "none" ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1">ACCESS DENIED!</Typography>
        </div>
      ) : (
        <React.Fragment>
          <Container
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: 40,
              marginBottom: 40,
            }}
          >
            <Button
              variant="contained"
              onClick={() => setChooseGame("The Invitation")}
            >
              The Invitation
            </Button>
            <Button
              variant="contained"
              onClick={() => setChooseGame("A Death is Announced")}
            >
              A Death is Announced
            </Button>
            <Button
              variant="contained"
              onClick={() => setChooseGame("Second Chance")}
            >
              Second Chance
            </Button>
          </Container>
          <div>
            {roomData.map((data) => (
              <TimeSlot
                id={data.id}
                timeslot={data.timeSlot}
                name={data.name}
                room={data.room}
                numSlot={
                  data.maxNumberOfParticipants - data.participants.length
                }
                participants={data.participants}
              />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
