import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface IProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProps> = ({ children }) => {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();

  if (!token) {
    console.log("No token found, redirecting to login.");
    return <Navigate to="/signin" replace={true} state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
