import { useState } from "react";
import { Button, TextField } from "@mui/material";
import PinkDialog from "../../../components/ui/PinkDialog";
import { productService } from "../../../services/product.service";

export default function ProductCreate({ open, onClose, refresh }: any) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const save = async () => {
    await productService.create({ name, price: Number(price) });
    refresh();
    onClose();
  };

  return (
    <PinkDialog open={open} onClose={onClose} title="Add New Product 💗">
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
        Save
      </Button>
    </PinkDialog>
  );
}
