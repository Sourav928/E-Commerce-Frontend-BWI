import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const Product = ({ product }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography>{product.title}</Typography>
          <Typography>
            {product.description.length > 40
              ? product.description.substring(0, 40) + "..."
              : product.description}
          </Typography>
          <Typography>{product.price}₹</Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined">Add to Wishlist</Button>
          <Button variant="contained">Buy Now</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
