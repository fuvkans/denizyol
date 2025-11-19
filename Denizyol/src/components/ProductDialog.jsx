import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  IconButton,
  Box,
  Skeleton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ProductDialog({ open, onClose, product, onAddToCart }) {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [isAdding, setIsAdding] = React.useState(false);

  React.useEffect(() => {
    setImageLoaded(false);
  }, [product?.id]);

  const handleAddToCart = async () => {
    if (!product || isAdding) return;

    setIsAdding(true);
    try {
      await onAddToCart?.(product);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };

  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="product-dialog-title"
    >
      <DialogTitle id="product-dialog-title" sx={{ pr: 6 }}>
        {product.title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ position: "relative", mb: 2 }}>
          {!imageLoaded && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height={300}
              sx={{ borderRadius: 2 }}
            />
          )}
          <img
            src={product.image}
            alt={product.title}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = "/placeholder-image.jpg"; // Fallback image
              setImageLoaded(true);
            }}
            style={{
              width: "100%",
              borderRadius: 8,
              display: imageLoaded ? "block" : "none",
            }}
          />
        </Box>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>

        <Typography
          variant="h5"
          color="primary"
          fontWeight="bold"
          sx={{ mb: 3 }}
        >
          {product.price.toLocaleString("tr-TR")}₺
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={handleAddToCart}
          disabled={isAdding}
          sx={{ mt: 2 }}
        >
          {isAdding ? "Ekleniyor..." : "Add to Cart"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
