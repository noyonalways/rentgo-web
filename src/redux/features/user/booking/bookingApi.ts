import { baseApi } from "@/redux/api/baseApi";
import { TBooking, TResponse, TResponseRedux, TUpdateBooking } from "@/types";
import { toURLSearchParams } from "@/utils";

// Helper function to convert params object to URLSearchParams

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get logged-in user's bookings
    getUserBooking: builder.query({
      query: (params) => {
        const queryParams = params ? `?${toURLSearchParams(params)}` : "";
        return {
          url: `/bookings/my-bookings${queryParams}`,
          method: "GET",
        };
      },
      providesTags: ["myBookings"],
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),

    // get single booking by transaction id
    getBookingByTransactionId: builder.query<TResponse<TBooking>, string>({
      query: (transactionId) => ({
        url: `/bookings/my-bookings/${transactionId}`,
        method: "GET",
      }),
    }),

    // cancel a booking
    cancelLoggedInUserBooking: builder.mutation<TResponse<TBooking>, string>({
      query: (bookingId) => ({
        url: `/bookings/my-bookings/${bookingId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["myBookings"],
    }),

    // update booking
    updateBooking: builder.mutation<
      TResponse<TBooking>,
      { bookingId: string; payload: Partial<TUpdateBooking> }
    >({
      query: ({ bookingId, payload }) => ({
        url: `/bookings/my-bookings/${bookingId}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["myBookings"],
    }),
  }),
});

export const {
  useGetUserBookingQuery,
  useGetBookingByTransactionIdQuery,
  useCancelLoggedInUserBookingMutation,
  useUpdateBookingMutation,
} = bookingApi;
