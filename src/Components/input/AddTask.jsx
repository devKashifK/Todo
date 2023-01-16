import React, { useContext, useReducer, useRef } from "react";
import { Box, Button, ButtonGroup, Input, styled } from "@mui/material";
import "./addtask.css";
import GlobalState from "../../GlobalStates/AppContext";

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  display: "flex",
  marginTop: "10px",
}));

export default function AddTask() {
  const { Add } = useContext(GlobalState);
  const task = useRef();
  const desc = useRef();

  const current = new Date();
  const fullDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const initialState = {
    id: Math.floor(Math.random() * 0 + 1),
    taskItem: "",
    description: "",
    completed: "false",
    date: fullDate,
  };
  const [state, updateState] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    initialState
  );

  const item = state;
  function HandleClick() {
    updateState({ taskItem: "", description: "", id: state.id + 1 });
    task.current.value = "";
    desc.current.value = "";
    Add(item);
  }
  return (
    <Box
      className="input"
      sx={{
        flexDirection: "column",
        width: {
          xs: "80%",
          sm: "80%",
          md: "80%",
          lg: "100%",
          xl: "100%",
        },
      }}
    >
      <Box
        className="input_box"
        width="100%"
        // margin="0px auto"
        sx={{
          border: "1px solid rgba(128, 128, 128, 0.197)",
          borderRadius: "05px",
          padding: "10px 15px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <Input
          disableUnderline={true}
          multiline={true}
          placeholder="Task Name"
          fullWidth={true}
          name="taskItem"
          sx={{ margin: "08px 0px" }}
          onChange={(e) => updateState({ taskItem: e.target.value })}
          ref={task}
        ></Input>
        <Input
          disableUnderline={true}
          multiline={true}
          placeholder="Description"
          fullWidth={true}
          name="description"
          onChange={(e) => updateState({ description: e.target.value })}
          sx={{ fontSize: "13px", margin: "08px 0px" }}
          ref={desc}
        ></Input>
        <Button variant="outlined" sx={{ padding: "02px 02px" }}>
          {" "}
          Today
        </Button>
      </Box>
      <StyledButtonGroup>
        {" "}
        <Button variant="secondary">Cancel</Button>
        <Button onClick={HandleClick}>Add Task</Button>
      </StyledButtonGroup>
    </Box>
  );
}
