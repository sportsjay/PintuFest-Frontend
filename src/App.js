import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";

//import route file
import { routes } from "./routes";

//import components
import TopAppBar from "./components/appbar";
import Footer from "./components/footer";

//import pages
import Home from "./pages/home";
import Registration from "./pages/registration";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    //inject theme here

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

function App() {
  //initialize styles
  const classes = useStyles();
  return (
    <Router>
      <TopAppBar position="relative" routes={routes} />
      <div className={classes.content}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
