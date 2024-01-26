import {
  Card,
  Box,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons'

export const ProductCard = (props) => {
  const addToCart = () => {
    alert("added");
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          onClick={() => {}}
          _hover={{ opacity: 0.2 }}
          boxSize="200px"
          objectFit="fill"
          src={props.image}
          alt="item image"
          // borderRadius='lg'
        />
        
        <Stack mt="4" spacing="2">
          <Heading size="md">{props.title}</Heading>
          <Text>{props.description}</Text>
          <Text>In stock {props.inStock}</Text>
          <Text>{props.reviews} <StarIcon/></Text>
          {/* <Text>{props.category}</Text> */}
          <Text color="blue.600" fontSize="2xl">
            R{props.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};
