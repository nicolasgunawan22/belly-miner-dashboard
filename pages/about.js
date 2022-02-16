import React from 'react'
import Head from 'next/head'
import Container from "components/Container/Container.js";

function About() {
   return (
      <>
         <Head>
            <title>About - BellyMiner</title>
            <meta name="description" content="belly miner dashboard" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Container>
            <div>About</div>
         </Container>
      </>
   )
}

export default About