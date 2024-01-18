import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {BsBookmark, BsGrid3X3, BsSuitHeart} from 'react-icons/bs';

export const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      textTransform={"uppercase"}
      fontWeight={"bold"}
      gap={4}
     
      // borderTop={"0.2px solid gray"} //go be removed
    >
      <Flex alignItems={"center"}  gap={4}>
        <Box fontSize={20}>
          <BsGrid3X3/>
        </Box>
        <Text fontSize={12} display={{base:"none",sm:"block"}}>Posts</Text>
      </Flex>

      <Flex alignItems={"center"} gap={4}>
        <Box fontSize={20}>
          <BsBookmark/>
        </Box>
        <Text fontSize={12} display={{base:"none",sm:"block"}}>saved</Text>
      </Flex>

      <Flex alignItems={"center"} gap={4}>
        <Box fontSize={20}>
          <BsSuitHeart/>
        </Box>
        <Text fontSize={12} display={{base:"none",sm:"block"}}>Liked</Text>
      </Flex>
    </Flex>
  );
};
