import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  Typography,
  CardContent,
  CardHeader,
} from "@material-ui/core";

// import Game API
import { ROOM_API } from "../../api-routes/room.api";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  header: {
    textAlign: "center",
    padding: theme.spacing(1),
  },
  content: {
    margin: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  timeButtonGroup: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  time: {
    textAlign: "center",
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Game is starting...", "In-Progress", "Finished! Reset room"];
}

export default function HorizontalLabelPositionBelowStepper(props) {
  //init props
  const roomNumber = props.roomNumber;
  const title = props.title || "Room 1";
  const isAdmin = props.isAdmin;

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState("0 min");
  const steps = getSteps();

  useEffect(() => {
    axios
      .get(ROOM_API.GET_ROOM_SLOT_STATUS(roomNumber))
      .then((res) => {
        setTimeLeft(res.data);
      })
      .catch((error) => alert(error));
  }, [roomNumber, timeLeft]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const timeStamps = [
    "120 mins",
    "60 mins",
    "30 mins",
    "15 mins",
    "5 mins",
    "1 min",
  ];

  return (
    <div className={classes.root}>
      <Card className={classes.content}>
        <CardHeader
          component={() => (
            <div className={classes.header}>
              <Typography variant="h5">{title}</Typography>
            </div>
          )}
        />
        <CardContent>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* Time keeping */}
          <Typography variant="h3" className={classes.time}>
            {timeLeft}
          </Typography>
          {isAdmin ? (
            <React.Fragment>
              {activeStep === 1 ? (
                <div className={classes.timeButtonGroup}>
                  {timeStamps.map((time) => (
                    <Button
                      key={time}
                      className={classes.timeButton}
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        //put time api here
                        axios
                          .post(ROOM_API.UPDATE_ROOM_SLOT_STATUS(1), {
                            gameRoom: 1,
                            gameStatus: activeStep,
                            duration: activeStep === 1 ? time : "0 mins",
                          })
                          .then((res) => {
                            alert(res.data);
                          }); // only 1 room
                        setTimeLeft(time);
                      }}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              ) : (
                <React.Fragment></React.Fragment>
              )}
              <div className={classes.buttonContainer}>
                {activeStep === steps.length ? (
                  <div>
                    <Button
                      key={activeStep}
                      variant="contained"
                      color="primary"
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                  </div>
                ) : (
                  <React.Fragment>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backButton}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        handleNext();
                        if (activeStep === steps.length - 1) {
                          //put time api here
                          setTimeLeft("0 mins");
                        }
                      }}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </React.Fragment>
                )}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
