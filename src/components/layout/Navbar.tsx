import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "#ff4f95",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        zIndex: 1200,
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontWeight="bold">
          BeautyShop Dashboard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Typography sx={{ color: "#ff4f95" }}>Hello, Admin 💗</Typography>
      </Toolbar>
    </AppBar>
  );
}
