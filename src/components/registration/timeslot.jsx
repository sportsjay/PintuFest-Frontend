import React, { useState } from "react";
import { Container, Divider, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    width: "60vw",
    padding: theme.spacing(1),
    backgroundColor: "#e0e0e0",
  },
  details: {
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: 14,
    color: "black",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  list: {
    color: "black",
  },
  dividerHorizontal: {
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  dividerVertical: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      marginRight: 10,
      marginLeft: 10,
    },
  },
}));

export default function TimeSlot(props) {
  const classes = useStyles();

  const [participantsAppear, setParticipantsAppear] = useState(false);
  const id = props.id || 0; //timeslot id
  const name = props.name || "game 1"; //game name
  const room = props.room || 1; //room number
  const timeslot = props.timeslot || "00:00 - 00:00"; //game timeslot
  const numSlot = props.numSlot || 0; //game room number of slots left
  const numParticipants = props.numParticipants || 0; //current game slots participants
  const participants = props.participants || [""]; //who is in the room

  return (
    <Container
      className={classes.card}
      key={id}
      onClick={() => setParticipantsAppear(!participantsAppear)}
    >
      {participantsAppear ? (
        <div>
          {participants.map((participant, idx) => (
            <Typography className={classes.list}>
              {idx + 1}. {participant}
            </Typography>
          ))}
        </div>
      ) : (
        <Container className={classes.details}>
          <Typography variant="inherit">Game: {name}</Typography>
          <Divider
            orientation="horizontal"
            className={classes.dividerHorizontal}
          />
          <Divider
            orientation="vertical"
            flexItem
            className={classes.dividerVertical}
          />
          <Typography variant="inherit">Room: {room}</Typography>
          <Divider
            orientation="horizontal"
            className={classes.dividerHorizontal}
          />
          <Divider
            orientation="vertical"
            flexItem
            className={classes.dividerVertical}
          />
          <Typography variant="inherit">Time Slot: {timeslot}</Typography>
          <Divider
            orientation="horizontal"
            className={classes.dividerHorizontal}
          />
          <Divider
            orientation="vertical"
            flexItem
            className={classes.dividerVertical}
          />
          <Typography variant="inherit">
            Available slot: {numSlot - numParticipants}
          </Typography>
        </Container>
      )}
    </Container>
  );
}
