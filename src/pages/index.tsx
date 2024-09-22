export { default as AboutUs } from "./about-us";
export { default as CarDetails } from "./car-details";
export { default as Cars } from "./cars";
export { default as Home } from "./home";
export { default as NotFound } from "./not-found";
export { default as UserProfile } from "./user-profile";

// auth pages
export { SignIn, SignUp } from "./auth";

// user pages
export { ManagePayments, ManageUserBookings, UserOverview } from "./user";

// admin pages
export {
  AdminOverview,
  ManageAllBookings,
  ManageCars,
  ManageReturnCars,
  ManageUsers,
} from "./admin";

// payment pages
export { PaymentCancel, PaymentFailed, PaymentSuccess } from "./payment";

// booking pages
export { ConfirmationBooking, CreateBooking } from "./booking";
