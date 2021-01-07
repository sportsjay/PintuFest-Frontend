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
import TimeSlot from "../components/registration/timeslot";
import CardLink from "../components/registration/cardlink";
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
    backgroundColor: "#8aa3cf",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80vw",
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
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    // get data from DB
    axios
      .get(GAMES_API.GET_ALL_GAMES)
      .then((res) => {
        setTimeSlots(res.data);
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
          gameId: selectedTimeSlotsRedux,
        })
        .then((res) => alert(res.data.msg))
        .catch((error) => alert(error.response.data));
    }
    // reset after submit
    setUsername("");
    setEmail("");
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
  };

  // close modal function
  const closeModal = () => {
    setOpenConfirmationModal(false);
    dispatch(setResetTimeSlotAction());
  };

  return (
    <div className={classes.root}>
      <Container className={classes.information}>
        <CardLink title=""></CardLink>
        <CardLink title=""></CardLink>
        <CardLink title=""></CardLink>
      </Container>
      <Container className={classes.form}>
        <FormControl component="fieldset">
          <TextField
            variant="filled"
            label="Name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <TextField
            variant="filled"
            style={{ marginTop: 10, marginBottom: 10 }}
            label="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {/* make 1 component for each escape room */}
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Escape Room 1
          </Typography>
          {/* Mapping Escape Room 1 timeslots */}
          <RadioGroup
            value={selectTimeSlot1}
            onChange={(e) => setSelectTimeSlot1(e.target.value)}
          >
            {timeSlots.length > 0 ? (
              timeSlots.map((timeslot) => {
                if (timeslot.name === "game1") {
                  return (
                    <React.Fragment key={timeslot.id}>
                      <FormControlLabel
                        className={classes.formcontrollabel}
                        value={timeslot.id.toString()}
                        control={
                          <TimeSlot
                            id={timeslot.id.toString()}
                            name={timeslot.name}
                            room={timeslot.room}
                            duration={timeslot.duration}
                            timeslot={timeslot.timeslot}
                            numSlot={timeslot.maxNumberOfParticipants}
                            numParticipants={timeslot.participants.length}
                          />
                        }
                      />
                    </React.Fragment>
                  );
                } else {
                  return <React.Fragment></React.Fragment>;
                }
              })
            ) : (
              <Typography>No slots are available</Typography>
            )}
          </RadioGroup>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Escape Room 2
          </Typography>
          {/* Mapping Escape Room 2 timeslots */}
          <RadioGroup
            value={selectTimeSlot2}
            onChange={(e) => setSelectTimeSlot2(e.target.value)}
          >
            {timeSlots.length > 0 ? (
              timeSlots.map((timeslot) => {
                if (timeslot.name === "game2") {
                  return (
                    <React.Fragment>
                      <FormControlLabel
                        className={classes.formcontrollabel}
                        value={timeslot.id.toString()}
                        control={
                          <TimeSlot
                            id={timeslot.id.toString()}
                            name={timeslot.name}
                            room={timeslot.room}
                            duration={timeslot.duration}
                            timeslot={timeslot.timeslot}
                            numSlot={timeslot.maxNumberOfParticipants}
                          />
                        }
                      />
                    </React.Fragment>
                  );
                } else {
                  return <div></div>;
                }
              })
            ) : (
              <Typography>No slots are available</Typography>
            )}
          </RadioGroup>
          <RadioGroup
            value={selectTimeSlot3}
            onChange={(e) => setSelectTimeSlot3(e.target.value)}
          >
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Escape Room 3
            </Typography>
            {/* Mapping Escape Room 3 timeslots */}
            {timeSlots.length > 0 ? (
              timeSlots.map((timeslot) => {
                if (timeslot.name === "game3") {
                  return (
                    <React.Fragment key={timeslot.id}>
                      <FormControlLabel
                        className={classes.formcontrollabel}
                        value={timeslot.id.toString()}
                        control={
                          <TimeSlot
                            id={timeslot.id.toString()}
                            name={timeslot.name}
                            room={timeslot.room}
                            duration={timeslot.duration}
                            timeslot={timeslot.timeslot}
                            numSlot={timeslot.maxNumberOfParticipants}
                          />
                        }
                      />
                    </React.Fragment>
                  );
                } else {
                  return <div></div>;
                }
              })
            ) : (
              <Typography>No slots are available</Typography>
            )}
          </RadioGroup>
          <Button
            variant="contained"
            style={{ textTransform: "none", marginTop: 10 }}
            onClick={openModal}
          >
            Submit
          </Button>
          <ConfirmationModal
            open={openConfirmationModal}
            onClose={closeModal}
            submitform={submitform}
          />
        </FormControl>
      </Container>
    </div>
  );
}
