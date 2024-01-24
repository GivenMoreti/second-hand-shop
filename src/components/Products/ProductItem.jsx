import {
  GridItem,
  Container,
  Box,
  Image,
  VStack,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AddToCart } from "./AddToCart";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export const ProductItem = (props) => {
  const [isAddedToCart, setIsAddedToCart] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const handleAddToCart = () => {
    setIsAddedToCart(!isAddedToCart);
  };
  const increment = () => {
    setQuantity(quantity +  1);
    if(quantity === 10){
      alert("cannot add more than 10 items");
      return null;
    }
  };
  const decrement = () => {
    setQuantity(quantity - 1);
    if(quantity === 0){
      setIsAddedToCart(true);
    }
  };

  return (
    <Container maxW={"container.sm"} py={5} border={"0.5px solid gray"}>
      <Box>
        <Image objectFit="fill" boxSize="200px" src={props.productImage} />
      </Box>
      <VStack p={2} alignItems={"flex-start"}>
        <Box>
        <Text>{props.id}</Text>
       
          <Text>{props.title}</Text>
          <Text>R{props.price}</Text>
          <Text>{props.description}</Text>
          <Text>{props.category}</Text>
        </Box>
      </VStack>

      {isAddedToCart ? (
        <AddToCart title="Add to cart" onClick={handleAddToCart} />
      ) : (
        <Flex alignItems={"center"} mx={4} px={4}>
          <Button onClick={increment}>
            <AddIcon />
          </Button>
          <Text mx={4}>{quantity}</Text>
          <Button onClick={decrement}>
           
            <MinusIcon />
          </Button>
        </Flex>
      )}
    </Container>
  );
};
