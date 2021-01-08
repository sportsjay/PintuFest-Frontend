import React from "react";
import {
  Modal,
  makeStyles,
  createStyles,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";

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
  // props
  const price = props.price;
  const numSlots = props.numSlots;
  // functions
  const submitform = props.submitform;

  // init styling
  const classes = useStyles();

  return (
    <Modal {...props} className={classes.modal}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Summary: </Typography>
        {/* summary of payment and slots */}
        <Typography>Number of slots booked: {numSlots}</Typography>
        <Typography>Total price: ${price}</Typography>
        <Typography>
          Please provide a screenshot of your receipt in the Google Form!
        </Typography>
        <Button onClick={submitform}>Confirm</Button>
      </Paper>
    </Modal>
  );
}
