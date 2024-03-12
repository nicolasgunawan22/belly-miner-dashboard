import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import axios from 'axios';
import miningrig from '../public/assets/mining-rig.png';
import jwt from 'jwt-decode';
import jsHttpCookie from 'cookie';

function Signup({ userData }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    walletAddress: '',
  });

  const [error, setError] = useState(false);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    if (!sessionStorage.token) {
      router.replace('/login');
    }
  }, [router]);

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        'http://localhost:5000/api/user/register',
        formData,
        { crossdomain: true }
      );
      router.replace('/login');
    } catch (err) {
      setError(true);
      setIsLoading(false);
    }
  }
  const [width, setWidth] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function increaseWidth() {
      let timer = setInterval(scene, 10);
      function scene() {
        if (width >= 100) {
          clearInterval(timer);
          setIsVisible(false);
        } else {
          setIsVisible(true);
          setWidth((prev) => prev + 1);
        }
      }
    }

    router.events.on('routeChangeStart', increaseWidth);
    return () => {
      router.events.off('routeChangeStart', increaseWidth);
    };
  }, []);

  if (userData.user.isAdmin) {
    return (
      <>
        <Head>
          <title>Welcome to BellyMiner</title>
          <meta name="description" content="Welcome to BellyMiner" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-indigo-500 to-fuchsia-600">
          <div
            className={`${
              isVisible ? 'inline-block' : 'hidden'
            } fixed top-0w-full h-1`}
          >
            <div
              className="bg-indigo-600 h-1 transition-all"
              style={{ width: `${width}%` }}
            ></div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center h-[90%] w-3/4 sm:w-1/2 rounded-2xl bg-white shadow-2xl border-neutral-200">
            <div className="relative py-4 w-full sm:w-3/4 h-full filter flex justify-center items-end">
              <Image
                src={miningrig}
                alt="Mining Rig"
                layout="fill"
                objectFit="cover"
                className="h-full rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none brightness-75"
              />
            </div>
            <div className="h-full w-full px-6 py-4 sm:p-6 lg:p-8 dark:bg-neutral-800 dark:border-neutral-700">
              <form
                className="flex flex-col justify-center h-full space-y-6"
                onSubmit={handleOnSubmit}
              >
                <h3 className="text-xl font-medium text-neutral-900 dark:text-white">
                  Sign up to <span className="font-bold">BellyMiner</span>{' '}
                  dashboard
                </h3>
                {error && (
                  <div
                    className="px-4 py-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                  >
                    <span className="font-medium">Unable to sign up</span>
                  </div>
                )}
                <div className="flex gap-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-1 text-sm font-medium text-neutral-900 dark:text-neutral-300"
                    >
                      Your first name
                    </label>
                    <input
                      onChange={handleOnChange}
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-neutral-600 dark:border-neutral-500 dark:placeholder-neutral-400 dark:text-white"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-1 text-sm font-medium text-neutral-900 dark:text-neutral-300"
                    >
                      Your last name
                    </label>
                    <input
                      onChange={handleOnChange}
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-neutral-600 dark:border-neutral-500 dark:placeholder-neutral-400 dark:text-white"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-1 text-sm font-medium text-neutral-900 dark:text-neutral-300"
                  >
                    Your user name
                  </label>
                  <input
                    onChange={handleOnChange}
                    type="text"
                    name="username"
                    id="username"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-neutral-600 dark:border-neutral-500 dark:placeholder-neutral-400 dark:text-white"
                    placeholder="johndoe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-neutral-900 dark:text-neutral-300"
                  >
                    Your email
                  </label>
                  <input
                    onChange={handleOnChange}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-neutral-600 dark:border-neutral-500 dark:placeholder-neutral-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-sm font-medium text-neutral-900 dark:text-neutral-300"
                  >
                    Your password
                  </label>
                  <input
                    onChange={handleOnChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-neutral-600 dark:border-neutral-500 dark:placeholder-neutral-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="walletAddress"
                    className="block mb-1 text-sm font-medium text-neutral-900 dark:text-neutral-300"
                  >
                    Your wallet address
                  </label>
                  <input
                    onChange={handleOnChange}
                    type="text"
                    name="walletAddress"
                    id="walletAddress"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-neutral-600 dark:border-neutral-500 dark:placeholder-neutral-400 dark:text-white"
                    placeholder="0x0000000000000000000000000000000000000000"
                    required
                  />
                </div>
                <button
                  type={isLoading ? 'button' : 'submit'}
                  className={`flex justify-center items-center gap-3 w-full text-white font-medium rounded-lg text-sm px-3 py-2.5 text-center   
                        ${
                          isLoading
                            ? 'bg-indigo-300 hover:bg-indigo-300 dark:bg-indigo-300 dark:hover:bg-indigo-300  cursor-default'
                            : 'bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:ring-indigo-300 dark:focus:ring-indigo-800 focus:ring-4 cursor-pointer  '
                        } `}
                >
                  {isLoading && (
                    <AiOutlineLoading3Quarters className="animate-spin text-base" />
                  )}
                  Sign up to your account
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-indigo-500 to-fuchsia-500">
        <AiOutlineLoading3Quarters className="text-indigo-700 animate-spin text-2xl" />
      </div>
    );
  }
}

export default Signup;

export async function getServerSideProps({ req }) {
  const initProps = {};
  if (req && req.headers) {
    const cookies = req.headers.cookie;
    if (typeof cookies === 'string') {
      const cookiesJSON = jsHttpCookie.parse(cookies);
      initProps.token = cookiesJSON.token;
    }
  }
  const userId = initProps.token ? jwt(initProps?.token)._id : 'null';

  const user_res = await fetch(`http://localhost:5000/api/user/${userId}`);
  const userData = await user_res.json();

  return {
    props: {
      userData,
    },
  };
}
