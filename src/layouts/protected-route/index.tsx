import { logout, selectCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface IProps {
  children: React.ReactNode;
  role: string | undefined;
}

const ProtectedRoute: React.FC<IProps> = ({ children, role }) => {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();

  let user;

  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/signin" replace={true} />;
  }

  if (!token) {
    console.log("No token found, redirecting to login.");
    return <Navigate to="/signin" replace={true} state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
