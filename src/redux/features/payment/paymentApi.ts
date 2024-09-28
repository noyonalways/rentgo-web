import { baseApi } from "@/redux/api/baseApi";
import { TPayment, TPaymentPayload, TResponse, TResponseRedux } from "@/types";

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
    }),
  }),
});

export const { useMakePaymentMutation, useLoggedInUserPaymentsQuery } =
  paymentApi;
