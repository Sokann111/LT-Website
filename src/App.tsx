import { AppRouter } from "./router/AppRouter";
import Box from "@mui/material/Box";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: "#ff4f95", 
    },
    secondary: {
      main: "#fff", 
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#333", 
      secondary: "#555", 
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h5: {
      fontWeight: "bold",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "#ffe4ee", minHeight: "100vh" }}>
        <AppRouter />
      </Box>
     </ThemeProvider>
  );
}

export default App;
