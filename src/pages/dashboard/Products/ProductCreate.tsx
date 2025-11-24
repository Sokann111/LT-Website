import { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Layout from "../../../components/layout/Layout";
import { productService } from "../../../services/product.service";
import { useNavigate } from "react-router-dom";

export default function ProductCreate() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    await productService.create({
      name,
      price: Number(price),
    });
    navigate("/products");
  };

  return (
    <Layout>
      <Paper sx={{ padding: 4, maxWidth: 400 }}>
        <Typography variant="h5" color="primary" fontWeight="bold">
          Add New Product 💗
        </Typography>

        <TextField
          label="Product Name"
          fullWidth
          sx={{ mt: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Price"
          fullWidth
          sx={{ mt: 2 }}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3, bgcolor: "#ff80ab", "&:hover": { bgcolor: "#ff4f95" } }}
          onClick={handleSave}
        >
          Save
        </Button>
      </Paper>
    </Layout>
  );
}
