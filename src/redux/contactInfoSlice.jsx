import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactInfoSlice = createApi({
  reducerPath: "contactInfo",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://interior-backend-inky.vercel.app/api",
    // baseUrl: `${import.meta.env.VITE_main_url}`,
  }),
  tagTypes: ["contactInfo"],
  endpoints: (builder) => ({
    createContactInfo: builder.mutation({
      query: (footerData) => ({
        url: "/contacts",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: footerData,
      }),
      invalidatesTags: ["contactInfo"],
    }),

    getAllContactInfo: builder.query({
      query: () => "/contacts",
      providesTags: ["contactInfo"],
    }),

    // getASingleFooterDesign: builder.query({
    //   query: (footerId) => `/footers/${footerId}`,
    //   providesTags: ["footers"],
    // }),

    deleteAContactInfo: builder.mutation({
      query: (navId) => ({
        url: `/contacts/${navId}`,
        method: "DELETE",
        body: navId,
      }),
      invalidatesTags: ["contactInfo"],
    }),
  }),
});

export const {
  useCreateContactInfoMutation,
  useDeleteAContactInfoMutation,
  useGetAllContactInfoQuery,
} = contactInfoSlice;
