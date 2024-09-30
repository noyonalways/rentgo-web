import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  name: string;
  email: string;
  phone: string;
  bookingAddress: string;
  nidOrPassport: string;
  drivingLicense: string;
  startTime: string;
  bookingDate: string;
  carId: string;
};

const initialState: TInitialState = {
  name: "",
  email: "",
  phone: "",
  bookingAddress: "",
  nidOrPassport: "",
  drivingLicense: "",
  startTime: "",
  bookingDate: "",
  carId: "",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingDetails: (state, action: PayloadAction<TInitialState>) => {
      const {
        name,
        email,
        phone,
        bookingAddress,
        nidOrPassport,
        drivingLicense,
        startTime,
        bookingDate,
        carId,
      } = action.payload;
      state.name = name;
      state.email = email;
      state.phone = phone;
      state.bookingAddress = bookingAddress;
      state.nidOrPassport = nidOrPassport;
      state.drivingLicense = drivingLicense;
      state.startTime = startTime;
      state.bookingDate = bookingDate;
      state.carId = carId;
    },

    clearBooking: () => {
      return initialState;
    },
  },
});

export default bookingSlice.reducer;

export const { setBookingDetails, clearBooking } = bookingSlice.actions;
export const selectCurrentBookingDetails = (state: RootState) => state.booking;
