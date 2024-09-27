import { baseApi } from "@/redux/api/baseApi";
import {
  TResponse,
  TSignInPayload,
  TSignUpPayload,
  TUpdateProfilePayload,
  TUser,
} from "@/types";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // sign up user
    signup: builder.mutation<TResponse<TUser>, TSignUpPayload>({
      query: (payload) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: payload,
        };
      },
    }),

    // sign in user
    signin: builder.mutation<TResponse<{ token: string }>, TSignInPayload>({
      query: (payload) => {
        return {
          url: "/auth/signin",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["currentUser"],
    }),

    // get logged in user info
    getMe: builder.query<TResponse<TUser>, undefined | void>({
      query: () => {
        return {
          url: "/auth/me",
          method: "GET",
        };
      },
      providesTags: ["currentUser"],
    }),

    // update logged in user profile
    updateProfile: builder.mutation<TResponse<TUser>, TUpdateProfilePayload>({
      query: (payload) => {
        return {
          url: "/auth/update-profile",
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["currentUser"],
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useGetMeQuery,
  useUpdateProfileMutation,
} = authApi;
