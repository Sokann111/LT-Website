import { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import Layout from "../../../components/layout/Layout";
import { Product } from "../../../types/product";
import { productService } from "../../../services/product.service";
import ProductCreateModal from "./ProductCreate";
import ProductEditModal from "./ProductEdit";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [openCreate, setOpenCreate] = useState(false);
  const [editItem, setEditItem] = useState<Product | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await productService.getAll();
    setProducts(data);
  };

  return (
    <Layout>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          Products 💄
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#ff80ab",
            "&:hover": { bgcolor: "#ff4f95" },
          }}
          onClick={() => setOpenCreate(true)}
        >
          + Add Product
        </Button>
      </Box>

      {/* Product Cards */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {products.map((item) => (
          <Paper
            key={item.id}
            elevation={3}
            sx={{
              padding: 3,
              width: 280,
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" color="secondary">
              {item.name}
            </Typography>
            <Typography sx={{ mt: 1 }}>💲 {item.price}</Typography>

            {/* Edit & Delete buttons */}
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
                  productService.remove(String(item.id)).then(loadData)
                }
              >
                Delete
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* CREATE MODAL */}
      <ProductCreateModal
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        refresh={loadData}
      />

      {/* EDIT MODAL */}
      {editItem && (
        <ProductEditModal
          open={!!editItem}
          onClose={() => setEditItem(null)}
          product={editItem}
          refresh={loadData}
        />
      )}
    </Layout>
  );
}
