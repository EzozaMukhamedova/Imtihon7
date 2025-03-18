import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const developersApi = createApi({
  reducerPath: "developersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nt-devconnector.onrender.com/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("X-Auth-Token", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/profile",
      providesTags: ["Profile"],
    }),
  }),
});

export const { useGetProfileQuery } = developersApi;
