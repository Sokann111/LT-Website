import { useState } from "react";
import { Button, TextField } from "@mui/material";
import PinkDialog from "../../../components/ui/PinkDialog";
import { productService } from "../../../services/product.service";

export default function ProductEdit({ open, onClose, product, refresh }: any) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(String(product.price));

  const save = async () => {
    await productService.update(String(product.id), {
      name,
      price: Number(price),
    });
    refresh();
    onClose();
  };

  return (
    <PinkDialog open={open} onClose={onClose} title="Edit Product 💗">
      <TextField
        label="Product Name"
        fullWidth
        sx={{ mb: 2 }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        label="Price"
        fullWidth
        sx={{ mb: 2 }}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2, bgcolor: "#ff80ab", "&:hover": { bgcolor: "#ff4f95" } }}
        onClick={save}
      >
        Save Changes
      </Button>
    </PinkDialog>
  );
}
