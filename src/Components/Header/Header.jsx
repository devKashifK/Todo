import { List, ListItemIcon, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AddIcon from "@mui/icons-material/Add";
import AddTaskIcon from "@mui/icons-material/AddTask";
import "./header.css";

export default function Header() {
  return (
    <Stack
      direction="row"
      color="primary"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        p: "10px 50px",
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
      <Typography variant="Title"> Todo </Typography>
      <List>
        <ListItemIcon className="icons">
          <DarkModeIcon color="white" />
        </ListItemIcon>
        <ListItemIcon className="icons">
          <AddIcon color="white" />
        </ListItemIcon>
        <ListItemIcon className="icons">
          <AddTaskIcon color="white" />
        </ListItemIcon>
      </List>
    </Stack>
  );
}
