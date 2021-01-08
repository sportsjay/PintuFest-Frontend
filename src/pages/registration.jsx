import React, { useState, useEffect } from "react";
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
} from "@material-ui/core";

//import components
import TimeSlot from "../components/registration/slotComponent";
import ConfirmationModal from "../components/registration/confirmationmodal";

//import redux cache
import { useSelector, useDispatch } from "react-redux";
import {
  setResetTimeSlotAction,
  setSelectTimeSlotAction,
} from "../actions/registration-action";

//import api for registration
import { GAMES_API } from "../api-routes/games.api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 40,
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
    width: "100vw",
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
}));

export default function Registration() {
  const selectedTimeSlotsRedux = useSelector(
    (state) => state.registration.selectedTimeSlot
  );
  //redux actions
  const dispatch = useDispatch();
  //states
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [selectTimeSlot1, setSelectTimeSlot1] = useState(null);
  const [selectTimeSlot2, setSelectTimeSlot2] = useState(null);
  const [selectTimeSlot3, setSelectTimeSlot3] = useState(null);
  const [price, setPrice] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const [refCode, setRefCode] = useState("");
  const [timeSlots1, setTimeSlots1] = useState([]);
  const [timeSlots2, setTimeSlots2] = useState([]);
  const [timeSlots3, setTimeSlots3] = useState([]);

  useEffect(() => {
    // get data from DB
    axios
      .get(GAMES_API.GET_GAME_BY_NAME("The Invitation"))
      .then((res) => {
        setTimeSlots1(res.data);
      })
      .catch((error) => console.error("Error! " + error));
    axios
      .get(GAMES_API.GET_GAME_BY_NAME("A Death is Announced"))
      .then((res) => {
        setTimeSlots2(res.data);
      })
      .catch((error) => console.error("Error! " + error));
    axios
      .get(GAMES_API.GET_GAME_BY_NAME("Second Chance"))
      .then((res) => {
        setTimeSlots3(res.data);
      })
      .catch((error) => console.error("Error! " + error));
  }, []);

  const classes = useStyles();
  // submit form function
  const submitform = () => {
    if (
      selectedTimeSlotsRedux[0] === null &&
      selectedTimeSlotsRedux[1] === null &&
      selectedTimeSlotsRedux[2] === null
    ) {
      alert("Please select at least 1 timeslot! Thank you!");
    } else {
      // call submit function
      // sends username and array of gameId upon slot booking
      axios
        .post(GAMES_API.BOOK_GAME_SLOT, {
          username: username,
          email: email,
          // refcode: refCode,
          gameId: selectedTimeSlotsRedux,
        })
        .then((res) => alert(res.data.msg))
        .catch((error) => alert(error.response.data));
    }
    // reset after submit
    setUsername("");
    setEmail("");
    // setRefCode("");
    dispatch(setResetTimeSlotAction());
    setSelectTimeSlot1(null);
    setSelectTimeSlot2(null);
    setSelectTimeSlot3(null);
    closeModal();
  };

  // open modal function
  const openModal = () => {
    setOpenConfirmationModal(true);
    dispatch(setSelectTimeSlotAction(selectTimeSlot1));
    dispatch(setSelectTimeSlotAction(selectTimeSlot2));
    dispatch(setSelectTimeSlotAction(selectTimeSlot3));
    let countBook = 0;
    // count price
    selectedTimeSlotsRedux.map((item) =>
      item === null ? countBook : (countBook = countBook + 1)
    );
    setPrice(
      countBook === 1 ? 6 : countBook === 2 ? 12 : countBook === 3 ? 18 : 0
    );
  };

  // close modal function
  const closeModal = () => {
    setOpenConfirmationModal(false);
    dispatch(setResetTimeSlotAction());
  };

  return (
    <div className={classes.root}>
      <div>
      <Typography variant="h4" style={{ textAlign: "center" }}>
            Buy Tickets
          </Typography>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            GTD Unsolved:
          </Typography>
          <Typography variant="h4" style={{ textAlign: "center" }}>
           The Invitation
          </Typography>
          <div style={{  display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'column'}}>
          <Typography>Date: 16 January 2021</Typography>
          <Typography>Duration: 2 hours</Typography>
          {/* Mapping Escape Room 1 timeslots */}
          <p>Choose a timeslot</p>

          </div>
      </div>
      <Container className={classes.form}>
        <FormControl component="fieldset">
          {/* make 1 component for each escape room */}
         

        
          <RadioGroup
            value={selectTimeSlot1}
            onChange={(e) => setSelectTimeSlot1(e.target.value)}
            style={{
              display:'flex',
              justifyContent:'center',
              alignItems: 'center',
              flexDirection:'row',
              flexWrap: 'wrap'
            }}
          >
            {timeSlots1.length > 0 ? (
              timeSlots1.map((timeslot) => {
                return (
                  <React.Fragment key={timeslot.id}>
                    <FormControlLabel
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
                );
              })
            ) : (
              <Typography>No slots are available</Typography>
            )}
          </RadioGroup>
          
          <TextField
            variant="filled"
            label="Name"
            style={{ marginTop: 10 , backgroundColor:'#941616'}}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <TextField
            variant="filled"
            style={{ marginTop: 10, marginBottom: 10, backgroundColor:'#941616' }}
            label="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {/* <TextField
            variant="filled"
            style={{ marginBottom: 10 }}
            label="Referral Code"
            onChange={(e) => setRefCode(e.target.value)}
            value={refCode}
          /> */}
          <Button
            type="submit"
            variant="contained"
            style={{ textTransform: "none", marginTop: 10, }}
            onClick={openModal}
          >
            Submit
          </Button>
          <ConfirmationModal
            open={openConfirmationModal}
            price={price}
            onClose={closeModal}
            submitform={submitform}
          />
        </FormControl>
      </Container>
    </div>
  );
}
