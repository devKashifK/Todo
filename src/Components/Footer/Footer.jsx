import { Stack, Typography } from "@mui/material"
import React from "react"

export default function Footer(){
    return(
          <Stack
      direction="row"
      color="primary"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        p: "10px 50px",
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
        <Typography variant="subtitle2">Made in 2022</Typography>
    </Stack>
    )
}