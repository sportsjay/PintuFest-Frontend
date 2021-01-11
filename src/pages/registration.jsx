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
    setOpenConfirmationModal(true);
    // count price
    setPrice(selectTimeSlot === null ? 0 : 6);
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
          <Typography style={{ fontFamily: "XiaoWei" }}>
            Price: $6/person
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
              any discounts?
            </Typography>
          </Link>
          {/* Mapping Escape Room 1 timeslots */}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          backgroundColor: "#111111",
          width: "80vw",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: 20,
          borderRadius: 20,
        }}
      >
        <Container className={classes.form}>
          {/* make 1 component for each escape room */}
          <FormControl component="fieldset">
            {timeSlots.length > 0 ? (
              <React.Fragment>
                <p style={{ fontFamily: "XiaoWei", textAlign:"center", fontSize: 25 }}>
                  Choose a timeslot
                </p>
                <RadioGroup
                  value={selectTimeSlot}
                  onChange={(e) => {
                    setSelectTimeSlot(e.target.value);
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {timeSlots.map((timeslot) => (
                    <React.Fragment key={timeslot.id}>
                      <React.Fragment key={timeslot.id}>
                        <FormControlLabel
                          onClick={() => {
                            setTime(timeslot.timeSlot);
                          }}
                          className={classes.formcontrollabel}
                          value={timeslot.id.toString()}
                          control={
                            <TimeSlot
                              id={timeslot.id.toString()}
                              name={timeslot.name}
                              room={timeslot.roomNumber}
                              timeslot={timeslot.timeSlot}
                              numSlot={timeslot.maxNumberOfParticipants}
                              numParticipants={timeslot.participants.length}
                            />
                          }
                        />
                      </React.Fragment>
                    </React.Fragment>
                  ))}
                </RadioGroup>
                <Typography style={{ fontFamily: "XiaoWei", textAlign: 'center' }}>
                 You have selected slot 09:00-11:00
                </Typography>
              </React.Fragment>
            ) : (
              <div style={{ textAlign: "center" }}>
                <Typography style={{ fontFamily: "XiaoWei" }}>
                  Sorry! All tickets for The Invitation are sold out.
                </Typography>
                <Typography style={{ fontFamily: "XiaoWei", margin: 5 }}>
                  Check out our upcoming games:
                </Typography>
                <Typography style={{ fontFamily: "EastSea", color: "#941616" }}>
                  -
                </Typography>
                <Typography
                  variant="h4"
                  style={{ fontFamily: "EastSea", color: "#941616" }}
                >
                  A Death Is Announced
                </Typography>
                <Typography style={{ fontFamily: "EastSea", color: "#941616" }}>
                  -
                </Typography>
                <Typography
                  variant="h4"
                  style={{ fontFamily: "EastSea", color: "#941616" }}
                >
                  Second Chance
                </Typography>
                <Typography style={{ fontFamily: "EastSea", color: "#941616" }}>
                  -
                </Typography>
              </div>
            )}
            {timeSlots.length > 0 ? (
              <React.Fragment>
                <TextField
                  variant="filled"
                  label="Name"
                  style={{
                    marginTop: 10,
                    backgroundColor: "white",
                    width: '80%',
                    alignSelf:'center',
                    borderRadius: 5,
                  }}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    console.log(e.target.value);
                  }}
                  value={username}
                />
                {selectTimeSlot !== null ? (
                  <div className={classes.dropdown}>
                    <Typography style={{ margin: 10,fontFamily: "XiaoWei",  }}>
                      Select Number of Tickets: 
                    </Typography>
                    <Select
                      style={{ color: "white", backgroundColor: "#941616" }}
                      id="select-number-ticket"
                      value={numberOfTickets}
                      onChange={setNumberOfTicketsFunc}
                    >
                      {numOfTicket()}
                    </Select>
                  </div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  style={{ textTransform: "none", marginTop: 10, width: '80%', maxWidth: 150, alignSelf:'center', backgroundColor:  "#941616", color: 'white' , fontFamily:'XiaoWei', fontWeight: 'bold'}}
                  onClick={openModal}
                >
                  BOOK NOW
                </Button>
                <ConfirmationModal
                  time={time}
                  clickLink={clickLink}
                  setClickLink={setClickLink}
                  open={openConfirmationModal}
                  numberOfTickets={numberOfTickets}
                  price={numberOfTickets === 1 ? price : 5.5 * numberOfTickets}
                  onClose={closeModal}
                  submitform={submitform}
                />
              </React.Fragment>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </FormControl>
        </Container>
      </div>
    </div>
  );
}
