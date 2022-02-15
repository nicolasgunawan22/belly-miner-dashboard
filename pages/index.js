import Head from 'next/head'
import Headers from "../components/Headers/Headers.js";
import Container from "../components/Container/Container.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BellyMiner Dashboard</title>
        <meta name="description" content="belly miner dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Headers />
      </Container>
    </div>
  )
}