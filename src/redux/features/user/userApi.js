import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes:["User"],
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "/users",
      providesTags:["User"]
    }),
    getDataById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    addData: builder.mutation({
      query: (data) => ({
        url: `/users`,
        method: "POST",
        body:data
      }),
      invalidatesTags:["User"]
    }),
    getDeleteData: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
       
      invalidatesTags:["User"]
      }),
      getUpdateData:builder.mutation({
        query: ({ id, data }) => ({
          url: `/users/${id}`,
          method: "PATCH",
          body: data,
        }),
        invalidatesTags:["User"]
      })
       
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