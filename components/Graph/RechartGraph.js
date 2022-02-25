import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, AreaChart, Tooltip, Area, ResponsiveContainer } from 'recharts';

function RechartGraph({ chartData, chartlabels }) {
   const convertedData = []

   chartData.forEach((item, index) => {
      convertedData.push({
         Date: chartlabels[index],
         Hashrate: item
      })
   })

   return (
      <ResponsiveContainer className="py-6 -ml-2 flex justify-center items-center text-xs" aspect={16 / 6} width="100%" height="100%">
         <AreaChart data={convertedData}>
            <defs>
               <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
               </linearGradient>
               <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
               </linearGradient>
            </defs>
            <XAxis dataKey="Date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Hashrate" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
         </AreaChart>
      </ResponsiveContainer>
   )

}

export default RechartGraph