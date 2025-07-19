import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6873bdc6c75558e273551908.mockapi.io/' }),
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (priority) => {
                const params = new URLSearchParams();
                if (priority) {
                    params.append('priority', priority);
                }
                return {
                    url: `/tasks`,
                    method: 'GET',
                    params: params
                }
            },
            providesTags: ['todo'],
        }),
        addTodo: builder.mutation({
            query: (data) => {
                console.log('inside base api ', data);
                return {
                    url: '/tasks',
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags: ['todo'],
        }),
    }),
    // endpoints: (build) => ({
    //     getPokemonByName: build.query<Pokemon, string>({
    //         query: (name) => `pokemon/${name}`,
    //     }),
    // }),
})

export const { useGetTodosQuery, useAddTodoMutation } = baseApi