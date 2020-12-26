import React, { useState } from "react";
import {
  Card,
  Container,
  Divider,
  Typography,
  FormControl,
  makeStyles,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "60vw",
    padding: theme.spacing(1),
    backgroundColor: "#e0e0e0",
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

  const name = props.name || "game 1"; //game name
  const duration = props.duration || "0 hours"; //game duration
  const timeslot = props.timeslot || "00:00 - 00:00"; //game timeslot
  const numSlot = props.numSlot || 1; //game room number of slots left

  return (
    <Card className={classes.card}>
      {/* if locked in then cannot change */}
      <div className={classes.checkbox}>
        <FormControl>
          <FormControlLabel
            control={<Checkbox onChange={() => {}} color="primary" />}
          />
        </FormControl>
      </div>
      <Divider orientation="vertical" flexItem />
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
        <Typography variant="inherit">Duration: {duration}</Typography>
        <Divider
          orientation="horizontal"
          className={classes.dividerHorizontal}
        />
        <Divider
          orientation="vertical"
          flexItem
          className={classes.dividerVertical}
        />
        <Typography variant="inherit">Available slot: {numSlot}</Typography>
      </Container>
    </Card>
  );
}
