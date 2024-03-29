import React, { useState } from "react";
import {
  Container,
  Divider,
  Typography,
  makeStyles,
  Radio,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "60vw",
    padding: theme.spacing(1),
    backgroundColor: "lightblue",
    boxShadow: "2px 2px 5px grey",
    //margin:10,
  },
  details: {
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: 14,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
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
  checkbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function TimeSlot(props) {
  const classes = useStyles();

  const id = props.id || 0; //timeslot id
  const name = props.name || "game 1"; //game name
  const room = props.room || 1; //room number
  const timeslot = props.timeslot || "00:00 - 00:00"; //game timeslot
  const numSlot = props.numSlot || 1; //game room number of slots left
  const numParticipants = props.numParticipants || 0; //current game slots participants

  const [check, setCheck] = useState([]);

  return (
    <div className={classes.card} key={id}>
      {/* if locked in then cannot change */}
      <div className={classes.checkbox}>
        <Radio {...props} color="primary" />
      </div>
      <Divider orientation="vertical" flexItem />
      <Container className={classes.details}>
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
          Capacity: {numSlot - numParticipants} persons left
        </Typography>
      </Container>
    </div>
  );
}
