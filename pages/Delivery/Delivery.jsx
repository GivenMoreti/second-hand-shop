import { Container, Text, Link, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export const Delivery = () => {
  const [delivery, setDelivery] = useState(false);
  return (
    <Container>
      Delivery page
      <Text>Check distance</Text>
      <Text>Ask if delivery is required</Text>
      <Text>Calculate delivery fee</Text>
      {delivery ? (
        <Link to={"/delivery"} as={RouterLink}>
          <Button colorScheme="teal" variant="outline">
            go to delivery
          </Button>
        </Link>
      ) : (
        <Link to={"/payment"} as={RouterLink}>
          <Button colorScheme="teal" variant="outline">
            Go to payment
          </Button>
        </Link>
      )}
    </Container>
  );
};
