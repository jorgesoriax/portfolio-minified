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
} from "@chakra-ui/react";
import { AppWindow, ChatsCircle, Copy } from "phosphor-react";
import NextLink from "next/link";
import { user, links } from "../utils/profile";

export default function Description() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const divider = useColorModeValue("gray.300", "gray.700");
  const modalDivider = useColorModeValue("gray.300", "gray.600");

  const ModalClipboard = ({ data }) => {
    const { title, type, href, linkLabel, icon } = data;
    const [value, setValue] = React.useState(title);
    const { hasCopied, onCopy } = useClipboard(value);

    return (
      <HStack spacing={3}>
        <Input type={type} value={value} readOnly border={0} pl={0}/>
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

  return (
    <>
      <VStack color="gray.500" spacing={5} px={{ base: 7, md: 0 }} py={10}>
        <Text>{user.description}</Text>
        <HStack w="full" justify="space-between">
          <LightMode>
            <Button
              variant="solid"
              colorScheme="brand"
              fontWeight="medium"
              onClick={onOpen}
              size="sm"
              leftIcon={<ChatsCircle fontSize={22} weight="fill" />}
            >
              Conectemos
            </Button>
          </LightMode>
          <HStack spacing={{ base: 4, md: 6 }} fontSize="sm">
            {links.social.map((link, index) => (
              <NextLink key={index} href={link.href} passHref>
                <Link isExternal>{link.title}</Link>
              </NextLink>
            ))}
          </HStack>
        </HStack>
      </VStack>
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
      <Divider borderColor={divider} />
    </>
  );
}
