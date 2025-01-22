import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactSlice = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://interior-backend-inky.vercel.app/api",
    // baseUrl: `${import.meta.env.VITE_main_url}`,
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (formData) => ({
        url: "/messages",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["contact"],
    }),

    getAllContacts: builder.query({
      query: () => "/messages",
      providesTags: ["contact"],
    }),

    // getASingleService: builder.query({
    //   query: (serviceId) => `/services/${serviceId}`,
    //   providesTags: ["service"],
    // }),

    deleteAContact: builder.mutation({
      query: (contactId) => ({
        url: `/messages/${contactId}`,
        method: "DELETE",
        body: contactId,
      }),
      invalidatesTags: ["contact"],
    }),

    // sliderUpdate: builder.mutation({
    //   query: ({ updateSliderData, sliderId }) => ({
    //     url: `/sliders/${sliderId}`,
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     method: "PUT",
    //     body: updateSliderData,
    //   }),
    //   invalidatesTags: ["slider"],
    // }),
  }),
});

export const {
  useCreateContactMutation,
  useGetAllContactsQuery,
  useDeleteAContactMutation,
} = contactSlice;
