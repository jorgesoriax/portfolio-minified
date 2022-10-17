import Head from "next/head";
import { Container, VStack, useColorModeValue } from "@chakra-ui/react";
import { user } from "../src/utils/profile";
import Navbar from "../src/components/Navbar";
import Description from "../src/components/Description";
import ProjectList from "../src/components/ProjectsList";
import { getSortedPostsData } from "../src/lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <div>
      <Head>
        <title>WebDev 22 / {user.name}</title>
        <meta name="description" content="Portafolio de proyectos web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="3xl" p={0}>
        <VStack maxW="3xl" pos="fixed" bg={bg} px={3}>
          <Navbar />
          <Description />
        </VStack>
        <ProjectList items={allPostsData} />
      </Container>
    </div>
  );
}
