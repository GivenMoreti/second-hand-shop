import React from "react";
import { Container, Text, Link,Flex, Button,Modal } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Cart = () => {
  
  const cartItems = useSelector(state=> state.cart); //for the cart in store.js
  console.log("items in cart "+ cartItems)
  
  return (
    <Flex>
      <Link to={"/cart"} as={RouterLink}>
        <Button>
        <Text>cart {cartItems.length}</Text>
        </Button>
        
      </Link>
    </Flex>
   
  );
};
