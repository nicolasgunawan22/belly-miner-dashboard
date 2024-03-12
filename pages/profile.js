import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Container from 'components/Container/Container.js';
import jwt from 'jwt-decode';
import jsHttpCookie from 'cookie';
import Cookies from 'js-cookie';

function Profile({ userData }) {
  const user = userData.user;
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (Cookies.get('PROFILE')) {
      setProfile(JSON.parse(Cookies.get('PROFILE')));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Profile - BellyMiner</title>
        <meta name="description" content="belly miner dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="bg-white p-4 text-sm md:text-base rounded-xl shadow-md">
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p className="truncate">
            <strong>Wallet Address:</strong> {user.walletAddress}
          </p>
          <p>
            <strong>Join Since:</strong>{' '}
            {new Date(user.createdAt).toLocaleString()}
          </p>
          {user.miningData && user.miningData.length && (
            <p>
              <strong>Mining Data:</strong>
            </p>
          )}
        </div>
      </Container>
    </>
  );
}

export default Profile;

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

    return {
      props: {
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
