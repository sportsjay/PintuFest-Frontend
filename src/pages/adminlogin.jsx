import React, { useState } from "react";
import {
  TextField,
  Container,
  FormControl,
  Button,
  makeStyles,
} from "@material-ui/core";

//import redux
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
  },
  textInput: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function AdminLogin() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const authToken = useSelector((state) => state.admin.authToken);
  const [username, setUsername] = useState(""); //cache username input
  const [password, setPassword] = useState(""); //cache password input

  return (
    <Container className={classes.root}>
      <FormControl>
        <TextField
          className={classes.textInput}
          variant="outlined"
          label="Admin Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <TextField
          className={classes.textInput}
          variant="outlined"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button
          variant="outlined"
          onClick={() => {
            //Call login api
            //Reset after submission
            setUsername("");
            setPassword("");
          }}
          style={{ textTransform: "none" }}
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
}
