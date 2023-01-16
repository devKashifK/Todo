import React, { useContext } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import GlobalState from "../../GlobalStates/AppContext";

export default function CompletedTask() {
  const { addState } = useContext(GlobalState);
  const Tasks = addState.taskName;
  const CompletedTasks = Tasks.filter((i) => i.completed === true);

  return (
    <Box
      variant="outlined"
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "42%",
          xl: "42%",
        },
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding: "10px 25px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "05px",
        borderRadius: "05px",
      }}
    >
      <Typography variant="Title" fontSize="28px">
        Completed Task
      </Typography>
      {CompletedTasks.map((item) => {
        return (
          <ListItemButton
            sx={{
              backgroundColor: "grey",
              border: "1px solid #ff57223d",
              borderRadius: "4px",
            }}
          >
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText
              primary={item.taskItem}
              secondary={item.description}
            />
          </ListItemButton>
        );
      })}
    </Box>
  );
}
