import { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import Layout from "../../../components/layout/Layout";
import { Category } from "../../../types/category";
import { categoryService } from "../../../services/category.service";
import { useNavigate } from "react-router-dom";

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await categoryService.getAll();
    setCategories(data);
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          Categories 🌸
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#ff80ab",
            "&:hover": { bgcolor: "#ff4f95" },
          }}
          onClick={() => navigate("/categories/create")}
        >
          + Add Category
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {categories.map((item) => (
          <Paper
            key={item.id}
            elevation={3}
            sx={{
              padding: 3,
              width: 260,
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" color="secondary">
              {item.name}
            </Typography>

            <Box sx={{ mt: 2, display: "flex", gap: 1, justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                onClick={() => navigate(`/categories/edit/${item.id}`)}
              >
                Edit
              </Button>

              <Button
                size="small"
                color="error"
                variant="outlined"
                onClick={() => categoryService.remove(String(item.id)).then(loadData)}
              >
                Delete
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Layout>
  );
}
