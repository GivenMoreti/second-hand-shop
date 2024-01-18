import {
  GridItem,
  Container,
  Box,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AddToCart } from "./AddToCart";

export const ProductItem = (props) => {
  return (
    <Container maxW={"container.sm"} py={5} border={"0.5px solid gray"}>
      <Box>
        <Image objectFit='cover' boxSize='200px' src={props.productImage} />
      </Box>
      <VStack p={2} alignItems={"flex-start"}>
        <Box>
          <Text>{props.title}</Text>
          <Text>R{props.price}</Text>
          <Text>{props.details}</Text>
        </Box>
        
      </VStack>
      <AddToCart title={"Add to cart"}/>
    </Container>
  );
};
