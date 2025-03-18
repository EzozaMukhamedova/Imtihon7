import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nt-devconnector.onrender.com/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("x-auth-token", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
      providesTags: ["Post"],
    }),
    addComment: builder.mutation({
      query: ({ postId, comment }) => ({
        url: `posts/comment/${postId}`,
        method: "POST",
        body: { text: comment },
      }),
      invalidatesTags: ["Post"],
    }),
    deleteComment: builder.mutation({
      query: ({ postId, commentId }) => ({
        url: `posts/comment/${postId}/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostByIdQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
} = postApi;
