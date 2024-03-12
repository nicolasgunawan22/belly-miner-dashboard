import React from 'react';
import CurrencyFormat from 'react-currency-format';

function PaymentHistory(data) {
  const tableData =
    data?.data?.map((d) => {
      delete d.txHash;
      return d;
    }) || [];

  if (!tableData || tableData.length < 1) return <>No Data</>;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block py-2 min-w-full">
          <div className="overflow-hidden shadow-md rounded-xl">
            <table className="rounded-xl w-full h-48 ">
              <thead className=" bg-indigo-50 dark:bg-indigo-700">
                <tr>
                  {Object.keys(tableData[0]).map((key, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="p-2 sm:py-2 sm:px-4 text-xs font-bold tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr
                    key={index}
                    className="h-12 text-xl bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    {Object.entries(data).map(([key, value], index) => (
                      <th
                        key={index}
                        scope="col"
                        className="py-1 px-2 sm:py-2 sm:px-4 text-sm font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                      >
                        {key === 'date' ? (
                          new Date(value * 1000).toLocaleString()
                        ) : key === 'amount' ? (
                          <CurrencyFormat
                            value={value.toString().slice(0, 8)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'Ξ '}
                          />
                        ) : (
                          value.toString()
                        )}
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
  );
}

export default PaymentHistory;
