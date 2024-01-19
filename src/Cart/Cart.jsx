import React from "react";

import { Container, Text, Link,Flex, Button,Modal } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Cart = () => {
  return (
    <Flex>
      <Link to={"/cart"} as={RouterLink}>
        <Button>
        <Text>cart</Text>
        </Button>
        
      </Link>
    </Flex>
   
  );
};
