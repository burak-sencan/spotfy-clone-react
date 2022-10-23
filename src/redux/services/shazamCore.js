import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    // eslint-disable-next-line arrow-body-style
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'e6c4a5af19msh620117dc2f3442ap1264fbjsnf8c24d6f532e'
      )
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/world',
    }),
    getSongDetails: builder.query({
      query: ({ songid }) =>
        `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) =>
        `/tracks/related?track_id=${songid}`,
    }),
  }),
})

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi
