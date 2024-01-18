import {
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Box,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";

export const ProfilePost = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem
        onClick={onOpen}
        cursor={"pointer"}
        overflow={"hidden"}
        border={"1px solid"}
        position={"relative"}
        borderColor={"whiteAlpha.300"}
        aspectRatio={1 / 1}
      >
        {/* anything inside below Flex is visible on Hover */}
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            {/* icon */}
            <Flex alignItems={"center"} gap={2}>
              <BsSuitHeartFill />
              <Text fontSize={"bold"}>7</Text>
            </Flex>

            <Flex>
              <FaComment size={20}>
                <Text fontWeight={"bold"} ml={2}>
                  7
                </Text>
              </FaComment>
            </Flex>
          </Flex>
        </Flex>
        <Image src={props.img} />
      </GridItem>

      {/* modal starts here */}
      <Modal
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>hi user</ModalHeader>
          <ModalBody>
            <Flex
              mx={"auto"}
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whotwAlpha.300"}
                flex={1.5}
              >
                <Image src={props.img} alt="'profile post" />
              </Box>
            </Flex>
            <Flex flex={1} justifyContent={"flex-end"} flexDir={"column"} px={10} display={{base:"none",md:"flex"}}>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Avatar src={props.img} size={"sm"} name={props.name}/>
                <Text>{props.name}</Text>
              </Flex>




            </Flex>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};
