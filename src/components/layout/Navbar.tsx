import { AppBar, Toolbar, Typography, Box, Button, IconButton } from "@mui/material";
import { useAuth } from "../../context/AuthContext"; 
import MenuIcon from "@mui/icons-material/Menu"; 

export default function Navbar() {
  const { user, logout } = useAuth(); 

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#fff", 
        color: "#ff80ab",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        zIndex: 1200,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Logo */}
          <Typography variant="h6" fontWeight="bold">
            💗 BeautyShop
          </Typography>
        </Box>

        {/* Navbar menu (large screens) */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          {user ? (
            <>
              <Typography sx={{ color: "#ff80ab" }}>Hello, {user.username} 💗</Typography>
              <Button
                sx={{
                  color: "#ff80ab",
                  fontWeight: "bold",
                  bgcolor: "#ff4f95",
                  borderRadius: "8px",
                  "&:hover": {
                    bgcolor: "#ff2e6e",
                  },
                }}
                onClick={logout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              sx={{
                color: "#fff",
                fontWeight: "bold",
                bgcolor: "#ff4f95",
                borderRadius: "8px",
                "&:hover": {
                  bgcolor: "#ff2e6e",
                },
              }}
              href="/login"
            >
              Login
            </Button>
          )}
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton sx={{ color: "#fff" }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
