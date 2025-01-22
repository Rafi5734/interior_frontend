import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceSlice = createApi({
  reducerPath: "service",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:6600/api",
    // baseUrl: `${import.meta.env.VITE_main_url}`,
  }),
  tagTypes: ["service"],
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (service) => ({
        url: "/services",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: service,
      }),
      invalidatesTags: ["service"],
    }),

    getAllService: builder.query({
      query: () => "/services",
      providesTags: ["service"],
    }),

    getASingleService: builder.query({
      query: (serviceId) => `/services/${serviceId}`,
      providesTags: ["service"],
    }),

    deleteAService: builder.mutation({
      query: (serviceId) => ({
        url: `/services/${serviceId}`,
        method: "DELETE",
        body: serviceId,
      }),
      invalidatesTags: ["service"],
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
  useCreateServiceMutation,
  useGetAllServiceQuery,
  useGetASingleServiceQuery,
  useDeleteAServiceMutation,
} = serviceSlice;
