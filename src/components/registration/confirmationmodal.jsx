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
  const submitform = props.submitform;

  // init styling
  const classes = useStyles();

  return (
    <Modal {...props} className={classes.modal}>
      <Paper className={classes.paper}>
        <Typography>Confirm you timeslots?</Typography>
        <Button onClick={submitform}>Confirm</Button>
      </Paper>
    </Modal>
  );
}
