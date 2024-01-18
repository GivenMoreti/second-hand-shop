import { Box, Flex, Link, Image, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
// sidebar info

const sidebarIcons = [
  {
    icon: <span class="material-icons md-20">home</span>,
    text: "Home",
    link: "/",
  },
  {
    icon: <span class="material-icons md-18">search</span>,
    text: "Search",
    link: "/",
  },
  {
    icon: <span class="material-icons md-18">notifications</span>,
    text: "Notifications",
    link: "/",
  },
  {
    icon: <span class="material-icons md-18">person</span>,
    text: "Profile",
    link: "/:",
  },
  {
    icon: <span class="material-icons md-18">add</span>,
    text: "Create",
    link: "/",
  },
  {
    icon: <span class="material-icons md-18">logout</span>,
    text: "Logout",
    link: "/auth",
  },
];

export const SideBar = () => {
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }} //for responsive screens
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <Image src="twitter.pnghttps://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww" />
        </Link>
        <Flex direction={"column"} w={"full"} h={"full"} cursor={"pointer"} gap={5} mt={0}>
        {sidebarIcons.map((item, index) => (
          <Tooltip
          key={index}
            hasArrow
            label={item.text}
            placement="right"
            openDelay={500}
            ml={1}
            display={{ base: "block", md: "none" }}
          >
            <Link
              display={"flex"}
              to={item.link || null}
              as={RouterLink}
              alignItems={"center"}
              p={2}
              gap={4}
            _hover={{bg:"whiteAlpha.400"}}
              borderRadius={6}
              w={{base:10,md:"full"}}
              // justifyContent={{base:}}
            >
              {item.icon}
              <Box display={{base:"none",md:"block"}} mt={0}>{item.text}</Box>
            </Link>
            {/* logout */}
            
          </Tooltip>
        ))}
      </Flex>
      </Flex>
      
    </Box>
  );
};
