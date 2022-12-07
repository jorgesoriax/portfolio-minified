import React from "react";
import {
  HStack,
  VStack,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  useClipboard,
  Input,
  IconButton,
  Tooltip,
  InputGroup,
  InputLeftElement,
  LightMode,
  Link,
  Divider,
  useColorModeValue,
  Box,
  Stack,
} from "@chakra-ui/react";
import { AppWindow, Copy, PaperPlaneTilt } from "phosphor-react";
import NextLink from "next/link";
import { user, links } from "../utils/profile";

export default function Description() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bodyDivider = useColorModeValue("gray.300", "gray.700");
  const modalDivider = useColorModeValue("gray.300", "gray.600");
  const color = useColorModeValue("gray.500", "white");

  const CustomModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader p={5}>
            <HStack justify="space-between" align="stretch">
              <Text fontWeight="medium">Contacto directo</Text>
              <ModalCloseButton position="inherit" />
            </HStack>
          </ModalHeader>
          <Divider borderColor={modalDivider} />
          <ModalBody p={5}>
            <VStack align="stretch" spacing={3}>
              <ModalClipboard data={links.contact.email} />
              <ModalClipboard data={links.contact.phone} />
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };

  const ModalClipboard = ({ data }) => {
    const { title, type, href, linkLabel } = data;
    const [value, setValue] = React.useState(title);
    const { hasCopied, onCopy } = useClipboard(value);

    return (
      <HStack spacing={3}>
        <Input type={type} value={value} readOnly border={0} pl={0} />
        <Link href={href} isExternal>
          <Tooltip label={linkLabel} placement="top" closeOnClick={false}>
            <IconButton icon={<AppWindow size={24} weight="fill" />} />
          </Tooltip>
        </Link>
        <Tooltip
          label={hasCopied ? "Copiado" : "Copiar"}
          placement="top"
          closeOnClick={false}
        >
          <IconButton
            icon={<Copy size={24} weight="fill" />}
            onClick={onCopy}
          />
        </Tooltip>
      </HStack>
    );
  };
  const Content = () => {
    return (
      <VStack color="gray.500" spacing={5}>
        <Text color={color}>{user.description}</Text>
        <Stack
          w="full"
          justify="space-between"
          align="center"
          direction={{ base: "column-reverse", md: "row" }}
          spacing={{ base: 10, md: 0 }}
        >
          <LightMode>
            <Button
              w={{ base: "100%", md: "auto" }}
              variant="solid"
              colorScheme="brand"
              fontWeight="medium"
              onClick={onOpen}
              size={{ base: "md", md: "sm" }}
              leftIcon={<PaperPlaneTilt fontSize={18} weight="fill" />}
              pl={4}
              pr={6}
            >
              Hablemos
            </Button>
          </LightMode>
          <HStack spacing={{ base: 4, md: 6 }} fontSize="sm">
            {links.social.map((link, index) => (
              <NextLink key={index} href={link.href} passHref>
                <Link isExternal>{link.title}</Link>
              </NextLink>
            ))}
          </HStack>
        </Stack>
      </VStack>
    );
  };
  const DescriptionContainer = ({ children }) => {
    return (
      <VStack w="full" py={4} spacing={6}>
        {children}
      </VStack>
    );
  };

  return (
    <DescriptionContainer>
      <Content />
      <CustomModal />
      <Divider borderColor={bodyDivider} />
    </DescriptionContainer>
  );
}
