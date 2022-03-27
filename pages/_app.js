import { useState } from "react"
import Router from "next/router"
import TopBarProgress from "react-topbar-progress-indicator"
import { UserProvider } from 'components/User/User'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(false)

  TopBarProgress.config({
    barColors: {
      "0": "#4c1d95",
      "1.0": "#4c1d95",
    },
    shadowBlur: 2
  });

  Router.events.on("routeChangeStart", () => {
    setProgress(true)
  })

  Router.events.on("routeChangeComplete", () => {
    setProgress(false)
  })
  return (
    <>
      {progress && <TopBarProgress />}
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  )
}

export default MyApp
