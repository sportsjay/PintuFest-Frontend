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
import AdminLogin from "./pages/adminlogin";
import Game1 from "./pages/game1";
import ComingSoon from "./pages/comingsoon";
import FAQ from "./pages/faq";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#111111",
    color: "white",
    paddingTop: 120,
    //inject theme here
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
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
        <Switch>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/comingsoon">
            <ComingSoon />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/game1">
            <Game1 />
          </Route>
          <Route path="/admin-kalo-mau-login-disini">
            <AdminLogin />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
