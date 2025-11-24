import { Box, Typography, List, ListItemButton, ListItemIcon } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Category, Dashboard as DashboardIcon } from "@mui/icons-material"; // Importing icons

export default function Sidebar() {
  const location = useLocation(); // To highlight active route

  const isActive = (path: string) => location.pathname === path; // Check if the current route is active

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
        borderRadius: "0 16px 16px 0", // Rounded right corner
      }}
    >
      <Typography variant="h5" textAlign="center" fontWeight="bold" sx={{ mb: 3 }}>
        💗 BeautyShop
      </Typography>

      <List sx={{ mt: 4 }}>
        {/* Dashboard Link */}
        <ListItemButton
          component={Link}
          to="/"
          sx={{
            color: "white",
            borderRadius: "8px",
            mb: 1,
            "&:hover": {
              bgcolor: "#ff4f95", // Pink hover effect
            },
            backgroundColor: isActive("/") ? "#ff4f95" : "transparent", // Active link style
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <DashboardIcon />
          </ListItemIcon>
          Dashboard
        </ListItemButton>

        {/* Products Link */}
        <ListItemButton
          component={Link}
          to="/products"
          sx={{
            color: "white",
            borderRadius: "8px",
            mb: 1,
            "&:hover": {
              bgcolor: "#ff4f95",
            },
            backgroundColor: isActive("/products") ? "#ff4f95" : "transparent", // Active link style
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <ShoppingCart />
          </ListItemIcon>
          Products
        </ListItemButton>

        {/* Categories Link */}
        <ListItemButton
          component={Link}
          to="/categories"
          sx={{
            color: "white",
            borderRadius: "8px",
            mb: 1,
            "&:hover": {
              bgcolor: "#ff4f95",
            },
            backgroundColor: isActive("/categories") ? "#ff4f95" : "transparent", // Active link style
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <Category />
          </ListItemIcon>
          Categories
        </ListItemButton>
      </List>
    </Box>
  );
}
