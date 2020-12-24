import React, { useState } from "react";
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
}));

function getSteps() {
  return ["Game is starting...", "In-Progress", "Finished! Reset room"];
}

export default function HorizontalLabelPositionBelowStepper(props) {
  //init props
  const title = props.title || "Room 1";
  const description = props.description || "Room 1 Descriptions";
  const isAdmin = props.admin || false;

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.content}>
        <CardHeader
          component={() => (
            <div className={classes.header}>
              <Typography variant="h5">{title}</Typography>
              <Typography>{description}</Typography>
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
          {isAdmin ? (
            <div className={classes.buttonContainer}>
              {activeStep === steps.length ? (
                <div>
                  <Button
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
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </React.Fragment>
              )}
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
