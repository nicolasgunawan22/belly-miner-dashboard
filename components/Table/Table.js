import React from 'react'

function Table({ data }) {
   console.log(data)
   return (
      <>
         <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
               <tr>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                     Name
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                     Color
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                     Category
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                     Price
                  </th>
               </tr>
            </thead>
            <tbody>
               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     Apple MacBook Pro 17
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     Sliver
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     Laptop
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     $2999
                  </td>
               </tr>
               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     Apple Imac 27
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     White
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     Desktop Pc
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     $1999
                  </td>
               </tr>
               <tr className="bg-white dark:bg-gray-800">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     Apple Magic Mouse 2
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     White
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     Accessories
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     $99
                  </td>
               </tr>
            </tbody>
         </table>
      </>
   )
}

export default Table