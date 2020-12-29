import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Button,
  Typography,
  FormControl,
  Card,
  InputLabel,
  TextField,
} from "@material-ui/core";

//import components
import TimeSlot from "../components/registration/timeslot";
import CardLink from "../components/registration/cardlink";

//import redux cache
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  information: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: "80vw",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  form: {
    backgroundColor: "#8aa3cf",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80vw",
  },
}));

export default function Registration() {
  const selectedTimeSlotsRedux = useSelector(
    (state) => state.registrationReducer.selectedTimeSlot
  );

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const timeSlots = [
    {
      id: parseInt(Math.random() * 1000),
      name: "game 1",
      duration: "1 hour",
      timeslot: "11:00 - 12:00",
      numSlot: 6,
    },
    {
      id: parseInt(Math.random() * 1000),
      name: "game 2",
      duration: "1 hour",
      timeslot: "11:00 - 12:00",
      numSlot: 6,
    },
    {
      id: parseInt(Math.random() * 1000),
      name: "game 3",
      duration: "1 hour",
      timeslot: "11:00 - 12:00",
      numSlot: 6,
    },
  ];

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.information}>
        <CardLink></CardLink>
        <CardLink></CardLink>
        <CardLink></CardLink>
      </Container>
      <Container className={classes.form}>
        <FormControl>
          <TextField
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <TextField
            label="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {timeSlots.map((timeslot) => (
            <React.Fragment key={timeslot.id}>
              <TimeSlot
                key={timeslot.id}
                id={timeslot.id}
                name={timeslot.name}
                duration={timeslot.duration}
                timeslot={timeslot.timeslot}
                numSlot={timeslot.numSlot}
              />
            </React.Fragment>
          ))}
          <Button
            variant="contained"
            style={{ textTransform: "none", marginTop: 10 }}
            onClick={() => {
              // call submit function

              // reset after submit
              setUsername("");
              setEmail("");
              console.log(selectedTimeSlotsRedux);
            }}
          >
            Submit
          </Button>
        </FormControl>
      </Container>
    </div>
  );
}
