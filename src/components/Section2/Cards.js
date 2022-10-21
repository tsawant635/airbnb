import React from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { FaRegHeart } from "react-icons/fa";

import "./Cards.css";

const Cards = ({ data }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = data.locationImages.length; // to show dots

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when we click the next arrow
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // when we click the back arrow
  };

  const handleStepChange = (step) => {
    setActiveStep(step); // handle swipe change
  };
  return (
    <Box
      className="card"
      sx={{
        flexGrow: 1,
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", right: 10, top: 10, zIndex: 10 }}>
        <FaRegHeart size={24} color="#fff" />
      </Box>

      {data.locationImages.length && (
        <SwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {data.locationImages.map((step, index) => {
            return (
              <div key={step.id}>
                <Box
                  component="img"
                  sx={{
                    height: 275,
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                    borderRadius: 3,
                  }}
                  src={step.url}
                ></Box>
              </div>
            );
          })}
        </SwipeableViews>
      )}

      <Box sx={{ position: "absolute", bottom: 100, width: "100%" }}>
        <MobileStepper
          sx={{ backgroundColor: "transparent" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              sx={{
                color: "#fff",
                backgroundColor: "#000",
                opacity: 0.5,
                borderRadius: 10,
                p: 1,
                minWidth: "auto",
              }}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              sx={{
                color: "#fff",
                backgroundColor: "#000",
                opacity: 0.5,
                borderRadius: 10,
                p: 1,
                minWidth: "auto",
              }}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ mt: 2 }}>
          <Typography component="h3"> {data.location}</Typography>
          <Typography component="h4"> {data.days}</Typography>
          <Typography component="h5"> {data.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
        <Typography sx={{ display: "flex", flexDirection: "row" }} component="h5"> {data.rating}★</Typography>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
