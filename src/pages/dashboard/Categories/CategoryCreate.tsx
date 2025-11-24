import { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Layout from "../../../components/layout/Layout";
import { categoryService } from "../../../services/category.service";
import { useNavigate } from "react-router-dom";

export default function CategoryCreate() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    await categoryService.create({ name });
    navigate("/categories");
  };

  return (
    <Layout>
      <Paper sx={{ padding: 4, maxWidth: 400 }}>
        <Typography variant="h5" color="primary" fontWeight="bold">
          Add New Category 💗
        </Typography>

        <TextField
          label="Category Name"
          fullWidth
          sx={{ mt: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            bgcolor: "#ff80ab",
            "&:hover": { bgcolor: "#ff4f95" },
          }}
          onClick={handleSave}
        >
          Save
        </Button>
      </Paper>
    </Layout>
  );
}
