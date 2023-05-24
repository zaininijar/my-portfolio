import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";

type Props = {};

const HomeDesktop = (props: Props) => {
  return (
    <VStack width={`100%`} border={`1px solid`} minH={`100vh`}>
      <HStack
        border={`1px solid`}
        justify={`space-between`}
        w={`100%`}
        minH={`100vh`}
        alignItems={`center`}
      >
        <Box border={`1px solid`} w={`50%`}>
          <Text>Hi! I am Ahmad Zaini Nijar</Text>
          <Text>Software Engineer</Text>
        </Box>
        <Box border={`1px solid`} w={`50%`}>
          <Text>Hi! I am Ahmad Zaini Nijar</Text>
          <Text>Software Engineer</Text>
        </Box>
      </HStack>
    </VStack>
  );
};

export default HomeDesktop;
