import { AppRouter } from "./router/AppRouter";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box sx={{ bgcolor: "#ffe4ee", minHeight: "100vh" }}>
      <AppRouter />
    </Box>
  );
}

export default App;
