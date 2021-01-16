import React, { useEffect, useState } from "react";
import {
  TextField,
  Container,
  FormControl,
  Button,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";

//import redux
import { useSelector, useDispatch } from "react-redux";
import {
  setAdminLoginAction,
  setAdminLogoutAction,
} from "../actions/admin-action";

//api routes
import { ADMIN_API } from "../api-routes/admin.api";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "80vh",
    width: "80%",
    backgroundColor: "white",
  },
  textInput: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: "red",
  },
}));

export default function AdminLogin() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const authToken = useSelector((state) => state.admin.authToken);
  const [username, setUsername] = useState(""); //cache username input
  const [password, setPassword] = useState(""); //cache password input

  useEffect(() => {}, [authToken]);

  return (
    <Container className={classes.root}>
      {authToken !== "none" ? (
        <form>
          <Link to="/">
            <Button
              variant="outlined"
              onClick={() => {
                //Call logout API
                axios
                  .post(ADMIN_API.LOGOUT)
                  .then((res) => {
                    alert(res.data);
                    dispatch(setAdminLogoutAction());
                  })
                  .catch((error) => console.log(error));
              }}
            >
              Logout
            </Button>
          </Link>
          <Link to="/admin-page">
            <Button variant="outlined">Page</Button>
          </Link>
        </form>
      ) : (
        <FormControl>
          <TextField
            className={classes.textInput}
            variant="outlined"
            label="Admin Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
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
              axios
                .post(ADMIN_API.LOGIN, {
                  username: username,
                  password: password,
                })
                .then((res) => {
                  alert(res.data.notification);
                  dispatch(setAdminLoginAction(res.data.token));
                })
                .catch((error) => console.log(error));
              //Reset after submission
              setUsername("");
              setPassword("");
            }}
            style={{ textTransform: "none" }}
          >
            Submit
          </Button>
        </FormControl>
      )}
    </Container>
  );
}
