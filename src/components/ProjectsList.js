import {
  Box,
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Date from "../utils/date";

export default function ProjectList({ items }) {
  const bgHover = useColorModeValue("gray.100", "blackAlpha.200");
  const color = useColorModeValue("gray.700", "white");

  const Thumbnail = () => {
    return (
      <NextLink
        href="https://dribbble.com/shots/19545034-3D-Statue-of-Liberty"
        passHref
      >
        <Link isExternal>
          <Box
            bg="gray"
            w={{ base: "200px", md: "250px" }}
            h="full"
            p={3}
            borderRadius="md"
            align="center"
            bgImage="https://cdn.dribbble.com/users/6366453/screenshots/19545034/media/c68e96838517fd4c1cdc149a1e8a1b28.jpg?compress=1&resize=768x576&vertical=top"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            cursor="pointer"
          />
        </Link>
      </NextLink>
    );
  };
  const Details = ({ id, date, title }) => {
    return (
      <VStack w="full" color="gray.500" fontSize="sm">
        <HStack w="full">
          <VStack align="left" spacing={0}>
            <Text fontWeight="medium" color={color} fontSize="md">
              {title}
            </Text>
            <Text>NextJS / ChakraUI / WebPack</Text>
          </VStack>
        </HStack>
        <HStack w="full" justify="space-between">
          <NextLink href={`/posts/${id}`} passHref>
            <Link>Leer sobre su desarrollo...</Link>
          </NextLink>
          <Text>
            <Date dateString={"2020-01-01"}/>
          </Text>
        </HStack>
      </VStack>
    );
  };
  const Card = ({ ...props }) => {
    return (
      <HStack
        w="full"
        p={3}
        spacing={6}
        _hover={{ background: bgHover }}
        align="stretch"
        borderRadius="md"
      >
        <Thumbnail />
        <Details {...props} />
      </HStack>
    );
  };
  const ListContainer = ({ children }) => {
    return (
      <VStack pt="calc(327px + 2.25rem)" mb={{ base: 7, md: 10 }}>
        {children}
      </VStack>
    );
  };
  return (
    <ListContainer>
      {items.map(({ id, date, title }, index) => (
        <Card key={index} {...{ id, date, title }} />
      ))}
    </ListContainer>
  );
}
