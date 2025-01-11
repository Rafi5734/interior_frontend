import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    // baseUrl: `${import.meta.env.VITE_main_url}`,
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (loginInfo) => ({
        url: "/admin/login",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: loginInfo,
      }),
      invalidatesTags: ["auth"],
    }),

    // userUpdate: builder.mutation({
    //   query: ({ userUpdateFormData, userId }) => ({
    //     url: `/users/${userId}`,
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     method: "PUT",
    //     body: userUpdateFormData,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),

    // userLogout: builder.mutation({
    //   query: (email) => ({
    //     url: `/logout`,
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     method: "POST",
    //     body: email,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),

  }),
});

export const {
  useLoginMutation,
} = authSlice;