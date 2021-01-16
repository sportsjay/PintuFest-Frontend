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
    borderRadius: "2px",
    backgroundColor: "#000",
    flex: 1,
    height: "70vh",
  },
  textTop: {
    fontFamily: "EastSea",
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    color: "#941616",
    textTransform: "uppercase",
    fontWeight: "bold",
    //backgroundColor: "rgba(68, 31, 19, 1)",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
  textBottom: {
    fontFamily: "XiaoWei",
    textAlign: "center",
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    // backgroundColor: "rgba(68, 31, 19, 1)",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
    },
  },
  img: {
    boxSizing: "border-box",
    width: "100%",
    height: "auto",
    display: "block",
    padding: "5%",
    backgroundColor: "#71533d",
    backgroundImage: "url(woodenframe.jpeg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: "6px double #4c3829",
    boxShadow:
      "0 0 0 40px rgba(0, 0, 0, 0.4) inset, 0 0 0 5px rgba(68, 31, 19, 1), 0 0 20px rgba(17, 17, 17, 1) inset",
    outline: "2px solid #333",
    outlineOffset: "0px",
  },
  imgContainer: {
    maxWidth: "400px",
    height: "auto",
  },
}));

export default function Banner(props) {
  const classes = useStyles();

  // props
  const gameNumber = props.gameNumber;
  const title = props.title || "Title";
  const status = props.status || "COMING SOON";
  const image = props.image;
  return (
    <div className={classes.banner}>
      <div
        style={{
          flex: 1,
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          className={classes.textTop}
          style={{ display: "inline-block" }}
        >
          {title}
        </Typography>
      </div>
      <Link to={`game${gameNumber}`}>
        <Container className={classes.imgContainer} style={{ flex: 4 }}>
          <img src={image} className={classes.img} alt="Coming Soon!"></img>
        </Container>
      </Link>
      <Typography
        className={classes.textBottom}
        style={{ flex: 0.5, display: "flex", alignItems: "center" }}
      >
        {status}
      </Typography>
    </div>
  );
}
