import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const billboardApi = createApi({
    reducerPath: 'billboardApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://billboard-api5.p.rapidapi.com/api',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '98c6410a1amsh13794af03a7b9b5p1c09bajsnf4e5071567c6')
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getHot100: builder.query({ query: () => '/charts/hot-100?date=2022-10-08'})
    })
});

export const { useGetHot100Query } = billboardApi;