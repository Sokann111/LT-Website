import { Box, Typography, List, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        bgcolor: "#ff80ab",
        color: "white",
        paddingTop: 3,
        position: "fixed",
        top: 0,
        left: 0,
        boxShadow: "2px 0px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h5" textAlign="center" fontWeight="bold">
        💗 BeautyShop
      </Typography>

      <List sx={{ mt: 4 }}>
        <ListItemButton component={Link} to="/" sx={{ color: "white" }}>
          Dashboard
        </ListItemButton>

        <ListItemButton component={Link} to="/products" sx={{ color: "white" }}>
          Products
        </ListItemButton>

        <ListItemButton component={Link} to="/categories" sx={{ color: "white" }}>
          Categories
        </ListItemButton>
      </List>
    </Box>
  );
}
