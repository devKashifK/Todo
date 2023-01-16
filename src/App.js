import {Box } from "@mui/material"
import Home from './Pages/Home/Home';
import {ThemeProvider } from '@mui/material'
import theme from "./Roots/Theme";

function App() {
  return (
    <ThemeProvider theme = {theme}>   <Box>
    <Home />
   </Box>
   </ThemeProvider>

  );
}

export default App;
