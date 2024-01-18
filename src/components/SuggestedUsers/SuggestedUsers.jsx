import { Container, VStack, Flex, Text } from "@chakra-ui/react";
import { User } from "./User";
import { SuggestedHeader } from "./SuggestedHeader";

export const SuggestedUsers = () => {
  return (
    <VStack maxW={"container.sm"} py={10}>
      <SuggestedHeader />
      <Flex alignItems={"center"} w={"full"} justifyContent={"space-between"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>

        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          See all
        </Text>
      </Flex>
      <User
        name="Camella Kors"
        followers={123}
        avatar="https://images.unsplash.com/photo-1587614382231-d1590f0039e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJzfGVufDB8fDB8fHww"
      />
      <User
        name="Daniel James"
        followers={433}
        avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
      />
      <User
        name="Jen Lindley"
        followers={433}
        avatar="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHVzZXJzfGVufDB8fDB8fHww"
      />
    </VStack>
  );
};
