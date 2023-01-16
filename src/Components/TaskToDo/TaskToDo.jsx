import {
  Checkbox,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import GlobalState from "../../GlobalStates/AppContext";

export default function TaskToDo() {
  const { addState, ChangeValue } = useContext(GlobalState);
  const Tasks = addState.taskName;
  return (
    <Box
      variant="outlined"
      sx={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding: "10px 25px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "05px",
        borderRadius: "05px",
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "55%",
          xl: "55%",
        },
      }}
    >
      <Typography variant="Title" fontSize="28px">
        {Tasks.length ? "Your Task" : "Add Some Tasks"}
      </Typography>
      {Tasks.map((item) => {
        return (
          <ListItemButton
            component="a"
            href="#simple-list"
            sx={{
              backgroundColor: "grey",
              border: "1px solid #ff57223d",
              borderRadius: "4px",
            }}
            key={item.id}
          >
            <ListItemText
              primary={item.taskItem}
              secondary={item.description}
            />
            <Checkbox
              edge="end"
              onChange={""}
              checked={item.completed === true ? true : false}
              inputProps={{}}
              onClick={() => ChangeValue(item.id)}
            />
          </ListItemButton>
        );
      })}
    </Box>
  );
}
