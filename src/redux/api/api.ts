import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                url: '/todos',
                method: 'GET',
            }),
        }),
    }),
    // endpoints: (build) => ({
    //     getPokemonByName: build.query<Pokemon, string>({
    //         query: (name) => `pokemon/${name}`,
    //     }),
    // }),
})

export const { useGetTodosQuery } = baseApi