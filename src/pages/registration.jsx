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
import ConfirmationModal from "../components/registration/confirmationmodal";

//import redux cache

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
  //states
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [selectTimeSlot, setSelectTimeSlot] = useState(null);
  const [price, setPrice] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const [refCode, setRefCode] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    // get data from DB
    axios
      .get(GAMES_API.GET_GAME_BY_NAME("The Invitation"))
      .then((res) => {
        setTimeSlots(res.data);
      })
      .catch((error) => console.error("Error! " + error));
  }, []);

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
          // refcode: refCode,
          gameId: selectTimeSlot,
        })
        .then((res) => alert(res.data.msg))
        .catch((error) => alert(error.response.data));
    }
    // reset after submit
    setUsername("");
    setEmail("");
    setSelectTimeSlot(null);
    closeModal();
  };

  // open modal function
  const openModal = () => {
    setOpenConfirmationModal(true);
    // count price
    setPrice(selectTimeSlot === null ? 0 : 6);
  };

  // close modal function
  const closeModal = () => {
    setOpenConfirmationModal(false);
    setSelectTimeSlot(null);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.form}>
        <FormControl component="fieldset">
          {/* make 1 component for each escape room */}
          <Typography variant="h4" style={{ textAlign: "center" }}>
            The Invitation
          </Typography>
          {/* Mapping Escape Room 1 timeslots */}
          <RadioGroup
            value={selectTimeSlot}
            onChange={(e) => setSelectTimeSlot(e.target.value)}
          >
            {timeSlots.length > 0 ? (
              timeSlots.map((timeslot) => {
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
            style={{ marginTop: 10 }}
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
            style={{ textTransform: "none", marginTop: 10 }}
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
