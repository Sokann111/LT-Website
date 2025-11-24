import { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import Layout from "../../../components/layout/Layout";
import { Category } from "../../../types/category";
import { categoryService } from "../../../services/category.service";
import CategoryCreateModal from "./CategoryCreate";
import CategoryEditModal from "./CategoryEdit";

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [openCreate, setOpenCreate] = useState(false);
  const [editItem, setEditItem] = useState<Category | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await categoryService.getAll();
    setCategories(data);
  };

  return (
    <Layout>
      {/* Header */}
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
          onClick={() => setOpenCreate(true)}
        >
          + Add Category
        </Button>
      </Box>

      {/* List */}
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
                onClick={() => setEditItem(item)}
              >
                Edit
              </Button>

              <Button
                size="small"
                color="error"
                variant="outlined"
                onClick={() =>
                  categoryService.remove(String(item.id)).then(loadData)
                }
              >
                Delete
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Create Modal */}
      <CategoryCreateModal
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        refresh={loadData}
      />

      {/* Edit Modal */}
      {editItem && (
        <CategoryEditModal
          open={!!editItem}
          onClose={() => setEditItem(null)}
          category={editItem}
          refresh={loadData}
        />
      )}
    </Layout>
  );
}
