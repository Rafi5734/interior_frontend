import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectSliderSlice = createApi({
  reducerPath: "projectSlider",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:6600/api",
    // baseUrl: `${import.meta.env.VITE_main_url}`,
  }),
  tagTypes: ["projectSlider"],
  endpoints: (builder) => ({
    createProjectSlider: builder.mutation({
      query: (projectSlider) => ({
        url: "/projects/sliders",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: projectSlider,
      }),
      invalidatesTags: ["projectSlider"],
    }),

    getAllProjectSliders: builder.query({
      query: () => "/projects/sliders",
      providesTags: ["projectSlider"],
    }),

    getASingleProjectSlider: builder.query({
      query: (projectSliderId) => `/projects/sliders/${projectSliderId}`,
      providesTags: ["projectSlider"],
    }),

    deleteAProjectSlider: builder.mutation({
      query: (projectSliderId) => ({
        url: `/projects/sliders/${projectSliderId}`,
        method: "DELETE",
        body: projectSliderId,
      }),
      invalidatesTags: ["projectSlider"],
    }),

    projectSliderUpdate: builder.mutation({
      query: ({ updateProjectSliderData, projectSliderId }) => ({
        url: `/projects/sliders/${projectSliderId}`,
        headers: {
          "content-type": "application/json",
        },
        method: "PUT",
        body: updateProjectSliderData,
      }),
      invalidatesTags: ["projectSlider"],
    }),
  }),
});

export const {
useCreateProjectSliderMutation,
useGetAllProjectSlidersQuery,
useGetASingleProjectSliderQuery,
useDeleteAProjectSliderMutation,
useProjectSliderUpdateMutation
} = projectSliderSlice;
