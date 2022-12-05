import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { GithubLogo, GlobeSimple } from "phosphor-react";
import { getAllPostIds, getPostData } from "../../src/lib/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Container
      maxW={{ base: "100%", lg: "60%" }}
      py={{ base: 8, lg: 20 }}
      px={{ base: 8, lg: 0 }}
    >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <VStack spacing={6}>
        <VStack spacing={1} w="full" align="left">
          <HStack spacing={6} align="start" justify="space-between">
            <Heading>{postData.title}</Heading>
            <HStack spacing={3}>
              <NextLink href={postData.repo} passHref>
                <Link isExternal>
                  <Tooltip label="Repositorio" placement="top" borderRadius="full" py={1} px={3}>
                    <IconButton icon={<GithubLogo size={28} />} />
                  </Tooltip>
                </Link>
              </NextLink>
              <NextLink href={postData.website} passHref>
                <Link isExternal>
                  <Tooltip label="Website" placement="top" borderRadius="full" py={1} px={3}>
                    <IconButton icon={<GlobeSimple size={28} />} />
                  </Tooltip>
                </Link>
              </NextLink>
              <IconButton
                as="a"
                href="/"
                icon={<CloseIcon />}
                w="fit-content"
              />
            </HStack>
          </HStack>
          <HStack spacing={0} justify="space-between">
            <Text>{postData.id}</Text>
            <Text color={"gray.300"}>{postData.date}</Text>
          </HStack>
        </VStack>
        <Image
          borderRadius="2xl"
          w="100%"
          h="250px"
          src={postData.cover}
          alt="Dan Abramov"
          objectFit="cover"
        />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </VStack>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
