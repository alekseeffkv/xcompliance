import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
  login: string;
  avatar_url: string;
  repos_url: string;
  name: string | null;
};

export const githubApiSlice = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (login) => `/users/${login}`,
    }),
  }),
});

export const { useGetUserQuery } = githubApiSlice;
