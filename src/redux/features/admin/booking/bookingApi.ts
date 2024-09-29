import { baseApi } from "@/redux/api/baseApi";
import { TBooking, TResponse, TResponseRedux } from "@/types";
import { toURLSearchParams } from "@/utils";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: (params) => {
        const queryParams = params ? `?${toURLSearchParams(params)}` : "";
        return {
          url: `/bookings${queryParams}`,
          method: "GET",
        };
      },
      providesTags: ["allBookings"],
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),

    // approve booking
    approveBooking: builder.mutation<TResponse<TBooking>, string>({
      query: (bookingId) => ({
        url: `/bookings/${bookingId}/approved`,
        method: "PATCH",
      }),
      invalidatesTags: ["allBookings"],
    }),

    // cancel booking
    cancelBooking: builder.mutation<TResponse<TBooking>, string>({
      query: (bookingId) => ({
        url: `/bookings/${bookingId}/cancelled`,
        method: "PATCH",
      }),
      invalidatesTags: ["allBookings"],
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useApproveBookingMutation,
  useCancelBookingMutation,
} = bookingApi;
