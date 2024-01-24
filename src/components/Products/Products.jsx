import { Container, Grid } from "@chakra-ui/react";
import { Grid4x4 } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
// import { ProductItem } from "./ProductItem";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const allProducts = products.map((product) => (
    <ProductCard
      key={product.id} // Add a unique key to each ProductItem
      // id={product.id}
      image = {product.image}
      title={product.title}
      price={product.price}
    />
    




  ));

  return (
    <Grid
      maxW={"container.lg"}
      py={5}
      templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(4,2fr)" }}
      gap={1}
      columnGap={1}
      p={2}
    >
      {allProducts}
    </Grid>
  );
};
