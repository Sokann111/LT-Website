import { useState } from "react";
import { Button, TextField, Typography, Paper, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { axiosInstance } from "../../services/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", {
        username,
        password,
      });
      login(res.data);  
      navigate("/");  
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
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
      }}
    >
      <Paper sx={{ padding: 4, maxWidth: 400 }}>
      <Typography variant="h5" color="primary" fontWeight="bold">
        Welcome Back 💗
      </Typography>

      {error && <Typography color="error">{error}</Typography>}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          fullWidth
          sx={{ mb: 2 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          sx={{ mb: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#ff80ab",
            "&:hover": { bgcolor: "#ff4f95" },
          }}
          type="submit"
        >
          Login
        </Button>
      </form>

      <Typography sx={{ mt: 2 }}>
        Don't have an account?{" "}
        <Link to="/register" style={{ color: "#ff4f95", fontWeight: "bold" }}>
          Register
        </Link>
      </Typography>
    </Paper>
    </Box>
  );
}
