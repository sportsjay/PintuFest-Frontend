import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
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
        <div>
          <Typography variant="h3">Title</Typography>
        </div>
        <div>
          {routes.map((route) => (
            <Link key={route.id} to={route.path}>
              <Button
                variant="contained"
                color="primary"
                style={{ textTransform: "none", marginRight: 10 }}
              >
                {route.name}
              </Button>
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
