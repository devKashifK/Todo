import React from "react";
import { Box, Grid, Paper, Stack } from "@mui/material";
import Header from "../../Components/Header/Header";
import AddTask from "../../Components/input/AddTask";
import TaskToDo from "../../Components/TaskToDo/TaskToDo";
import CompletedTask from "../../Components/CompletedTask/CompletedTask";
import Footer from "../../Components/Footer/Footer";
import AppState from "../../GlobalStates/Context";
import Quotes from "../../Components/Quotes/Quotes";
import styled from "@emotion/styled";
import StopWatch from "../../Components/Timer/StopWatch";


const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: "center",
}));
export default function Home() {
  return (
    <AppState>
      <Header />
      <Box sx={{ minHeight: "100vh", maxWidth: "95%", margin: "20px auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>
            <Quotes />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <AddTask />
              <Stack
                justifyContent="space-between"
                direction="row"
                margin="20px auto"
                spacing="5"
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                  width: {
                    xs: "80%",
                    sm: "80%",
                    md: "80%",
                    lg: "100%",
                    xl: "100%",
                  },
                  gap: "20px",
                }}
              >
                <TaskToDo />
                <CompletedTask />
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <StopWatch />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
        
      </Box>
      <Footer />
    </AppState>
  );
}
