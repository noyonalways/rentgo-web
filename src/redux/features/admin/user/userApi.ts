import { baseApi } from "@/redux/api/baseApi";
import { TResponse, TResponseRedux, TUser } from "@/types";
import { toURLSearchParams } from "@/utils";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all users (admin only)
    getAllUsers: builder.query({
      query: (params) => {
        const queryParams = params ? `?${toURLSearchParams(params)}` : "";
        return {
          url: `/users${queryParams}`,
          method: "GET",
        };
      },
      providesTags: ["allUsers"],
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),

    // update user (block or unblock) (admin only)
    changeUserStatus: builder.mutation<
      TResponse<TUser>,
      { payload: { status: string }; userId: string }
    >({
      query: ({ payload, userId }) => ({
        url: `/users/${userId}/change-status`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["allUsers"],
    }),

    // make a user to admin (admin only)
    makeUserAdmin: builder.mutation<TResponse<TUser>, string>({
      query: (userId) => ({
        url: `/users/${userId}/make-admin`,
        method: "PATCH",
      }),
      invalidatesTags: ["allUsers", "currentUser"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useChangeUserStatusMutation,
  useMakeUserAdminMutation,
} = userApi;
