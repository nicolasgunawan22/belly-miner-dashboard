import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import Graph from 'components/Graph/Graph';
import RechartGraph from 'components/Graph/RechartGraph';
import Table from 'components/Table/Table';
import PaymentHistory from 'components/Table/PaymentHistory';
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
import { Row, Col, Card } from 'reactstrap';
import jwt from 'jwt-decode';
import jsHttpCookie from 'cookie';
import { useUser, useDispatchUser } from 'components/User/User';
import Cookies from 'js-cookie';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home({
  hashratechart,
  balance,
  approx_earnings,
  payments,
  userData,
}) {
  console.log({
    hashratechart,
    balance,
    approx_earnings,
    payments,
    userData,
  });
  const router = useRouter();
  const dispatch = useDispatchUser();
  useEffect(() => {
    dispatch({ type: 'GET_USER', payload: userData });
  }, [dispatch, userData]);

  useEffect(() => {
    if (!sessionStorage.token) {
      router.replace('/login');
    }
  }, [router]);

  const hashRateChartData = hashratechart?.data;
  const labels = hashRateChartData
    ?.map((data) => new Date(data.date * 1000).toLocaleString())
    .slice(-25);
  const hashrate = hashRateChartData
    ?.map((data) => data.hashrate / 1000)
    .slice(-25);
  const balanceData = balance?.data || 0;
  const approxEarnings = approx_earnings?.data || 0;
  const paymentsData = payments?.data?.slice(-2) || [];

  return (
    <div>
      <Head>
        <title>BellyMiner Dashboard</title>
        <meta name="description" content="belly miner dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Row>
          <Header balanceData={balanceData} />
        </Row>
        <Row>
          <RechartGraph chartData={hashrate} chartlabels={labels} />
        </Row>
        <Row>
          <Col sm={5}>
            <PaymentHistory data={paymentsData} />
          </Col>
          <Col sm={7}>
            <Table data={approxEarnings} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const initProps = {};
  if (req && req.headers) {
    const cookies = req.headers.cookie;
    if (typeof cookies === 'string') {
      const cookiesJSON = jsHttpCookie.parse(cookies);
      initProps.token = cookiesJSON.token;
    }
  }
  if (initProps.token) {
    const userId = jwt(initProps?.token)._id;

    const user_res = await fetch(`http://localhost:5000/api/user/${userId}`);
    const userData = await user_res.json();
    const walletAddress = userData.user.walletAddress;

    const nanopool_user_res = await fetch(
      'http://localhost:3000/api/nanopool-user'
    );

    const nanopoolUser = await nanopool_user_res?.json();
    const avgHashrateH24 = nanopoolUser?.data?.avgHashrate?.h24 || 0;

    const chart_res = await fetch('http://localhost:3000/api/nanopool-chart');
    const balance_res = await fetch(
      'http://localhost:3000/api/nanopool-balance'
    );
    const payments_res = await fetch(
      'http://localhost:3000/api/nanopool-payments'
    );
    const approx_earnings_res = await fetch(
      'http://localhost:3000/api/nanopool-approx-earnings'
    );
    const hashratechart = await chart_res.json();
    const balance = await balance_res.json();
    const approx_earnings = await approx_earnings_res.json();
    const payments = await payments_res.json();
    return {
      props: {
        hashratechart,
        balance,
        approx_earnings,
        payments,
        userData,
      },
    };
  } else {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
}
