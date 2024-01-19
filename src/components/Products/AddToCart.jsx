import { Button, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const AddToCart = (props) => {
  return (
   
    <Button
      onClick={props.onClick}
      colorScheme="teal"
      variant="outline"
      _hover={{ bg: "teal", color: "White", outline: "0px" }}
    >
      <Text>{props.title}</Text>
    </Button>
  
  );
};
