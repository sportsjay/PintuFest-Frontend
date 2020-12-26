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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("s")]: {
      flexDirection: "row",
      height: "100vh",
    },
  },
  information: {},
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
  const [input, setInput] = useState("");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.information}></Container>
      <Container className={classes.form}>
        <FormControl>
          <TextField onChange={(e) => setInput(e.target.value)} value={input} />
          <Button
            variant="contained"
            style={{ textTransform: "none" }}
            onClick={() => setInput("")}
          >
            Submit
          </Button>
          <Typography>{input}</Typography>
          <TimeSlot />
          <TimeSlot />
          <TimeSlot />
          <TimeSlot />
          <TimeSlot />
        </FormControl>
      </Container>
    </div>
  );
}
