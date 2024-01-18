import {
  Box,
  Button,
  Image,
  Input,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { GoogleAuth } from "./GoogleAuth";


export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Box border={"0.1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        {/* logo */}
        <Image src="./OceanBottomText.png" boxSize="150px" objectFit="cover" />
        
          {isLogin ? <Login /> : <SignUp/>}
       
        {/* -----OR---- */}
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          my={4}
          gap={1}
          w={"full"}
        >
          <Box flex={2} h={"1px"} bg={"gray.400"} />
          <Text mx={1} color={"white"}>
            OR
          </Text>
          <Box flex={2} h={"1px"} bg={"gray.400"} />
        </Flex>

        <GoogleAuth/>

        {/* sign up if you dont have account */}

        <Flex lignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have account?" : "already have account"}
          </Box>
          <Box
            mx={2}
            fontSize={14}
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "login"}
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};
