import React from "react";
import {
  Container,
  Flex,
  Text,
  VStack,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Link,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../../src/store/cartSlice";
import { Link as RouterLink } from "react-router-dom";

export const CartPage = () => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart);

  const totalPrice = itemsInCart
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);
  const totalQuantity = itemsInCart
    .map((item) => item.count)
    .reduce((prev, curr) => prev + curr, 0);

  const itemRemove = (item) => {
    dispatch(remove(item));
  };

  return (
    <TableContainer p={4} maxW={"full"} w={{}}>
      <Table variant="striped" colorScheme="gray" size="md">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Quantity</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {itemsInCart.length > 0 ? (
            itemsInCart.map((item) => (
              <Tr>
                <Td>{item.title}</Td>
                <Td>{item.rating.count}</Td>
                <Td isNumeric>R{item.price}</Td>
                <Td cursor={"pointer"} onClick={() => itemRemove(item)}>
                  Remove item
                </Td>
              </Tr>
            ))
          ) : (
            <Flex m={10} p={5}>
              <Text alignItems={"center"}>Cart is empty</Text>
            </Flex>
          )}
          {/* get total price */}
          <Tfoot>
            <Flex
              justifyContent={"space-around"}
              alignItems={"center"}
              p={5}
              gap={5}
            >
              {/* only render component if !cart  */}
              {itemsInCart.length > 0 ? (
                <Box justifyContent={"space-between"}>
                  <Flex alignContent={"center"} p={10} gap={10}>
                    <Text>Total due:</Text>
                    <Text>R{totalPrice}</Text>

                    {/* take user to payment */}
                    <Link to={"/payment"} as={RouterLink}>
                      <Button colorScheme="teal" variant="outline">
                        pay now
                      </Button>
                    </Link>
                  </Flex>
                </Box>
              ) : null}
            </Flex>
          </Tfoot>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
