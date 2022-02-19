import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import slugify from 'react-slugify';

import Container from "components/Container/Container.js";

import { AiOutlineRight } from 'react-icons/ai'

function Help() {
   let faqContents = [
      {
         title: 'Bagaimana cara membuat dompet digital untuk cryptocurrency?'
      },
      {
         title: 'Bagaimana cara melakukan penarikan?'
      },
      {
         title: 'Apa yang terjadi ketika transisi ETH 2.0?'
      },
   ]

   return (
      <>
         <Head>
            <title>Help - BellyMiner</title>
            <meta name="description" content="belly miner dashboard" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Container>
            <div className="grid grid-cols-2 gap-4">
               <div className="block bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 no-underline">
                  <Link href="/">
                     <a>
                        <Image
                           src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                           alt="Getting Started"
                           height={200}
                           width={600}
                           objectFit="cover"
                           className="hover:opacity-80 rounded-t-lg"
                        />
                     </a>
                  </Link>

                  <div className="p-6 flex justify-between items-end">
                     <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Panduan Awal</h5>
                        <p className="mb-0 font-normal text-gray-700 dark:text-gray-400">Pelajari cara memulai investasimu di BellyMiner.</p>
                     </div>
                     <div>
                        <Link href="/help/getting-started">
                           <a className="inline-flex items-center py-3 px-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              <AiOutlineRight />
                           </a>
                        </Link>
                     </div>
                  </div>
               </div>
               <div>
                  <h5 className="font-bold">Pertanyaan Populer</h5>
                  <div className="flex flex-col gap-2">
                     {faqContents.map((content, index) => (
                        <Link key={index} href={`/help/${slugify(content.title)}`}>
                           <a className="block p-3 w-full no-underline bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                              <p className="mb-0 font-normal text-gray-700 dark:text-gray-400">{content.title}</p>
                           </a>
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </Container>
      </>
   )
}

export default Help