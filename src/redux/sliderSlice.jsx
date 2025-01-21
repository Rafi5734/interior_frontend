import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sliderSlice = createApi({
  reducerPath: "slider",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:6600/api",
    // baseUrl: `${import.meta.env.VITE_main_url}`,
  }),
  tagTypes: ["slider"],
  endpoints: (builder) => ({
    createSlider: builder.mutation({
      query: (slider) => ({
        url: "/sliders",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: slider,
      }),
      invalidatesTags: ["slider"],
    }),

    getAllSLiders: builder.query({
      query: () => "/sliders",
      providesTags: ["slider"],
    }),

    getASingleSlider: builder.query({
      query: (sliderId) => `/sliders/${sliderId}`,
      providesTags: ["slider"],
    }),

    deleteASlider: builder.mutation({
      query: (sliderId) => ({
        url: `/sliders/${sliderId}`,
        method: "DELETE",
        body: sliderId,
      }),
      invalidatesTags: ["slider"],
    }),

    sliderUpdate: builder.mutation({
      query: ({ updateSliderData, sliderId }) => ({
        url: `/sliders/${sliderId}`,
        headers: {
          "content-type": "application/json",
        },
        method: "PUT",
        body: updateSliderData,
      }),
      invalidatesTags: ["slider"],
    }),
  }),
});

export const {
useCreateSliderMutation,
useGetAllSLidersQuery,
useGetASingleSliderQuery,
useSliderUpdateMutation,
useDeleteASliderMutation
} = sliderSlice;
