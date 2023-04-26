"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useGetDashboardDataQuery } from "./redux/services/dashboardApi";
import ErrorState from "./error";
import Loading from "./loading";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import Chart from "./components/Chart";
import Pie from "./components/Pie";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLoading, isFetching, data, error } = useGetDashboardDataQuery(null);

  console.log("customedata", data);

  if (error) {
    <ErrorState />;
  }

  if (isLoading || isFetching) {
    <Loading />;
  }
  return (
    <ClientOnly>
      <Container>
        {/* <Chart/>
        <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <Pie/>

          <Pie/>
        </div> */}
      </Container>
    </ClientOnly>
  );
}
