import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextPageWithLayout } from "./page";

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./dtfest_logo.png" />
        <title>DTFest 2024</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
