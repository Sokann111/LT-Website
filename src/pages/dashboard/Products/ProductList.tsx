import { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import Layout from "../../../components/layout/Layout";
import { Product } from "../../../types/product";
import { productService } from "../../../services/product.service";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await productService.getAll();
    setProducts(data);
  };

  return (
    <Layout>
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
          onClick={() => navigate("/products/create")}
        >
          + Add Product
        </Button>
      </Box>

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
            <Typography variant="body1" sx={{ mt: 1 }}>
              Price: <b>${item.price}</b>
            </Typography>

            <Box sx={{ mt: 2, display: "flex", gap: 1, justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                onClick={() => navigate(`/products/edit/${item.id}`)}
              >
                Edit
              </Button>

              <Button
                size="small"
                color="error"
                variant="outlined"
                onClick={() => productService.remove(String(item.id)).then(loadData)}
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
