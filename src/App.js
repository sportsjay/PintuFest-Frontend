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
import Game1 from "./pages/game1";
// import Game2 from "./pages/game2";
import Details from "./pages/gamedesc";
import ComingSoon from "./pages/comingsoon";
import FAQ from "./pages/faq";
import Promotion from "./pages/promotion";
import AdminPage from "./pages/adminpage";

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
          <Route path="/comingsoon">
            <ComingSoon />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/admin-login-route">
            <AdminLogin />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/game1">
            <Game1 />
          </Route>
          <Route path="/game2">
            <Details />
          </Route>
          <Route path="/promotion">
            <Promotion />
          </Route>
          <Route path="/admin-page">
            <AdminPage />
          </Route>
          <Route render={() => <Redirect to="/comingsoon" />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
