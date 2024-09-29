import { baseApi } from "@/redux/api/baseApi";
import { TResponseRedux, TUser } from "@/types";
import { toURLSearchParams } from "@/utils";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (params) => {
        const queryParams = params ? `?${toURLSearchParams(params)}` : "";
        return {
          url: `/users${queryParams}`,
          method: "GET",
        };
      },
      providesTags: ["allBookings"],
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
