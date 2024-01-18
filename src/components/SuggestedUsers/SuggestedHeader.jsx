import { Avatar, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar
          name="Jane Doe"
          size={"lg"}
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
        />
        <Text fontSize={12} fontWeight={"bold"}>Jane Doe</Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontWeight={"medium"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
        color={"blue.400"}
      >
        Logout
      </Link>
    </Flex>
  );
};
