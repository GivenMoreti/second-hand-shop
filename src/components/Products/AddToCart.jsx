import { Button, Text } from "@chakra-ui/react";

export const AddToCart = (props) => {
  return (
    <Button
      colorScheme="teal"
      variant="outline"
      _hover={{ bg: "teal", color: "White", outline: "0px" }}
    >
      <Text>{props.title}</Text>
    </Button>
  );
};
