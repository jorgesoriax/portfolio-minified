import Head from "next/head";
import { Container, VStack, useColorModeValue } from "@chakra-ui/react";
import { user } from "../src/utils/profile";
import Navbar from "../src/components/Navbar";
import Description from "../src/components/Description";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev 22 / {user.name}</title>
        <meta name="description" content="Portafolio de proyectos web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="3xl" p={0}>
        <VStack px={3}>
          <Navbar />
          <Description />
        </VStack>
      </Container>
    </div>
  );
}
