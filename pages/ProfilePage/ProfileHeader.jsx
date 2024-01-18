import {
  Flex,
  VStack,
  Text,
  AvatarGroup,
  Avatar,
  Button,
} from "@chakra-ui/react";
import React from "react";

export const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          name="Given chie"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="profile img"
        />
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>Given chie</Text>

          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        {/* following information starts */}
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text>
            <Text as={"span"} fontWeight={"bold"}>
              4
            </Text>
            posts
          </Text>
          <Text>
            <Text as={"span"} fontWeight={"bold"}>
              265
            </Text>
            Followers
          </Text>
          <Text>
            <Text as={"span"} fontWeight={"bold"}>
              199
            </Text>
            Following
          </Text>
        </Flex>
        {/* bio information starts*/}
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text>project gorilla</Text>
        </Flex>
      </VStack>
    </Flex>
  );
};
