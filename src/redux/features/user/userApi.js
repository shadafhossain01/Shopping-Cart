import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),

  tagTypes: ["User"],

  endpoints: (builder) => ({
    // get All Data from Json Server
    getData: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),

    // get All Data from Json Server
    getDataById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),

    // Add new data on server
    addData: builder.mutation({
      query: (data) => ({
        url: `/users`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    // delete data on server
    getDeleteData: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),

    // update data on server
    getUpdateData: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    
  }),
});

export const {
  useGetDataQuery,
  useGetDataByIdQuery,
  useAddDataMutation,
  useGetDeleteDataMutation,
  useGetUpdateDataMutation,
} = userApi;
export default userApi