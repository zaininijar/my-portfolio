import { ThreeDCubic } from "@/components/general";
import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {};

const HomeMobile = (props: Props) => {
  return (
    <VStack width={`100%`} height={`80vh`} justifyContent={`center`}>
      <ThreeDCubic />
      <Container maxW="container.lg" position={`absolute`}>
        <HStack justify={`center`} w={`100%`} h={`100%`} alignItems={`center`}>
          <Box textAlign={`center`} w={`100%`}>
            <HStack justifyContent={`center`} gap={`10px`}>
              <Text fontSize={`26px`} fontWeight={`extrabold`}>
                Ahmad
              </Text>
              <Text fontSize={`26px`} fontWeight={`extrabold`} color={`light`}>
                Zaini
              </Text>
              <Text fontSize={`26px`} fontWeight={`extrabold`}>
                Nijar
              </Text>
            </HStack>
            <HStack
              justifyContent={`center`}
              fontSize={`14px`}
              fontWeight={`bold`}
            >
              {proffession.map((pr) => (
                <Link href={`/${pr.name}`} key={pr.id}>
                  {pr.id === proffession.length - 1 ? (
                    <Text _hover={{ color: "light" }}>{`${pr.title} &`}</Text>
                  ) : pr.id === proffession.length ? (
                    <Text _hover={{ color: "light" }}>{pr.title}</Text>
                  ) : (
                    <Text _hover={{ color: "light" }}>{`${pr.title},`}</Text>
                  )}
                </Link>
              ))}
            </HStack>
          </Box>
        </HStack>
      </Container>
    </VStack>
  );
};

const proffession = [
  {
    id: 1,
    name: "software_engineer",
    title: "SOFTWARE ENGINEER",
  },
  {
    id: 2,
    name: "frontend",
    title: "FRONT END",
  },
  {
    id: 3,
    name: "backend",
    title: "BACK END",
  },
  {
    id: 4,
    name: "app_developer",
    title: "APP DEVELOPER",
  },
];

export default HomeMobile;
