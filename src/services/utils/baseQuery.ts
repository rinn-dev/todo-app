import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

if (!baseURL) {
  throw new Error('Base api url is not defined');
}

type CustomBaseQuery = BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
  },
  unknown,
  unknown
>;

const baseQuery = (): CustomBaseQuery => async (requestOpts) => {
  try {
    const result = await axios({
      ...requestOpts,
      baseURL,
    });
    return { data: result.data };
  } catch (error) {
    const axiosError = error as AxiosError;
    return { error: axiosError.response ?? axiosError };
  }
};

export const customBaseQuery = baseQuery();
