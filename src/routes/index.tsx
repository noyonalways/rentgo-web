import { MainLayout } from "@/layouts";
import {
  Home,
  PaymentCancel,
  PaymentFailed,
  PaymentSuccess,
  SignIn,
  SignUp,
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
    ],
  },
]);

export default router;
