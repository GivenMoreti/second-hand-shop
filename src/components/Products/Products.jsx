import { Container, Grid } from "@chakra-ui/react";
import { Grid4x4 } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import {
  Card,
  ButtonGroup,
  Button,
  CardFooter,
  Box,
  Text,
} from "@chakra-ui/react";
//adding item to cart functionality
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";

export const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    //dispatch add action
    dispatch(add(product));
  };

  const allProducts = products.map((product) => (
    <Container>
      <Card maxW="sm">
        <ProductCard
          key={product.id} // Add a unique key to each ProductItem
          // id={product.id}
          image={product.image}
          title={product.title}
          inStock={product.rating.count}
          reviews={product.rating.rate}
          price={product.price}
        />

        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Container>
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
