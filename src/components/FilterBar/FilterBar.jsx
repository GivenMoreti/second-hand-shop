import React from "react";

import {
  Box,
  Flex,
  Link,
  Image,
  Tooltip,
  Input,
  Text,
  InputGroup,
  InputRightAddon,
  Container,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Cart } from "../../Cart/Cart";
import { HeaderFilters } from "../HeaderFilters/HeaderFilters";
export const FilterBar = () => {
  return (
    <Container alignItems={"center"} gap={2} justifyContent={"center"} p={4}>
      <Flex p={2}>
        <InputGroup w={"2000px"}>
          <Input size={"md"} placeholder="search for anything" />
          <InputRightAddon cursor={"pointer"}>
            <Text p={3} alignItems={"center"}>
              search
            </Text>
            <SearchIcon />
          </InputRightAddon>
        </InputGroup>
        <Cart />
      </Flex>

      <HeaderFilters />
    </Container>
  );
};
