import React from "react";
import { Image, Text, Flex } from "@chakra-ui/react";

export const GoogleAuth = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Image src="./google.png" w={5} alt="google logo" />
      <Text mx={2} color={"blue.500"} cursor={"pointer"}>
        Sign in with google
      </Text>
    </Flex>
  );
};
