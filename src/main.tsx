import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";  // Import the AuthProvider
import "./styles/global.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff80ab"
    },
    secondary: {
      main: "#c94f7c"
    },
    background: {
      default: "#ffffff"
    }
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>  {/* Wrap your app inside AuthProvider */}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
