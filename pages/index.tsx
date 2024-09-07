import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PrimaryLayout from "@/components/layout/primary_layout/primary_layout";
import PageWrapper from "@/common/components/page_wrapper";
import { NextPageWithLayout } from "./page";
import { pages } from "next/dist/build/templates/app-page";
import HomeLayout from "@/components/layout/pages/home/home_layout";
import HomePage from "@/components/home";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <PageWrapper title="DTFest 2024">
      <HomeLayout>
        {/* <main className={`${styles.main} ${inter.className}`}>Home page</main> */}
        <HomePage />
      </HomeLayout>
    </PageWrapper>
  );
};

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
