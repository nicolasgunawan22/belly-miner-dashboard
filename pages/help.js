import React from 'react'
import Head from 'next/head'
import Container from "components/Container/Container.js";

function Help() {
   return (
      <>
         <Head>
            <title>Help - BellyMiner</title>
            <meta name="description" content="belly miner dashboard" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Container>
            <div>Help</div>
         </Container>
      </>
   )
}

export default Help