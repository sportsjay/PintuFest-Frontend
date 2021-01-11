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
      borderStyle: "none",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3, 10, 3),
      maxWidth: 500,
    },
  })
);

export default function ConfirmationModal(props) {
  // state
  const [
    openDoubleConfirmationModal,
    setOpenDoubleConfirmationModal,
  ] = useState(false);
  console.log("modal ", props);
  //state props
  const clickLink = props.clickLink;
  const setClickLink = props.setClickLink;
  // props

  const name = props.name;
  const phoneNumber = props.phoneNumber;
  const price = props.price;
  const time = props.time;
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
  const closeModal2 = () => {
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
        <Typography
          variant="h6"
          style={{ textAlign: "center", marginBottom: 10 }}
        >
          BOOKING SUMMARY
        </Typography>
        {/* summary of payment and slots */}
        <Typography>
          Dear <span style={{ fontWeight: "bold" }}>{name}</span>,
        </Typography>
        <Typography>
          You book{" "}
          <span style={{ fontWeight: "bold" }}>{numberOfTickets} tickets </span>
          for
        </Typography>
        <Typography>
          16 January 2021,
          <span style={{ fontWeight: "bold" }}> {time}</span>
        </Typography>
        <Typography>
          Total price:{" "}
          <span style={{ fontWeight: "bold", color: "#941616" }}>${price}</span>
        </Typography>
        <Typography style={{ fontSize: 12, fontWeight: "bold", marginTop: 10 }}>
          Please provide a screenshot of your payment in the link below.
        </Typography>
        <Typography>
          Link:{" "}
          <a
            onClick={onClickLink}
            rel="noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdB2Jeq6VNKzL_S-J3WI6RanVVFvKPLB56SHvUTR94YHcqNmg/viewform?usp=sf_link"
            style={{ fontWeight: "bold", color: "#941616" }}
          >
            PAYMENT
          </a>
        </Typography>
        <Typography style={{ color: "red", fontSize: 10, marginBottom: 10 }}>
          Reminder: Please pay IMMEDIATELY upon opening the Google Form! Booking
          will be forfeited if payment is not made within 24 hours, Thank you!
        </Typography>
        <Button variant="contained" onClick={openModal} disabled={!clickLink}>
          CONFIRM PAYMENT
        </Button>
        <DoubleConfirmationModal
          name={name}
          phoneNumber={phoneNumber}
          submitform={submitform}
          closeModal={closeModal2}
          onClose={closeModal2}
          open={openDoubleConfirmationModal}
        />
      </Paper>
    </Modal>
  );
}
