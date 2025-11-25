import { Box, Typography, List, ListItemButton, ListItemIcon } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Category, Dashboard as DashboardIcon } from "@mui/icons-material"; 

export default function Sidebar() {
  const location = useLocation(); // Get the current location for active route

  // Function to check if the current route is active
  const isActive = (path: string) => location.pathname === path;

  const activeStyle = {
    backgroundColor: "#ff4f95", 
    color: "white", 
    "& .MuiListItemIcon-root": {
      color: "white",
    },
    "&:hover": {
      backgroundColor: "#ff4f95", 
      color: "white", 
      "& .MuiListItemIcon-root": {
        color: "white", 
      },
    },
  };

  const inactiveStyle = {
    color: "#ff4f95", 
    "& .MuiListItemIcon-root": {
      color: "#ff4f95", 
    },
    "&:hover": {
      backgroundColor: "#ff4f95", 
      color: "white", 
      "& .MuiListItemIcon-root": {
        color: "white", 
      },
    },
  };

  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        bgcolor: "white", 
        color: "#ff4f95", 
        paddingTop: 3,
        position: "fixed",
        top: 0,
        left: 0,
        boxShadow: "2px 0px 12px rgba(0,0,0,0.08)",
        borderRight: "1px solid #ffd1e4",
        borderRadius: "0 16px 16px 0",
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        fontWeight="bold"
        sx={{
          mb: 3,
          color: "#ff4f95", 
        }}
      >
        💗 BeautyShop
      </Typography>

      <List>
        {/* Dashboard */}
        <ListItemButton
          component={Link}
          to="/"
          sx={{
            borderRadius: "8px",
            mb: 1,
            ...(isActive("/") ? activeStyle : inactiveStyle), 
          }}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          Dashboard
        </ListItemButton>

        {/* Products */}
        <ListItemButton
          component={Link}
          to="/products"
          sx={{
            borderRadius: "8px",
            mb: 1,
            ...(isActive("/products") ? activeStyle : inactiveStyle), // Apply the styles based on whether it's active
          }}
        >
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
          Products
        </ListItemButton>

        {/* Categories */}
        <ListItemButton
          component={Link}
          to="/categories"
          sx={{
            borderRadius: "8px",
            mb: 1,
            ...(isActive("/categories") ? activeStyle : inactiveStyle), // Apply the styles based on whether it's active
          }}
        >
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          Categories
        </ListItemButton>
      </List>
    </Box>
  );
}
