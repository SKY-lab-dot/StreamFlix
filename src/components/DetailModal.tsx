import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import { useDetailModal } from "src/providers/DetailModalProvider";

export default function DetailModal() {
  const { detailType, setDetailType } = useDetailModal();

  const handleClose = () => {
    setDetailType(null);
  };

  return (
    <Dialog
      open={Boolean(detailType)}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: "background.paper",
          color: "text.primary",
        },
      }}
    >
      <DialogContent sx={{ position: "relative", minHeight: 200 }}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            zIndex: 2,
          }}
        >
          <CloseIcon />
        </IconButton>

        {detailType && (
          <Box sx={{ pt: 3 }}>
            <Typography variant="h5" fontWeight={700}>
              Movie Details
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Media Type: {String(detailType.mediaType)}
            </Typography>

            <Typography>
              Movie ID: {detailType.id}
            </Typography>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}