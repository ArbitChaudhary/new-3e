import { Inter } from "next/font/google";
import PrimaryLayout from "@/components/layout/primary_layout/primary_layout";
import { NextPageWithLayout } from "./page";
import HomeLayout from "@/components/layout/pages/home/home_layout";
import HomePage from "@/components/home";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <HomeLayout>
      {/* <main className={`${styles.main} ${inter.className}`}>Home page</main> */}
      <HomePage />
    </HomeLayout>
  );
};

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
