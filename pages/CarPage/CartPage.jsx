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
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import {remove} from "../../src/store/cartSlice";

export const CartPage = () => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart);

  const totalPrice = itemsInCart
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);
  const totalQuantity = itemsInCart.map((item)=>item.quantity).reduce((prev,curr)=>prev + curr,0);
  
  const itemRemove=(item)=>{
    dispatch(remove(item));
  }
  
  return (
    <TableContainer p={4}>
      <Table variant='striped' colorScheme='gray' size='md'>
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
                <Td>{item.quantity}</Td>
                <Td isNumeric>R{item.price}</Td>
                <Td cursor={"pointer"} onClick={()=>itemRemove(item)}>Remove</Td>
              </Tr>
            ))
          ) : (
            <Flex>
              <Text>Cart is empty</Text>
            </Flex>
          )}
          {/* get total price */}
         <TableCaption >
          <Flex justifyContent={"space-between"}>
            <Text>Total due:</Text> 
            <Text>R{totalPrice}</Text>
            
            </Flex>
          </TableCaption>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
