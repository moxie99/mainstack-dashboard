"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useGetDashboardDataQuery } from "./redux/services/dashboardApi";
import ErrorState from "./error";
import Loading from "./loading";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import Chart from "./components/Chart";
import Pie from "./components/Pie";import Pies from "./components/Pies";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLoading, isFetching, data, error } = useGetDashboardDataQuery(null);

  const chartData = {
    "2022-07-31": 1,
    "2022-08-01": 3,
    "2022-08-02": 3,
    "2022-08-03": 7,
    "2022-08-04": 8,
    "2022-08-05": 5,
    "2022-08-06": 20,
    "2022-08-07": 50,
    "2022-08-08": 100,
    "2022-08-09": 2,
  };

  if (error) {
    <ErrorState />;
  }

  if (isLoading || isFetching) {
    <Loading />;
  }
  return (
    <ClientOnly>
      <Container>
        <Chart data={chartData} />
        <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
          <Pie />
          <Pies />
        </div>
      </Container>
    </ClientOnly>
  );
}
