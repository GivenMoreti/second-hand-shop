import React from "react";
import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import { AuthForm } from "./AuthForm";

export const AuthPage = () => {
  return (
    <Flex
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      px={10}
    >
      <Container maxW={"container.md"} padding={0}>
        <Flex>
        {/* left hand img */}
     
          <Box display={{ base: "none", md: "block" }}>
            <Image src="./BottomOcean.png" />
           
          </Box>
         
          {/* right hand  form*/}
          <VStack>
            <AuthForm />
            <Box textAlign={"center"}>We are on all platforms</Box>
            <Flex gap={5} justifyContent={"center"}>
                <Image src ="./twitter.png"/>
                <Image src ="./twitch.png"/>
                <Image src ="./linkedin.png"/>
                <Image src ="./google.png"/>
                <Image src ="./amazon.png"/>
                <Image src ="./apple.png"/>
            </Flex>
          </VStack>
          </Flex>
      </Container>
    </Flex>
  );
};
