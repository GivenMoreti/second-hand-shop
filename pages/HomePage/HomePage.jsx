import { Container, Flex, Image, Box, Grid } from "@chakra-ui/react";
import React from "react";
import { FilterBar } from "../../src/components/FilterBar/FilterBar";
import { Products } from "../../src/components/Products/Products";

export const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <FilterBar />
      <Flex gap={4}>
        <Box flex={2} py={2}>
          <Products />
        </Box>
      </Flex>
    </Container>
  );
};
