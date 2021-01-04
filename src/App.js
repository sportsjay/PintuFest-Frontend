import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";

//import route file
import { routes } from "./routes";

//import components
import TopAppBar from "./components/appbar";
import TopBar from "./components/topbar";
import Footer from "./components/footer";

//import pages
import Home from "./pages/home";
import Registration from "./pages/registration";
import Game1 from "./pages/game1";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#111111',
    color: 'white',
    width: '100vw',
    paddingTop: 100,
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
      <TopBar position="relative" routes={routes} />
      <div className={classes.content}>
       {/* <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/game1">
            <Game1 />
          </Route>
        </Switch>
       */}
       <Switch>
          <Route path="/game3" exact>
            <Game1 />
          </Route>
          <Route path="/game2">
            <Registration />
          </Route>
          <Route path="/game1">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
