import React from "react";
import { InputRightAddon } from "@chakra-ui/react";

import {
  Box,
  Flex,
  Link,
  Image,
  Tooltip,
  Input,
  InputGroup,
} from "@chakra-ui/react";

export const FilterBar = () => {
  return (
    <Flex alignItems={"center"} gap={4} justifyContent={"center"} p={4}>
      <InputGroup>
        <Input size={"md"} placeholder="search for anything" />
        <InputRightAddon cursor={"pointer"}>search</InputRightAddon>
      </InputGroup>
    </Flex>
  );
};
