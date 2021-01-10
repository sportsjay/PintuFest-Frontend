import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../components/styles.css";

const images = [
  {
    url: "../images/game1_5.png",
    title: "Escape Room 1",
    width: "30%",
    link: "/game1",
  },
  {
    url: "../images/game1_6.jpg",
    title: "Escape Room 2",
    width: "30%",
    link: "/game1",
  },
  {
    url: "../images/game1_4.jpg",
    title: "Escape Room 3",
    width: "30%",
    link: "/game1",
  },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,

    width: "100vw",
    flexGrow: 1,
    justifyContent: "center",
    fontFamily: "XiaoWei",
  },
  image: {
    //  position: 'relative',
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      // '& $imageTitle': {
      //   border: '4px solid currentColor',
      // },
    },
  },
  focusVisible: {},
  imageButton: {
    // position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    //  position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    // position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    //  position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function Game1() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div id="box-color">
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item md={12} xs={12}>
              <Paper className={classes.paper} id="grid_color">
                <div id="container" style={styles.header}>
                  <img
                    alt="asset 1"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    src="./images/Thun.gif"
                    height="120%"
                    width="200%"
                  />
                  <div style={styles.title} className="style">
                    The Invitation
                  </div>
                  <div className="description">16 January 2021</div>
                </div>
              </Paper>
            </Grid>

            <div id="column_reverse">
              <Grid item md={7} xs={12}>
                <Paper className={classes.paper} id="grid_color1">
                  <p className="subheading">90 Minutes</p>
                  <div className="content" style={{ padding: 50 }}>
                    When Gio found out that his friend, Jeni, has been missing
                    for days, he decided to involve the highly acclaimed Student
                    Detective Club in the search for his friend. By tracing her
                    activities, clues and hints begin to come to light... or do
                    they? Be prepared to unravel a string of hidden truths once
                    you dive into the intriguing details of Jeni's
                    disappearance!
                  </div>
                </Paper>
              </Grid>
              <Grid item md={5} xs={12}>
                <Paper className={classes.paper} id="grid_color2">
                  <img
                    alt="asset 2"
                    src="../images/game1_1.jpg"
                    width="auto"
                    height="100%"
                  />
                </Paper>
              </Grid>
            </div>
            <div id="column">
              <Grid item md={6} xs={12}>
                <Paper className={classes.paper} id="grid_color2">
                  <img
                    src="../images/game1_1.jpg"
                    alt="game1_2"
                    width="auto"
                    height="100%"
                  />
                </Paper>
              </Grid>
              <Grid item md={6} xs={12}>
                <Paper className={classes.paper} id="grid_color1">
                  <p className="subheading">Work with a team of 5-8</p>
                  <div className="content">LOCATION: NTU</div>
                </Paper>
              </Grid>
            </div>
            <Grid item xs={12} id="grid_size">
              <Paper className={classes.paper} id="grid_color1">
                <div id="coloring" className={classes.root}>
                  {images.map((image) => (
                    <ButtonBase
                      focusRipple
                      key={image.title}
                      className={classes.image}
                      focusVisibleClassName={classes.focusVisible}
                      style={{
                        width: image.width,
                        height: "450px",
                        marginRight: "1%",
                        marginTop: "5px",
                        marginLeft: "1%",
                      }}
                      href={image.link}
                    >
                      <span
                        className={classes.imageSrc}
                        style={{
                          backgroundImage: `url(${image.url})`,
                        }}
                      />
                      <span className={classes.imageBackdrop} />
                      <span className={classes.imageButton}>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          color="inherit"
                          className={classes.imageTitle}
                        >
                          {image.title}
                          <span className={classes.imageMarked} />
                        </Typography>
                      </span>
                    </ButtonBase>
                  ))}
                  <Grid item xs={12}>
                    <Paper className={classes.paper} id="grid_color3">
                      <Button
                        id="position"
                        variant="contained"
                        color="secondary"
                        href="/game1"
                      >
                        REGISTER NOW
                      </Button>
                    </Paper>
                  </Grid>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}

const styles = {
  header: {
    width: "100vw",
    height: "40vh",
    objectFit: "cover",
  },
  title: {
    fontSize: 70,
    fontFamily: "EastSea",
    color: "white",
  },
};
