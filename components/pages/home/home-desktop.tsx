import { Box, VStack, Text, HStack, Container } from "@chakra-ui/react";
import React from "react";

type Props = {};

const HomeDesktop = (props: Props) => {
  return (
    <VStack width={`100%`} minH={`100vh`}>
      <Container maxW='container.sm'>
        <HStack
          justify={`center`}
          w={`100%`}
          minH={`100vh`}
          alignItems={`center`}
        >
          <Box textAlign={`center`} w={`100%`}>
            <Text fontSize={`48px`}>Ahmad Zaini Nijar</Text>
            <Text>SOFTWARE ENGINEER, FRONT END, BACK END  & APP DEVELOPER.</Text>
          </Box>
        </HStack>
      </Container>
    </VStack>
  );
};

export default HomeDesktop;
