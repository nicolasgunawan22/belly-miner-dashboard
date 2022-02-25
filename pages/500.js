import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function InternalErrorPage() {
   const router = useRouter()

   useEffect(() => {
      router.replace('/login')
   }, [router])

   return (
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
         <h1 className="font-bold text-9xl text-red-200 mb-8">500</h1>
         <h3 className="font-bold text-red-200">Internal server error.</h3>
         <p>You&apos;ll be redirected to login page automatically, or click link below.</p>
         <Link href='/login'>
            <a className="text-red-200 hover:text-red-500">Go back home</a>
         </Link>
      </div>
   )
}

export default InternalErrorPage;