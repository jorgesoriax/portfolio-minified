import {
  Box,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Date from "../utils/date";

export default function ProjectList({ items }) {
  const bgHover = useColorModeValue("gray.100", "blackAlpha.200");
  const color = useColorModeValue("gray.700", "white");

  const Thumbnail = ({ cover, website }) => {
    return (
      <NextLink href={website} passHref>
        <Link isExternal>
          <Box
            bg="gray"
            w={{ base: "100%", md: "250px" }}
            h={{ base: "100px", md: "75px" }}
            borderRadius="md"
            align="center"
            bgImage={cover}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            cursor="pointer"
          />
        </Link>
      </NextLink>
    );
  };
  const Details = ({ id, date, title, tools }) => {
    return (
      <VStack
        w="full"
        color="gray.500"
        fontSize="sm"
        spacing={{ base: 4, md: 0 }}
        justify="space-between"
      >
        <HStack w="full">
          <VStack align="left" spacing={0}>
            <Text fontWeight="medium" color={color} fontSize="md">
              {title}
            </Text>
            <Text>{tools}</Text>
          </VStack>
        </HStack>
        <HStack w="full" justify="space-between">
          <NextLink href={`/posts/${id}`} passHref>
            <Link>Leer sobre su desarrollo...</Link>
          </NextLink>
          <Text>
            <Date dateString={date} />
          </Text>
        </HStack>
      </VStack>
    );
  };
  const Card = ({ cover, website, ...props }) => {
    return (
      <Stack
        w="full"
        p={{ base: 2, md: 2 }}
        spacing={{ base: 4, md: 6 }}
        _hover={{ background: bgHover }}
        align="stretch"
        borderRadius="md"
        direction={{ base: "column", md: "row" }}
      >
        <Thumbnail cover={cover} website={website} />
        <Details {...props} />
      </Stack>
    );
  };
  const ListContainer = ({ children }) => {
    return (
      <VStack
        mb={{ base: 6, md: 10 }}
        mx={{ base: 4, md: 0 }}
        spacing={{ base: 6, md: 2 }}
      >
        {children}
      </VStack>
    );
  };
  return (
    <ListContainer>
      {items.map(({ ...props }, index) => (
        <Card key={index} {...props} />
      ))}
    </ListContainer>
  );
}
