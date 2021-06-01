import { useEffect } from "react"
import { AppProps } from 'next/app'
import { useRouter } from "next/router"
import * as gtag from "../utils/gtag"
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    }
  }, [router.events])

  return <Component {...pageProps} />
};
