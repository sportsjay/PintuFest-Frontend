import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core";

//import route file
import { routes } from "./routes";

//import components
// import TopAppBar from "./components/appbar";
import TopBar from "./components/topbar";
import Footer from "./components/footer";

//import pages
import Home from "./pages/home";
import Registration from "./pages/registration";
import AdminLogin from "./pages/adminlogin";
// import Game1 from "./pages/game1";
import Details from "./pages/gamedesc";
import ComingSoon from "./pages/comingsoon";
import FAQ from "./pages/faq";
import Promotion from "./pages/promotion";
import RoomStatus from "./pages/roomstatus";
import ComingSoon2 from "./pages/coming2";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#000",
    color: "white",
    // width: "100vw",
    overflow: "hidden",
    paddingTop: 100,
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
      <div className={classes.content}>
        <TopBar position="relative" routes={routes} />
        <Switch>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/comingsoon/2">
            <ComingSoon />
          </Route>
          <Route path="/comingsoon/3">
            <ComingSoon2/>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/admin-login-route">
            <AdminLogin />
          </Route>
          <Route path="/buynow">
            <Registration />
          </Route>
          <Route path="/nowplaying">
            <Details />
          </Route>
          <Route path="/promotion">
            <Promotion />
          </Route>
          <Route path="/room-status">
            <RoomStatus />
          </Route>
          <Route render={() => <Redirect to="/comingsoon" />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
