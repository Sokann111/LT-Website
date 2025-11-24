import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function PinkDialog({ open, onClose, title, children }: any) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
          paddingBottom: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#ff80ab",
          padding: "14px 20px",
          borderRadius: "16px 16px 0 0",
          color: "white",
        }}
      >
        <DialogTitle sx={{ p: 0, color: "white", fontWeight: "bold" }}>
          {title}
        </DialogTitle>

        <IconButton onClick={onClose} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ mt: 2 }}>{children}</DialogContent>
    </Dialog>
  );
}
