import { Typography, Box, Paper } from "@mui/material";
import Layout from "../../components/layout/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <Typography variant="h4" fontWeight="bold" color="primary">
        Dashboard Overview 💗
      </Typography>

      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            borderRadius: 3,
            width: "300px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" color="secondary">
            Total Products
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            0
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            padding: 3,
            borderRadius: 3,
            width: "300px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" color="secondary">
            Categories
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            0
          </Typography>
        </Paper>
      </Box>
    </Layout>
  );
}
