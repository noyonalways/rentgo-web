import { baseApi } from "@/redux/api/baseApi";
import {
  TError,
  TPayment,
  TPaymentPayload,
  TResponse,
  TResponseRedux,
} from "@/types";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // make payment
    makePayment: builder.mutation<
      TResponse<{ result: string; payment_url: string }>,
      TPaymentPayload
    >({
      query: (payload) => ({
        url: `/payments/pay`,
        method: "POST",
        body: payload,
      }),
    }),

    // logged in user payments
    loggedInUserPayments: builder.query({
      query: () => ({
        url: "/payments/my-payments",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TPayment[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      transformErrorResponse: (error: TError) => {
        return {
          message: error.data.message,
        };
      },
    }),

    // all payments (admin only)
    getAllPayments: builder.query({
      query: () => ({
        url: "/payments",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TPayment[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      transformErrorResponse: (error: TError) => {
        return {
          message: error.data.message,
        };
      },
    }),

    // get total revenue (admin only)
    getTotalRevenue: builder.query<TResponse<{ totalRevenue: number }>, void>({
      query: () => ({
        url: "/payments/total-revenue",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useMakePaymentMutation,
  useLoggedInUserPaymentsQuery,
  useGetAllPaymentsQuery,
  useGetTotalRevenueQuery,
} = paymentApi;
