import React from "react";
import { Avatar, Flex, Text, VStack } from "@chakra-ui/react";

export const User = ({ followers, name, avatar }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={4}>
        <Avatar src={avatar} name={name} />
        <VStack spacing={1}>
          <Text fontWeight={"bold"}>{name}</Text>
          <Text  color={"gray.500"}>{followers} followers</Text>
        </VStack>
      </Flex>
      <Text color={"gray.500"} cursor={"pointer"}>
        Follow
      </Text>
    </Flex>
  );
};
// usage <User name= "mike" followers={234} avatar ={https://github.com/foo.png} />
/**
 *alternatively
 export const User = (props) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={4}>
        <Avatar src={props.avatar} name={props.name} />
        <Text fontWeight={"bold"}>{props.name}</Text>
        <Text fontWeight={"bold"}>{props.followers}</Text>
      </Flex>
      <Text color={"gray.500"} cursor={"pointer"}>
        Follow
      </Text>
    </Flex>
  );
}; 
 */
