import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
  login: string;
  avatar_url: string;
  repos_url: string;
  name: string | null;
};

type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
};

export const githubApiSlice = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (login) => `https://api.github.com/users/${login}`,
    }),
    getRepos: builder.query<Repo[], string>({
      query: (repos_url) => `${repos_url}`,
    }),
  }),
});

export const { useGetUserQuery, useGetReposQuery } = githubApiSlice;
