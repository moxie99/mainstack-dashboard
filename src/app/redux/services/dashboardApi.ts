import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const dashboardApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fe-task-api.mainstack.io",
  }),
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetDashboardDataQuery  } = dashboardApi;
