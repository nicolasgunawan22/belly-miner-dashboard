import React from 'react'

function PaymentHistory(data) {
   const tableData = data.data.map((d) => {
      delete d.txHash
      return d
   })

   console.log(tableData)
   if (!tableData || tableData.length < 1) return <>No Data</>

   return (
      <div className="flex flex-col">
         <div className="overflow-x-auto">
            <div className="inline-block py-2 min-w-full">
               <div className="overflow-hidden shadow-md rounded-xl">
                  <table className="rounded-xl w-full h-48 ">
                     <thead className=" bg-violet-50 dark:bg-violet-700">
                        <tr>
                           {Object.keys(tableData[0]).map((key, index) => (
                              <th key={index} scope="col" className="p-2 sm:py-2 sm:px-4 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                 {key}
                              </th>
                           ))}
                        </tr>
                     </thead>
                     <tbody>
                        {tableData.map((data, index) => (
                           <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              {Object.entries(data).map(([key, value], index) => (
                                 <th key={index} scope="col" className="py-1 px-2 sm:py-2 sm:px-4 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                    {
                                       key === "date"
                                          ? new Date(value * 1000).toLocaleString()
                                          : key === "amount"
                                             ? value.toString().slice(0, 6)
                                             : value.toString()
                                    }
                                 </th>
                              ))}
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>

   )
}

export default PaymentHistory