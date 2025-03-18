import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nt-devconnector.onrender.com/api",
  }),
  endpoints: (builder) => ({
    getProfileById: builder.query({
      query: (id) => `profile/user/${id}`,
    }),
  }),
});

export const { useGetProfileByIdQuery } = profileApi;
