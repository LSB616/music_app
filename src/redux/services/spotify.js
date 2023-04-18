import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify23.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '98c6410a1amsh13794af03a7b9b5p1c09bajsnf4e5071567c6')
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getArtists: builder.query({ query: () => '/artists/one'})
    })
});

export const { useGetArtistsQuery } = spotifyApi;