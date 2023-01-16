import { PlayArrowSharp } from "@mui/icons-material";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./Stopwatch.css";

export default function StopWatch() {
  const [timerOn, setTimerOn] = useState(false);
  const [time, setTime] = useState(30);
  const [delay, setDelay] = useState(60);

  useEffect(() => {
    let auto = null;
    if (timerOn) {
      auto = setInterval(() => {
        setDelay((prevDelay) => prevDelay - 1);
      }, 1000);
    }
    return () => clearInterval(auto);
  }, [timerOn]);

  useEffect(() => {
    if (delay === 0) {
      setDelay(60);
      setTime((prev) => prev - 1);
    }
  }, [time, delay]);

  return (
   
    <Box p={1}>
      {timerOn ? 
      <Box
        sx={{
          position: "relative",
          border: "2px solid black",
          width: "150px",
          height: "150px",
          margin: "auto",
          display: "flex",
          gap: "05px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <div
          className={timerOn ? "second_line animation" : "second_line"}
        ></div>
        <Typography variant = "Title" sx={{ zIndex: "5" }} >
          {" "}
          {("0" + time).slice(-2)} :{" "}
        </Typography>
        <Typography sx={{ zIndex: "5"}} variant = "Title">
          {("0" + delay).slice(-2)}{" "}
        </Typography>
      </Box> : (<Typography variant= 'Title'>Start Your Today Goal</Typography>)}
      <Box
        sx={{
          display: "flex",
          gap: "05px",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button variant="secondary">Focus</Button>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          disabled = {timerOn ? true : false}
          
        >
          <Button onClick={() => setTime((prev) => prev - 15)}>-</Button>
          <Button>{time} min</Button>
          <Button onClick={() => setTime((prev) => prev + 15)}>+</Button>
        </ButtonGroup>
        <Button disabled = {timerOn ? true : false} onClick={() => setTimerOn(true)} endIcon={<PlayArrowSharp />}>
          {" "}
          Start
        </Button>
      </Box>
    </Box>
  );
}
