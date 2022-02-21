import React from 'react'

function TableComponent({ data }) {
   const tableData = data
   delete data.minute
   delete data.prices
   delete data.extra_profit_percent

   return (
      <div className="flex flex-col">
         <div className="overflow-x-auto">
            <div className="inline-block py-2 min-w-full">
               <div className="overflow-hidden shadow-md rounded-xl">
                  <table className="rounded-xl h-48 w-full">
                     <thead className="bg-violet-50 dark:bg-violet-700">
                        <tr>
                           <th scope="col" className="py-1 px-2 sm:py-2 sm:px-4 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                              Currency
                           </th>
                           {Object.entries(tableData).slice(0, 5).map(([key, value], index) => (
                              <th key={index} scope="col" className="p-2 sm:py-2 sm:px-4 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                 {key}
                              </th>
                           ))}
                        </tr>
                     </thead>
                     <tbody className="">
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                           <td className="py-1 px-2 sm:py-2 sm:px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center ">
                              Coin
                           </td>
                           {Object.entries(tableData).slice(0, 5).map(([key, value], index) => (
                              <td key={index} scope="col" className="py-1 px-2 sm:py-2 sm:px-4 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                 {value?.coins?.toString().slice(0, 8)}
                              </td>
                           ))}
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                           <td className="py-1 px-2 sm:py-2 sm:px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center ">
                              Dollar
                           </td>
                           {Object.entries(tableData).slice(0, 5).map(([key, value], index) => (
                              <td key={index} scope="col" className="py-1 px-2 sm:py-2 sm:px-4 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                 {value?.dollars?.toString().slice(0, 8)}
                              </td>
                           ))}
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   )
}

export default TableComponent