import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const navbarSlice = createApi({
  reducerPath: "navbar",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://interior-backend-inky.vercel.app/api",
    // baseUrl: `${import.meta.env.VITE_main_url}`,
  }),
  tagTypes: ["navbar"],
  endpoints: (builder) => ({
    createANavContent: builder.mutation({
      query: (footerData) => ({
        url: "/navbar",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: footerData,
      }),
      invalidatesTags: ["navbar"],
    }),

    getAllNavbar: builder.query({
      query: () => "/navbar",
      providesTags: ["navbar"],
    }),

    // getASingleFooterDesign: builder.query({
    //   query: (footerId) => `/footers/${footerId}`,
    //   providesTags: ["footers"],
    // }),

    deleteANavbar: builder.mutation({
      query: (navId) => ({
        url: `/navbar/${navId}`,
        method: "DELETE",
        body: navId,
      }),
      invalidatesTags: ["navbar"],
    }),
  }),
});

export const {
  useCreateANavContentMutation,
  useDeleteANavbarMutation,
  useGetAllNavbarQuery,
} = navbarSlice;
