import { useState } from "react";
import { Button, TextField } from "@mui/material";
import PinkDialog from "../../../components/ui/PinkDialog";
import { categoryService } from "../../../services/category.service";

export default function CategoryCreate({ open, onClose, refresh }: any) {
  const [name, setName] = useState("");

  const save = async () => {
    await categoryService.create({ name });
    refresh();
    onClose();
  };

  return (
    <PinkDialog open={open} onClose={onClose} title="Add New Category 💗">
      <TextField
        label="Category Name"
        fullWidth
        sx={{ mb: 2 }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          bgcolor: "#ff80ab",
          "&:hover": { bgcolor: "#ff4f95" },
        }}
        onClick={save}
      >
        Save
      </Button>
    </PinkDialog>
  );
}
