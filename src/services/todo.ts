import { Todos } from '../types/todo';
import { api } from './utils/api';
import { TODO_ENDPOINT } from './utils/endpoints';
import { TODO } from './utils/tags';

export const todoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<Todos, void>({
      query: () => {
        return {
          url: `${TODO_ENDPOINT}`,
          method: 'GET',
        };
      },
      providesTags: [TODO],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTodosQuery } = todoApi;
