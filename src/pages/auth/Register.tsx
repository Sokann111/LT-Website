import { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";  // Import the AuthContext for login
import { authService } from "../../services/auth.service";  // Import the authService

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // For handling errors
  const { login } = useAuth(); // To log the user in after registration
  const navigate = useNavigate();  // To navigate after successful registration

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await authService.register(username, password);
      
      login(res); 
      
      navigate("/");  
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#ffe4ee",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        borderRadius: "12px",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 420,
          padding: "32px",
          borderRadius: "16px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="primary">
          Create Account 💗
        </Typography>

        {error && <Typography color="error">{error}</Typography>} {/* Show error message */}

        <Typography sx={{ mt: 1, mb: 3, color: "#555" }}>
          Join the cosmetic product platform
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
          onClick={handleSubmit}
        >
          Register
        </Button>

        <Typography sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#ff4f95", fontWeight: "bold" }}>
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
