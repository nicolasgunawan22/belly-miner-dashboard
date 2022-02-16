import Head from 'next/head'
import Header from "components/Header/Header.js";
import Container from "components/Container/Container.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card, CardBody } from 'reactstrap'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function Home({ hashratechart, balance }) {
  const hashRateChartData = hashratechart.data
  const labels = hashRateChartData.map(data => new Date(data.date).getMinutes()).slice(-25)
  const hashrate = hashRateChartData.map(data => data.hashrate).slice(-25)
  const balanceData = balance.data

  const options = {
    tension: 0.45,
    responsive: true,
  };
  const data = {

    labels,
    datasets: [
      {
        label: 'Hashrate',
        data: hashrate,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div>
      <Head>
        <title>BellyMiner Dashboard</title>
        <meta name="description" content="belly miner dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header balanceData={balanceData} />
        <Card className="ml-3 w-1/2 h-80">
          <CardBody>
            <div>
              <Line options={options} data={data} />
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.nanopool.org/v1/eth/hashratechart/0x5a7ad5c896d77e3ba4af0de014f8b34fa248f45a')
  const balance_res = await fetch('https://api.nanopool.org/v1/eth/balance/0x5a7ad5c896d77e3ba4af0de014f8b34fa248f45a')

  const hashratechart = await res.json()
  const balance = await balance_res.json()
  return {
    props: {
      hashratechart,
      balance
    },
  }
}