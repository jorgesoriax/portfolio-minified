import Head from "next/head";
import { Container, VStack, useColorModeValue } from "@chakra-ui/react";
import {user} from "../src/utils/profile"

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev 22 / {user.name}</title>
        <meta name="description" content="Portafolio de proyectos web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="3xl" p={0}>
        Hello world!
      </Container>
    </div>
  );
}
