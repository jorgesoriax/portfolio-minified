import React from "react";
import {
  Box,
  Flex,
  Stack,
  IconButton,
  Text,
  HStack,
  useColorMode,
  useColorModeValue,
  Link,
  Highlight,
} from "@chakra-ui/react";
import { List, Moon, SunDim, X } from "phosphor-react";
import NextLink from "next/link";
import Image from "next/image";
import { user } from "../utils/profile.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { colorMode, toggleColorMode } = useColorMode();
  const borderBottomNavBar = useColorModeValue("gray.300", "gray.700");
  const buttonColor = useColorModeValue("gray.600", "white");
  const links = [{ title: "Blog (próximamente)", href: "/" }];

  const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {!isOpen ? (
          <IconButton
            variant="ghost"
            icon={<List size={24} weight="fill" />}
            aria-label="Open Menu"
          />
        ) : (
          <IconButton
            variant="ghost"
            icon={<X size={24} weight="fill" />}
            aria-label="Close Menu"
          />
        )}
      </Box>
    );
  };
  const Links = () => {
    return (
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={{ base: 6, md: 8 }}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
          fontSize="sm"
        >
          {links.map((link, index) => (
            <NextLink key={index} href={link.href} passHref>
              <Link color="gray.500" isExternal>
                {link.title}
              </Link>
            </NextLink>
          ))}
          <IconButton
            onClick={toggleColorMode}
            icon={
              colorMode == "light" ? <Moon size={28} /> : <SunDim size={28} />
            }
            aria-label="Toggle darkmode"
            color={buttonColor}
          />
        </Stack>
      </Box>
    );
  };
  const User = () => {
    return (
      <HStack spacing={4}>
        <Box
          position="relative"
          boxSize="50px"
          overflow="hidden"
          borderRadius="full"
        >
          <Image
            src={user.picture}
            layout="fill"
            objectFit="cover"
            alt="User picture"
          />
        </Box>
        <Text color="gray.500">
          / &nbsp; {user.name}, {user.age} años
        </Text>
      </HStack>
    );
  };
  const NavBarContainer = ({ children }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        px={0}
        py={{ base: 6, md: 10 }}
        borderBottom={{ base: isOpen ? "1px" : 0, md: 0 }}
        borderColor={borderBottomNavBar}
        // border="1px solid blue"
      >
        {children}
      </Flex>
    );
  };

  return (
    <NavBarContainer>
      <User />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Links isOpen={isOpen} />
    </NavBarContainer>
  );
}
