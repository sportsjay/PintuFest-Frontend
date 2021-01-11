import React from "react";

import {
  Modal,
  Typography,
  Button,
  Paper,
  makeStyles,
  createStyles,
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

export default function DoubleConfirmationModal(props) {
  const classes = useStyles();
  // onSubmit function
  const submitform = props.submitform;
  const closeModal = props.closeModal;
  const name = props.name;
  const phoneNumber = props.phoneNumber;
  return (
    <Modal {...props} className={classes.modal}>
      <Paper className={classes.paper}>
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfxCoo4NAHCYrsw4RmSWIw0l90nJyt3EDK8R4Jh63lDMU1ZKA/formResponse"
          method="POST"
        >
          <input
            value={name}
            name="entry.1274151678"
            style={{ display: "none" }}
          />
          <input
            value={phoneNumber}
            name="entry.2122737765"
            style={{ display: "none" }}
          />
          <Typography style={{ color: "red" }} variant="h5">
            Once transaction is confirmed, no changing of time slot and refunds
            are entertained
          </Typography>
          <Button
            type="submit"
            onClick={() => {
              submitform();
              closeModal();
            }}
          >
            Confirm
          </Button>
        </form>
      </Paper>
    </Modal>
  );
}
