import React from 'react'
import CurrencyFormat from 'react-currency-format';

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
                     <thead className="bg-indigo-50 dark:bg-indigo-700">
                        <tr>
                           <th scope="col" className="py-1 px-2 sm:py-2 sm:px-4 text-xs font-bold tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                              Currency
                           </th>
                           {Object.entries(tableData).slice(0, 5).map(([key, value], index) => (
                              <th key={index} scope="col" className="p-2 sm:py-2 sm:px-4 text-xs font-bold tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                 {key}
                              </th>
                           ))}
                        </tr>
                     </thead>
                     <tbody className="">
                        <tr className="h-12 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                           <td className="py-1 px-2 sm:py-2 sm:px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center ">
                              Ethereum
                           </td>
                           {Object.entries(tableData).slice(0, 5).map(([key, value], index) => (
                              <td key={index} scope="col" className="py-1 px-2 sm:py-2 sm:px-4 text-sm font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                 <CurrencyFormat value={value?.coins?.toString().slice(0, 8)} displayType={'text'} thousandSeparator={true} prefix={'Ξ'} />
                              </td>
                           ))}
                        </tr>
                        <tr className="h-12 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                           <td className="py-1 px-2 sm:py-2 sm:px-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center ">
                              Dollar
                           </td>
                           {Object.entries(tableData).slice(0, 5).map(([key, value], index) => (
                              <td key={index} scope="col" className="py-1 px-2 sm:py-2 sm:px-4 text-sm font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                 <CurrencyFormat value={value?.dollars?.toString().slice(0, 6)} displayType={'text'} thousandSeparator={true} prefix={'$'} />

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