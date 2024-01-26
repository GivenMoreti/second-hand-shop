import React, { useState } from "react";
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
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../src/store/cartSlice";
import { Link as RouterLink } from "react-router-dom";
import {
  ArrowUpDownIcon,
  DeleteIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";


export const CartPage = () => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart);
  // get total payable in cart
  const totalPrice = itemsInCart
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);

  const totalQuantity = itemsInCart
    .map((item) => item.count)
    .reduce((prev, curr) => prev + curr, 0);

  // remove item from cart
  const itemRemove = (item) => {
    dispatch(remove(item));
  };

  // check box for delivery
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container maxW={"container.xlg"} mt={10} >
      <Flex justifyContent={"center"}>
        <Text fontSize={30}>Shopping Cart</Text>
       
      </Flex>
    <TableContainer  >
      <Table variant="striped" colorScheme="gray" size="md">
   
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Quantity</Th>
            <Th isNumeric>Price</Th>
            <Th>
              
              <DeleteIcon />
            </Th>
            <Th>
              <ArrowUpDownIcon />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {itemsInCart.length > 0 ? (
            itemsInCart.map((item) => (
              <Tr key={item.id}>
                <Td>{item.title}</Td>
                <Td>{item.rating.count}</Td>
                <Td isNumeric>R{item.price}</Td>
                <Td cursor={"pointer"} onClick={() => itemRemove(item)}>
                  <DeleteIcon color={"red.600"} fontSize={20} />
                </Td>
                <Td>
                  <Flex gap={2}>
                    <Text
                      _hover={{ color: "blue.500", fontSize: 20 }}
                      cursor={"pointer"}
                    >
                      {" "}
                      <ChevronUpIcon
                        bgColor={"blue.200"}
                        fontSize={30}
                        borderRadius={5}
                      />
                    </Text>
                    <Text
                      _hover={{ color: "red.500", fontSize: 20 }}
                      cursor={"pointer"}
                    >
                      <ChevronDownIcon
                        bgColor={"red.200"}
                        fontSize={30}
                        borderRadius={5}
                      />
                    </Text>
                  </Flex>
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

                    <Stack spacing={[1, 5]} direction={["column", "row"]}>
                      <Checkbox
                        size="lg"
                        colorScheme="orange"
                        isChecked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                      >
                        Do you want delivery?
                      </Checkbox>
                      {isChecked ? (
                        <Link to={"/delivery"} as={RouterLink}>
                          <Button colorScheme="teal" variant="outline">
                            Go to delivery
                          </Button>
                        </Link>
                      ) : (
                        <Link to={"/payment"} as={RouterLink}>
                          <Button colorScheme="teal" variant="outline">
                            Go to delivery
                          </Button>
                        </Link>
                      )}
                    </Stack>

                    {/* take user to delivery */}
                  </Flex>
                </Box>
              ) : null}
            </Flex>
          </Tfoot>
        </Tbody>
      </Table>
    </TableContainer>
    </Container>
  );
};
