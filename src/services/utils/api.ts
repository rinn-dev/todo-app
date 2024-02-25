import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './baseQuery';
import * as tags from './tags';

export const api = createApi({
  baseQuery: customBaseQuery,
  tagTypes: Object.values(tags),
  endpoints: () => ({}),
});
