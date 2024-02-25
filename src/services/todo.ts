import { Todo } from '../types/todo';
import { api } from './utils/api';
import { TODO_ENDPOINT } from './utils/endpoints';
import { TODO } from './utils/tags';

export const todoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => {
        return {
          url: `${TODO_ENDPOINT}`,
          method: 'GET',
        };
      },
      providesTags: [TODO],
    }),
    setStatus: builder.mutation<Todo, { id: string; completed: boolean }>({
      query: ({ id, completed }) => {
        return {
          url: `${TODO_ENDPOINT}/${id}`,
          method: 'PATCH',
          data: { completed },
        };
      },
      invalidatesTags: [TODO],
    }),
    updateTitle: builder.mutation<Todo, { id: string; title: string }>({
      query: ({ id, title }) => {
        return {
          url: `${TODO_ENDPOINT}/${id}`,
          method: 'PATCH',
          data: { title },
        };
      },
      invalidatesTags: [TODO],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => {
        return {
          url: `${TODO_ENDPOINT}/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [TODO],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTodosQuery,
  useSetStatusMutation,
  useUpdateTitleMutation,
  useDeleteTodoMutation,
} = todoApi;
