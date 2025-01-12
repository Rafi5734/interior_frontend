import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectSlice = createApi({
  reducerPath: "project",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    // baseUrl: `${import.meta.env.VITE_main_url}`,
  }),
  tagTypes: ["project"],
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (createProject) => ({
        url: "/project/projects/",
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: createProject,
      }),
      invalidatesTags: ["project"],
    }),

    createSection: builder.mutation({
      query: ({ sectionTitle, projectId }) => ({
        url: `/project/projects/${projectId}/sections`,
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: sectionTitle,
      }),
      invalidatesTags: ["project"],
    }),

    getAllProjects: builder.query({
      query: () => "/project/projects/",
      providesTags: ["project"],
    }),

    getASingleProjects: builder.query({
      query: (projectId) => `/project/projects/${projectId}`,
      providesTags: ["project"],
    }),

    deleteAProject: builder.mutation({
      query: (projectId) => ({
        url: `/project/projects/${projectId}`,
        method: "DELETE",
        body: projectId,
      }),
      invalidatesTags: ["project"],
    }),

    deleteAProjectSection: builder.mutation({
      query: ({ projectId, sectionId }) => ({
        url: `/project/projects/${projectId}/sections/${sectionId}`,
        method: "DELETE",
        body: projectId,
      }),
      invalidatesTags: ["project"],
    }),

    projectUpdate: builder.mutation({
      query: ({ updateProjectData, projectId }) => ({
        url: `/project/projects/${projectId}`,
        headers: {
          "content-type": "application/json",
        },
        method: "PUT",
        body: updateProjectData,
      }),
      invalidatesTags: ["project"],
    }),

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
  useCreateProjectMutation,
  useGetAllProjectsQuery,
  useDeleteAProjectMutation,
  useGetASingleProjectsQuery,
  useProjectUpdateMutation,
  useCreateSectionMutation,
  useDeleteAProjectSectionMutation
} = projectSlice;
