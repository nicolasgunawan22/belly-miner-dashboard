import React from 'react'

function Table({ data }) {
   console.log(data)
   return (
      <>
         <table className="rounded-xl min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
               <tr>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                     Currency
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                     Day
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                     Week
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                     Month
                  </th>
               </tr>
            </thead>
            <tbody>
               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     Coin
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     {data.day.coins.toString().slice(0, 8)}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     {data.week.coins.toString().slice(0, 8)}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     {data.month.coins.toString().slice(0, 8)}
                  </td>
               </tr>
               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     Dollar
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     {data.day.dollars.toString().slice(0, 8)}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     {data.week.dollars.toString().slice(0, 8)}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                     {data.month.dollars.toString().slice(0, 8)}
                  </td>
               </tr>
            </tbody>
         </table>
      </>
   )
}

export default Table