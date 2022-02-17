import Head from 'next/head'
import Header from "components/Header/Header.js";
import Container from "components/Container/Container.js";
import Table from "components/Table/Table.js";
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
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function Home({ hashratechart, balance, approx_earnings }) {
  const hashRateChartData = hashratechart.data
  const labels = hashRateChartData.map(data => new Date(data.date).getMinutes()).slice(-25)
  const hashrate = hashRateChartData.map(data => data.hashrate).slice(-25)
  const balanceData = balance.data
  const approxEarnings = approx_earnings.data

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
        <Row>
          <Col className="rounded-xl" lg="12" xl="6">
            <div className="rounded-xl mb-4 mb-xl-0 p-4 bg-white text-center">
              <div className="h5 text-muted pb-2">Earnings Approximation</div>
              <Table data={approxEarnings} />
            </div>
          </Col>
          <Col className="rounded-xl" lg="12" xl="6">
            <Card className="rounded-xl mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div>
                    <Line options={options} data={data} />
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.nanopool.org/v1/eth/hashratechart/0x5a7ad5c896d77e3ba4af0de014f8b34fa248f45a')
  const balance_res = await fetch('https://api.nanopool.org/v1/eth/balance/0x5a7ad5c896d77e3ba4af0de014f8b34fa248f45a')
  const approx_earnings_res = await fetch('https://eth.nanopool.org/api/v1/approximated_earnings/120')

  const hashratechart = await res.json()
  const balance = await balance_res.json()
  const approx_earnings = await approx_earnings_res.json()

  return {
    props: {
      hashratechart,
      balance,
      approx_earnings,
    },
  }
}