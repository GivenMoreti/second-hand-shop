import { Button, Text } from "@chakra-ui/react";

export const AddToCart = (props) => {
  return (
   
    <Button
      // w={"full"}
      colorScheme="teal"
      variant="outline"
      _hover={{ bg: "teal", color: "White", outline: "0px" }}
    >
      <Text>{props.title} {props.icon}</Text>
    </Button>
  
  );
};
