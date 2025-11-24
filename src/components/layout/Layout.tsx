import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        sx={{
          marginLeft: "250px",
          width: "100%",
          minHeight: "100vh",
          bgcolor: "#ffe4ee",
        }}
      >
        <Navbar />

        <Box sx={{ padding: 3, marginTop: "64px" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
