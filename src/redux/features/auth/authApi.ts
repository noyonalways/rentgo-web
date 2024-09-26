import { baseApi } from "@/redux/api/baseApi";
import { TResponse, TSignInPayload, TSignUpPayload, TUser } from "@/types";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<TResponse<TUser>, TSignUpPayload>({
      query: (payload) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: payload,
        };
      },
    }),
    signin: builder.mutation<TResponse<{ token: string }>, TSignInPayload>({
      query: (payload) => {
        return {
          url: "/auth/signin",
          method: "POST",
          body: payload,
        };
      },
    }),
    getMe: builder.query<TResponse<TUser>, undefined>({
      query: () => {
        return {
          url: "/auth/me",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useSignupMutation, useSigninMutation, useGetMeQuery } = authApi;
