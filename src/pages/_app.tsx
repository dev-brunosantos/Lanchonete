import { Menu } from "@/components/Menu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <>
      <Component {...pageProps} />
      <Menu />
    </>
  )
}
