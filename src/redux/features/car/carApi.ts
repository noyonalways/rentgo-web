import { baseApi } from "@/redux/api/baseApi";
import { TCar, TResponse, TResponseRedux } from "@/types";
import { toURLSearchParams } from "@/utils";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (params) => {
        const queryParams = params ? `?${toURLSearchParams(params)}` : "";
        return {
          url: `/cars${queryParams}`,
          method: "GET",
        };
      },
      providesTags: ["allCars"],
      transformResponse: (response: TResponseRedux<TCar[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),

    // get a single car
    getSingleCar: builder.query<TResponse<TCar>, string>({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "GET",
      }),
    }),

    // add new car
    addNewCar: builder.mutation({
      query: (payload) => ({
        url: `/cars`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["allCars"],
    }),

    // delete a car
    deleteCar: builder.mutation<TResponse<TCar>, string>({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["allCars"],
    }),

    // return car
    returnCar: builder.mutation({
      query: (payload) => ({
        url: `/cars/return`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["allBookings"],
    }),
  }),
});

export const {
  useGetAllCarsQuery,
  useReturnCarMutation,
  useAddNewCarMutation,
  useGetSingleCarQuery,
  useDeleteCarMutation,
} = carApi;
