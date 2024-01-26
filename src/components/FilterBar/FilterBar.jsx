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
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Cart } from "../../Cart/Cart";
import { HeaderFilters } from "../HeaderFilters/HeaderFilters";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { StarIcon } from '@chakra-ui/icons'
export const FilterBar = () => {

  const wishListItems = useSelector((state) => state.wishlist);

  return (
    <Container justifyContent={"space-around"} maxW={"container.lg"} px={4}>
      <Flex p={2} justifyContent={"space-between"} m={4}>
        <InputGroup w={"auto"} mx={2}>
          <Input size={"md"} placeholder="search for anything" />
          <InputRightAddon cursor={"pointer"}>
            <Text p={3} alignItems={"center"}>
              search
            </Text>
            <SearchIcon />
          </InputRightAddon>
        </InputGroup>
        <Cart />
        {/* wishlist btn */}
        <Box>
          <Link to={"/wishlist"} as={RouterLink}>
          <Button variant="outline">
            <Text p={3} alignContent={"center"}>Wishlist {wishListItems.length} <StarIcon /> </Text>
          </Button>
          </Link>
        </Box>
      </Flex>

      <HeaderFilters />
    </Container>
  );
};
