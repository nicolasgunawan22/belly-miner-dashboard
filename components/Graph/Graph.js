import React from 'react'
import { Line } from 'react-chartjs-2';
import { Card, CardBody, Row, } from "reactstrap";

function Graph({ options, data }) {
   return (
      <Card className="shadow-md">
         <CardBody>
            <Line options={options} data={data} />
         </CardBody>
      </Card>
   )
}

export default Graph