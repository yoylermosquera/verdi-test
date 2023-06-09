import axios, { AxiosError, } from 'axios';
import { getMyToken, logOutUser } from './session';

export const baseURL =
  process.env.NEXT_PUBLIC_API_HOST || 'https://apidev.tools.antpack.co/verdi';


export const API = axios.create({
  baseURL,
});

export const APIServer = axios.create({
  baseURL: baseURL,
})

API.interceptors.request.use(async (config) => {
  /* This code is checking if the `Authorization` header is already present in the `config` object. If
  it is not present, it calls the `getMyToken()` function to retrieve the token and assigns it to
  the `token` variable. The `Authorization` header is then added to the `config` object with the
  retrieved token using the `Bearer` authentication scheme. This ensures that the API requests made
  using this `API` instance have the necessary authentication token in the `Authorization` header. */
  let token = config.headers.Authorization;

  if (!token || token === 'undefined' ) {
    token = await getMyToken();      
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    } as any,
  };
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (axios.isAxiosError(error)) {
      const { code } = error as AxiosError<any, any>;
      if (code === 'ERR_NETWORK') {
        // TODO handle network error
        // console.log('axios error')
      }
    }

    const { status } = error?.response || {};
    if (status === 401) {
      await logOutUser();
    }
    return Promise.reject(error);
  },
);
