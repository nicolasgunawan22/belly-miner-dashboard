import React from 'react'
import Link from 'next/link'

function NotFoundPage() {
   return (
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
         <h1 className="font-bold text-9xl text-red-200 mb-8">404</h1>
         <h3 className="font-bold text-red-200">You seem lost.</h3>
         <p>The page you are trying to reach doesn&apos;t exist.</p>
         <Link href="/">
            <a className="text-red-200 hover:text-red-500">Go back home</a>
         </Link>
      </div>
   )
}

export default NotFoundPage