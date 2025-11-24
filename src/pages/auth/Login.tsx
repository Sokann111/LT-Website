import { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      sx={{
        bgcolor: "#ffe4ee",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 420,
          padding: "32px",
          borderRadius: "16px",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="primary">
          Welcome Back 💗
        </Typography>

        <Typography sx={{ mt: 1, mb: 3, color: "#555" }}>
          Login to your cosmetic shop dashboard
        </Typography>

        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          sx={{ mb: 2 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          sx={{ mb: 3 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#ff80ab",
            color: "#fff",
            py: 1.3,
            borderRadius: "10px",
            "&:hover": {
              bgcolor: "#ff4f95",
            },
          }}
        >
          Login
        </Button>

        <Typography sx={{ mt: 2 }}>
          Don’t have an account?{" "}
          <Link to="/register" style={{ color: "#ff4f95", fontWeight: "bold" }}>
            Register
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
