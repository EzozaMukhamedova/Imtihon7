// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseApi = import.meta.env.VITE_API_URL;

// export const postApi = createApi({
//   reducerPath: "postsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: baseApi,
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         headers.set("x-auth-token", token);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ["Post"],
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => "posts",
//       providesTags: ["Post"],
//     }),
//     deletePost: builder.mutation({
//       query: (id) => ({
//         url: `posts/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Post"],
//     }),
//   }),
// });

// export const { useGetPostsQuery, useDeletePostMutation } = postApi;

////////////////////////////////

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const token = localStorage.getItem("token");

// export const postsApi = createApi({
//   reducerPath: "postsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://nt-devconnector.onrender.com/api",
//     prepareHeaders: (headers) => {
//       if (token) {
//         headers.set("x-auth-token", token);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => "/posts",
//       providesTags: ["Posts"],
//     }),
//     getMe: builder.query({
//       query: () => "/auth",
//     }),
//     addPost: builder.mutation({
//       query: (newPost) => ({
//         url: "/posts",
//         method: "POST",
//         body: newPost,
//       }),
//       invalidatesTags: ["Posts"],
//     }),
//     deletePost: builder.mutation({
//       query: (postId) => ({
//         url: `/posts/${postId}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Posts"],
//     }),
//     likePost: builder.mutation({
//       query: (postId) => ({
//         url: `/posts/like/${postId}`,
//         method: "PUT",
//       }),
//       invalidatesTags: ["Posts"],
//     }),
//     dislikePost: builder.mutation({
//       query: (postId) => ({
//         url: `/posts/unlike/${postId}`,
//         method: "PUT",
//       }),
//       invalidatesTags: ["Posts"],
//     }),
//   }),
// });

// export const {
//   useGetPostsQuery,
//   useGetMeQuery,
//   useAddPostMutation,
//   useDeletePostMutation,
//   useLikePostMutation,
//   useDislikePostMutation,
// } = postsApi;
