import { Container, Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { SellForm } from './SellForm'

export const SellPage = () => {
  return (
    <Container p={5} justifyContent={"center"}>
        <Text textAlign={"center"} fontSize={20}>Create account and start selling</Text>
        <Flex justifyContent={"center"} gap={4}>
            
             {/* form */}
             <SellForm/>
        </Flex>    
    </Container>
  )
}
