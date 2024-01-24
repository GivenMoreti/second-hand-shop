import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Divider,ButtonGroup,Button,Image,Text } from '@chakra-ui/react';


export const ProductCard = (props) => {
  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src={props.image}
        alt='item image'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{props.title}</Heading>
        <Text>
          {props.description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          R{props.price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}
