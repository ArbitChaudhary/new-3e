import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from "./page";
import Head from "next/head";

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
}
