import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const footerSlice = createApi({
  reducerPath: "footers",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://interior-backend-inky.vercel.app/api",
    // baseUrl: `${import.meta.env.VITE_main_url}`,
  }),
  tagTypes: ["footers"],
  endpoints: (builder) => ({
    createFooterDesign: builder.mutation({
      query: (footerData) => ({
        url: "/footers",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: footerData,
      }),
      invalidatesTags: ["footers"],
    }),

    getAllFooterDesign: builder.query({
      query: () => "/footers",
      providesTags: ["footers"],
    }),

    getASingleFooterDesign: builder.query({
      query: (footerId) => `/footers/${footerId}`,
      providesTags: ["footers"],
    }),

    deleteAFooterDesign: builder.mutation({
      query: (footerId) => ({
        url: `/footers/${footerId}`,
        method: "DELETE",
        body: footerId,
      }),
      invalidatesTags: ["footers"],
    }),
  }),
});

export const {
  useCreateFooterDesignMutation,
  useDeleteAFooterDesignMutation,
  useGetASingleFooterDesignQuery,
  useGetAllFooterDesignQuery,
} = footerSlice;
