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

  const Thumbnail = ({ cover, website }) => {
    return (
      <NextLink
        href={website}
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
      <VStack w="full" color="gray.500" fontSize="sm">
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
      <HStack
        w="full"
        p={3}
        spacing={6}
        _hover={{ background: bgHover }}
        align="stretch"
        borderRadius="md"
      >
        <Thumbnail cover={cover} website={website}/>
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
      {items.map(({ ...props }, index) => (
        <Card key={index} {...props} />
      ))}
    </ListContainer>
  );
}
