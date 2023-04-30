import Head from "next/head";
import { Container, VStack, useColorModeValue } from "@chakra-ui/react";
import { user } from "../src/utils/profile";
import Navbar from "../src/components/Navbar";
import Description from "../src/components/Description";
import ProjectList from "../src/components/ProjectsList";
import { getSortedPostsData } from "../src/lib/posts";

import "@fontsource/open-sans"
import "@fontsource/inter"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>WebDev | Portafolio 2023</title>
        <meta name="description" content="Portafolio de proyectos web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        maxW={{ base: "100%", lg: "3xl" }}
        p={0}
      >
        <VStack
          maxW={{ base: "100%", lg: "3xl" }}
          mx={{ base: 6, md: 2 }}
          // border="1px solid red"
          spacing={0}
        >
          <Navbar />
          <Description />
        </VStack>
        <ProjectList items={allPostsData} />
      </Container>
    </div>
  );
}
