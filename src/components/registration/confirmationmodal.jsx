import React, { useState } from "react";
import {
  Modal,
  makeStyles,
  createStyles,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";

// import component
import DoubleConfirmationModal from "./doubleconfirmationmodal";

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function ConfirmationModal(props) {
  // state
  const [
    openDoubleConfirmationModal,
    setOpenDoubleConfirmationModal,
  ] = useState(false);

  //state props
  const clickLink = props.clickLink;
  const setClickLink = props.setClickLink;
  // props
  const price = props.price;
  const numSlots = props.numSlots;
  const numberOfTickets = props.numberOfTickets;
  // functions
  const submitform = props.submitform;

  // init styling
  const classes = useStyles();

  // open modal function
  const openModal = () => {
    setOpenDoubleConfirmationModal(true);
  };

  // close modal function
  const closeModal = () => {
    setOpenDoubleConfirmationModal(false);
    setClickLink(false);
  };

  // function to check user has clicked link
  const onClickLink = () => {
    setTimeout(() => {
      setClickLink(true);
    }, 5000);
  };

  return (
    <Modal {...props} className={classes.modal}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Summary: </Typography>
        {/* summary of payment and slots */}
        <Typography>Number of slots booked: {numSlots}</Typography>
        <Typography>
          Total price: ${price} | Number of Tickets: {numberOfTickets}
        </Typography>
        <Typography>
          Please provide a screenshot of your receipt in the Google Form!
        </Typography>
        <Typography variant="h5" style={{ color: "red" }}>
          Reminder: Please pay IMMEDIATELY upon opening the google form! Thank
          you!
        </Typography>
        <Typography>
          Link:{" "}
          <a
            onClick={onClickLink}
            rel="noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdB2Jeq6VNKzL_S-J3WI6RanVVFvKPLB56SHvUTR94YHcqNmg/viewform?usp=sf_link"
          >
            Google Form
          </a>
        </Typography>
        <Button variant="contained" onClick={openModal} disabled={!clickLink}>
          Re-confirmation
        </Button>
        <DoubleConfirmationModal
          submitform={submitform}
          onClose={closeModal}
          open={openDoubleConfirmationModal}
        />
      </Paper>
    </Modal>
  );
}
