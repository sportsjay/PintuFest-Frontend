import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "../components/styles.css";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function Game1() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <div id="container">
        <img src="./images/image_banner.jpg" width="100%" height="auto"/>
        <div className="style">Escape Room 1</div>
        <div className="description">Week 3</div>
      </div> */}
      <div id="box-color">
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper className={classes.paper} id="no_padding" id="grid_color">
              <div id="container">
                <img src="./images/image_banner.jpg" width="100%" height="auto"/>
                <div className="style">Escape Room 1</div>
                <div className="description">Week 3</div>
              </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} id="no_padding" id="grid_color">
                <p className="subheading">120 Minutes</p>
                <div className="content">Follow all the clues to find out the mystery behind all of it</div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} id="no_padding" id="grid_color">
                <img src="../images/game1_1.jpg" width="80%" height="auto"/>
              </Paper>
            </Grid>
          </Grid>
        </div>
        </div>
    </React.Fragment>
  );
}
