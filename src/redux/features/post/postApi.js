import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postApi = createApi({
  reducerPath: "postApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({

    // Get All Posts from Json Placeholder
    getPosts: builder.query({
      query: () => "/posts",
    }),

    // Get single Post Delete
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),

  }),
});


export const{useGetPostsQuery,useDeletePostMutation}=postApi;
export default  postApi;