import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography, Button } from "@mui/material";
import Product from "./Product";
import styled from "@emotion/styled";

const SortButton = styled(Button)`
  padding: 10px;
  margin: 10px;
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSort = () => {
    setAscendingOrder(!ascendingOrder);
    const sortedProducts = [...products].sort((a, b) =>
      ascendingOrder ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  return (
    <>
      <SortButton variant="outlined" onClick={handleSort}>
        {ascendingOrder ? "Sort Ascending" : "Sort Descending"}
      </SortButton>
      {products && products.length > 0 ? (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.id} lg={3} md={4} sm={6} xs={12}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No products available</Typography>
      )}
    </>
  );
};

export default Products;
