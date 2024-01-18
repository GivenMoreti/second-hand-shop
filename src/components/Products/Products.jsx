import { Container, Grid } from "@chakra-ui/react";
import { Grid4x4 } from "@mui/icons-material";
import React from "react";
import { ProductItem } from "./ProductItem";

export const Products = () => {
  const productsList = [
    {
      id: 1,
      title: "Best Laptop 3",
      price: 9865,
      description: "best laptop 2",
      productImage:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      title: "Toys",
      price: 33,
      description: " toys",
      productImage:
        "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG95JTIwY2FyfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      title: "Macbook pro",
      price: 3333,
      description: " best laptop",
      productImage:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      title: "Macbook pro",
      price: 3333,
      description: " best laptop",
      productImage:
        "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      title: "Printer pro",
      price: 4885,
      description: " best laptop",
      productImage:
        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id:6,
        title:"paper",
        price:12,
        description:"paper recycle",
        productImage:"https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByaW50ZXJ8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <Grid
      maxW={"container.lg"}
      py={5}
      templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(4,2fr)" }}
      gap={1}
      columnGap={1}
      p={2}
    >
      {productsList.map((item) => (
        <ProductItem
          key={item.id}
          price={item.price}
          title={item.title}
          productImage={item.productImage}
        />
      ))}
    </Grid>
  );
};
