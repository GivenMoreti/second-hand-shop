import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {removeFromWishList} from "../../src/store/wishListSlice";
import { add } from "../../src/store/cartSlice";
import {
  ArrowUpDownIcon,
  DeleteIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  AddIcon
} from "@chakra-ui/icons";




export const WishList = () => {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishlist);

  // remove item from wish list
  const removeWishListFunc = (item) => {
    dispatch(removeFromWishList(item));
  };






  const addToCart = (item) => {
    dispatch(add(item));
    // remove it from wishlist once added to cart
    dispatch(removeFromWishList(item));
  };
  return (
    <Container maxW={"container.xlg"} mt={10}  >
      <Flex justifyContent={"center"}>
        <Text fontSize={30}>Wishlist</Text>
      </Flex>
      
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Quantity</Th>
              <Th isNumeric>Price</Th>
              <Th> <DeleteIcon /></Th>
              <Th>Add to cart</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* implements add to wishlist logic using redux */}
            {wishListItems.length > 0 ? (
              wishListItems.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.title}</Td>
                  <Td>{item.rating.count}</Td>
                  <Td isNumeric> R{item.price}</Td>
                  {/* remove from wish list button below */}
                  <Td
                    cursor={"pointer"}
                    onClick={() => removeWishListFunc(item)}
                  >
                     <DeleteIcon />
                  </Td>
                  <Td cursor={"pointer"} onClick={() => addToCart(item)}>
                  <AddIcon/>
                  </Td>
                </Tr>
              ))
            ) : (
              <Text>WishList is empty</Text>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};
