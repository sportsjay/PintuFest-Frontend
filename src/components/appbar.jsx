import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function TopAppBar(props) {
  //extract routes
  const routes = props.routes;
  const position = props.position;
  //initialize styles
  const classes = useStyles();
  return (
    <AppBar position={position}>
      <Toolbar className={classes.root}>
        {routes.map((route) => (
          <Link key={route.id} to={route.path}>
            <Button>
              <Typography>{route.name}</Typography>
            </Button>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}
