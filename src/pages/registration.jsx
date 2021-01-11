import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  makeStyles,
  Button,
  Typography,
  FormControl,
  FormControlLabel,
  TextField,
  RadioGroup,
  Select,
  MenuItem,
  withStyles
} from "@material-ui/core";

//import components
import TimeSlot from "../components/registration/slotComponent";
import ConfirmationModal from "../components/registration/confirmationmodal";

//import redux cache

//import api for registration
import { GAMES_API } from "../api-routes/games.api";

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
  root: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 40,
    fontFamily: "XiaoWei",
  },
  information: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: "80vw",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  form: {
    backgroundColor: "#111111",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
    maxWidth: 700,
  },
  selectPageButtonGroup: {
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  formcontrollabel: {
    margin: 0,
  },
  dropdown: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  multilineColor: {
    borderColor: '#fff',
    borderWidth: 10,
    color:'red',
    backgroundColor: 'white'
  }
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

export default function Registration() {
  //states
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [selectTimeSlot, setSelectTimeSlot] = useState(null);
  const [time, setTime] = useState("");
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [price, setPrice] = useState(0);
  const [username, setUsername] = useState("");
  const [usernames, setUsernames] = useState([]);
  const [email, setEmail] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [refreshOnSubmit, setRefreshOnSubmit] = useState(false);
  const [clickLink, setClickLink] = useState(false);

  useEffect(() => {
    // get data from DB
    axios
      .get(GAMES_API.GET_GAME_BY_NAME("The Invitation")) // change by day
      .then((res) => {
        setTimeSlots(res.data);
      })
      .catch((error) => console.error("Error! " + error));
  }, [refreshOnSubmit]);

  const classes = useStyles();
  // submit form function
  const submitform = () => {
    if (selectTimeSlot === null) {
      alert("Please select a timeslot! Thank you!");
    } else {
      // call submit function
      // sends username and array of gameId upon slot booking
      axios
        .post(GAMES_API.BOOK_GAME_SLOT, {
          username: username,
          email: email,
          usernames: usernames,
          gameId: selectTimeSlot,
        })
        .then((res) => alert(res.data))
        .catch((error) => alert(error.response.data));
      setRefreshOnSubmit(!refreshOnSubmit);

    }
    // reset after submit
    setUsername("");
    setEmail("");
    setTime("");
    setSelectTimeSlot(null);
    closeModal();
  };

  const maxTicket = 7;
  // open modal function
  const openModal = () => {
    if (username === "") {
      alert("Please fill your username!");
    } else {
      setOpenConfirmationModal(true);
      // count price
      setPrice(selectTimeSlot === null ? 0 : 6);
    }
  };

  // close modal function
  const closeModal = () => {
    setOpenConfirmationModal(false);
    setNumberOfTickets(1);
    setSelectTimeSlot(null);
    setClickLink(false);
    setTime("");
  };

  // select number of ticket function
  const setNumberOfTicketsFunc = (event) => {
    setUsernames([username]);
    let tempUsernames = [username];
    setNumberOfTickets(event.target.value);
    if (event.target.value !== 1) {
      for (let i = 0; i < event.target.value - 1; i++) {
        tempUsernames.push(username);
      }
    }
    setUsernames(tempUsernames);
    console.log(usernames);
  };

  function numOfTicket (){
    let arr = []
    for(let i= 1; i <= maxTicket; i++){
      arr.push(i)
    }
    return(
      arr.map((ticket)=>(
          <MenuItem value={ticket}>{ticket}</MenuItem>
        )
      )
    )
  }

  return (
    <div className={classes.root}>
      <div>
        <Typography
          variant="h4"
          style={{ textAlign: "center", fontFamily: "XiaoWei", margin: 20 }}
        >
          BUY TICKETS
        </Typography>
        <div>
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
              fontFamily: "EastSea",
              color: "#941616",
            }}
          >
            GTD Unsolved:
          </Typography>
          <Typography
            variant="h2"
            style={{
              textAlign: "center",
              fontFamily: "EastSea",
              color: "#941616",
            }}
          >
            The Invitation
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: 20,
          }}
        >
          <Typography style={{ fontFamily: "XiaoWei" }}>
            Date: 16 January 2021
          </Typography>
          <Typography style={{ fontFamily: "XiaoWei" }}>
            Duration: 2 hours
          </Typography>
          <Typography style={{ fontFamily: "XiaoWei", marginTop:10, fontWeight:'bold' }}>
            Price:
          </Typography>
          <Typography style={{ fontFamily: "XiaoWei" }}>
            Individual: $6/person
          </Typography>
          <Typography style={{ fontFamily: "XiaoWei" }}>
            Bundle of 4: $22/group
          </Typography>
          <Typography style={{ fontFamily: "XiaoWei" }}>
            Bundle of 7: $35/group
          </Typography>
          <Link
            key={3}
            to={"/promotion"}
            style={{
              textDecoration: "none",
              padding: 0,
              margin: 0,
              marginBottom: 50,
            }}
          >
            <Typography
              style={{
                fontFamily: "XiaoWei",
                color: "#941616",
                marginTop: 10,
                textDecoration: "underline",
              }}
            >
              About referral code
            </Typography>
          </Link>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdB2Jeq6VNKzL_S-J3WI6RanVVFvKPLB56SHvUTR94YHcqNmg/viewform?usp=sf_link"
              style={{
                textDecoration: "none",
                padding: 0,
                margin: 0,
                marginBottom: 50,
              }}
            >
            <ColorButton>BUY TICKET</ColorButton>
          </a>
          {/* Mapping Escape Room 1 timeslots */}
        </div>
      </div>
    </div>
  );
}
