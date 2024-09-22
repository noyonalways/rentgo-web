import { DashboardLayout, MainLayout } from "@/layouts";
import {
  AdminOverview,
  CarDetails,
  ConfirmationBooking,
  CreateBooking,
  Home,
  ManageAllBookings,
  ManageCars,
  ManagePayments,
  ManageReturnCars,
  ManageUserBookings,
  ManageUsers,
  PaymentCancel,
  PaymentFailed,
  PaymentSuccess,
  SignIn,
  SignUp,
  UserOverview,
  UserProfile,
} from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "/booking/payment/success",
        element: <PaymentSuccess />,
      },
      {
        path: "/booking/payment/failed",
        element: <PaymentFailed />,
      },
      {
        path: "/booking/payment/cancel",
        element: <PaymentCancel />,
      },
      {
        path: "me",
        element: <UserProfile />,
      },
      {
        path: "/cars/:id",
        element: <CarDetails />,
      },
      {
        path: "/cars/:id/booking",
        element: <CreateBooking />,
      },
      {
        path: "/cars/:id/confirm-booking",
        element: <ConfirmationBooking />,
      },
    ],
  },
  {
    path: "/user",
    element: <DashboardLayout />,
    children: [
      {
        path: "overview",
        element: <UserOverview />,
      },
      {
        path: "manage-bookings",
        element: <ManageUserBookings />,
      },
      {
        path: "manage-payments",
        element: <ManagePayments />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "overview",
        element: <AdminOverview />,
      },
      {
        path: "manage-cars",
        element: <ManageCars />,
      },
      {
        path: "manage-bookings",
        element: <ManageAllBookings />,
      },
      {
        path: "manage-return-cars",
        element: <ManageReturnCars />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
    ],
  },
]);

export default router;
