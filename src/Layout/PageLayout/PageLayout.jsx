import { Box, Flex, calc } from "@chakra-ui/react";
import React from "react";
import { SideBar } from "../../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";

export const PageLayout = ({ children }) => {

    const {pathname} = useLocation();
  
    return (
    <Flex>
        {/* render sidebar on any page except auth page */}
        {pathname !== '/auth'? (
            <Box w={{base:"70px",md:"240px"}}>
        <SideBar  />
      </Box>
        ): null
        }
      
      <Box flex={1} w={{base:"calc(100% - 70px)",md:"calc(100% - 240px)"}}>
        {children}
        </Box>
    </Flex>
  );
};
