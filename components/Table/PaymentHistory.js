import React from 'react'
import { Table } from 'reactstrap'

function PaymentHistory(data) {
   const tableData = data.data

   return (
      <Table className="rounded-xl w-full">
         <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
               {Object.keys(tableData).map((key, index) => (
                  <th key={index} scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                     {key}
                  </th>
               ))}
            </tr>
         </thead>
         <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
               {Object.entries(tableData).map(([key, value], index) => (
                  <th key={index} scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                     {key === "date" ? new Date(value * 1000).toLocaleString() : value.toString()}
                  </th>
               ))}
            </tr>
         </tbody>
      </Table>
   )
}

export default PaymentHistory