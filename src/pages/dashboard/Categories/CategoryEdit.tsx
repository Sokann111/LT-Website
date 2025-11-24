import { useState, useEffect } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Layout from "../../../components/layout/Layout";
import { categoryService } from "../../../services/category.service";
import { useParams, useNavigate } from "react-router-dom";

export default function CategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  useEffect(() => {
    loadDetail();
  }, []);

  const loadDetail = async () => {
    const all = await categoryService.getAll();
    const found = all.find((c: any) => String(c.id) === id);
    if (found) {
      setName(found.name);
    }
  };

  const handleSave = async () => {
    await categoryService.update(String(id), { name });
    navigate("/categories");
  };

  return (
    <Layout>
      <Paper sx={{ padding: 4, maxWidth: 400 }}>
        <Typography variant="h5" color="primary" fontWeight="bold">
          Edit Category 💗
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
          Save Changes
        </Button>
      </Paper>
    </Layout>
  );
}
