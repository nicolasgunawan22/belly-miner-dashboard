import React from 'react'
import { Table } from 'reactstrap'

function TableComponent({ data }) {
   const tableData = data

   return (
      <div className="">
         <Table className="rounded-xl min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
               <tr>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                     Currency
                  </th>
                  {Object.entries(tableData).slice(0, 5).map(([key, value], index) => (
                     <th key={index} scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                        {key}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center ">
                     Coin
                  </td>
                  {Object.entries(tableData).slice(0, 5).map(([key, value], index) => (
                     <td key={index} scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                        {value?.coins?.toString().slice(0, 8)}
                     </td>
                  ))}
               </tr>
               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-center ">
                     Dollar
                  </td>
                  {Object.entries(tableData).slice(0, 5).map(([key, value], index) => (
                     <td key={index} scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                        {value?.dollars?.toString().slice(0, 8)}
                     </td>
                  ))}
               </tr>
            </tbody>
         </Table>
      </div>
   )
}

export default TableComponent