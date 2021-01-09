import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  banner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(5),
  },
  img: {
    boxSizing: "border-box",
    width: "100%",
    height: "auto",
    display: "block",
    padding: "5%",
    backgroundColor: "#A67B5B",
    backgroundImage: "url(woodenframe.jpeg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: "6px double #483C32",
    boxShadow:
      "0 0 0 40px rgba(244,240,236,0.4) inset, 0 0 0 5px rgb(180, 130, 90), 0 0 20px rgba(0,0,0,0.8) inset",
    outline: "2px solid #333",
    outlineOffset: "0px",
  },
}));

export default function Banner(props) {
  const classes = useStyles();

  // props
  const gameNumber = props.gameNumber;
  const title = props.title || "Title";
  return (
    <div className={classes.banner}>
      <Typography className={classes.text}>{title}</Typography>
      <Link to={`game${gameNumber}`}>
        <img src="./images/game1_1.jpg" className={classes.img}></img>
      </Link>
      <Typography className={classes.text}>Now Showing</Typography>
    </div>
  );
}
