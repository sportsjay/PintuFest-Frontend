import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../components/styles.css";
// const images = [
//   {
//     url: "../images/game1_5.png",
//     title: "Escape Room 1",
//     width: "30%",
//     link: "/game1",
//   },
//   {
//     url: "../images/game1_6.jpg",
//     title: "Escape Room 2",
//     width: "30%",
//     link: "/game1",
//   },
//   {
//     url: "../images/game1_4.jpg",
//     title: "Escape Room 3",
//     width: "30%",
//     link: "/game1",
//   },
// ];
const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#941616",
    color: "#000",
    borderStyle: "solid",
    borderColor: "#941616",
    borderWidth: 2,
    borderRadius: 0,
    fontFamily: "XiaoWei",
    fontWeight: "bold",

    "&:hover": {
      color: "#941616",
      backgroundColor: "#000",
    },
  },
}))(Button);
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
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
    //flexDirection:'column',
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

export default function GameDesc(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div id="box-color">
        <div className={classes.root}>
          <div id="container" style={styles.header}>
            <img
              alt="Header"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              src="./images/Thun.gif"
              height="120%"
              width="200%"
            />
            <div style={styles.title} className="style">
              The Invitation
            </div>
            <div className="description">16 January 2021</div>
          </div>
          <div>
            <div style={styles.details}>
              <p style={{ margin: 0, fontSize: 20 }}>Duration: 120 minutes</p>
              <p style={{ margin: 0, fontSize: 20 }}>Difficulty: X X X X -</p>
              <p style={{ margin: 0, fontSize: 20 }}>Capacity: 5-7 person(s)</p>
            </div>
            <div style={styles.center}>
              <Link
                key={3}
                to={"/register"}
                style={{
                  textDecoration: "none",
                  padding: 0,
                  margin: 0,
                  marginBottom: 50,
                }}
              >
                <ColorButton

                //onClick={()=>{props.history.push('/register')}}
                >
                  BUY TICKET
                </ColorButton>
              </Link>
            </div>
          </div>
          <div style={styles.block}>
            <div style={styles.block}>
              <p
                style={{
                  margin: 0,
                  marginTop: 20,
                  color: "#941616",
                  fontSize: 28,
                  textAlign: "center",
                }}
              >
                Can you solve the case?
              </p>
              <div className="content" style={{ textAlign: "justify" }}>
                <p style={{ margin: 0 }}>
                  Hi there! You cannot hide from the Invitation.
                </p>
              </div>
            </div>
          </div>
          <div style={styles.block}>
            <div style={styles.block}>
              <p style={{ margin: 0 }} className="subheading">
                Trailer
              </p>
              <div className="content" style={{ textAlign: "justify" }}>
                video
              </div>
            </div>
          </div>
          <div style={styles.block}>
            <div style={styles.block}>
              <p style={{ margin: 0 }} className="subheading">
                Synopsis
              </p>
              <div className="content" style={{ textAlign: "justify" }}>
                <p style={{ margin: 0 }}>
                  When Gio found out that his friend, Jeni, has been missing for
                  days, he decided to involve the highly acclaimed Student
                  Detective Club in the search for his friend. By tracing her
                  activities, clues and hints begin to come to light... or do
                  they?
                </p>
                <p>
                  Be prepared to unravel a string of hidden truths once you dive
                  into the intriguing details of Jeni's disappearance!
                </p>
              </div>
            </div>
            <img
              alt="asset 1"
              style={{
                objectFit: "cover",
                height: "50vh",
                width: "80vw",
                marginBottom: 20,
              }}
              src="./images/g1_1.jpeg"
              height="120%"
              width="200%"
            />
          </div>
          <div style={styles.block}>
            <div style={styles.block}>
              <p style={{ margin: 0, marginTop: 20 }} className="subheading">
                To be the member of Student Detective Club,
              </p>
              <p style={{ margin: 0, marginTop: 20 }} className="subheading">
                You have to:
              </p>
              <div className="content" style={{ textAlign: "justify" }}>
                <p style={{ margin: 0 }}>be courageous</p>
                <p>have an eye like sherlock</p>
              </div>
              <Link
                key={3}
                to={"/register"}
                style={{
                  textDecoration: "none",
                  padding: 0,
                  margin: 0,
                  marginBottom: 50,
                }}
              >
                <ColorButton

                //onClick={()=>{props.history.push('/register')}}
                >
                  REGISTER
                </ColorButton>
              </Link>
            </div>
          </div>
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
    fontSize: "calc(50px + 3vw)",
    fontFamily: "EastSea",
    color: "white",
  },
  block: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "90%",
    paddingBottom: "50px",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  details: {
    margin: 50,
    borderColor: "#941616",
    borderWidth: 10,
  },
};