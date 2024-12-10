import { Button } from "@/components/ui/button";
import { app } from "@/config";
import { useSocialLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface IProps {}

const SocialLogin = ({}: IProps) => {
  const auth = getAuth(app);
  const [socialLogin] = useSocialLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, new GoogleAuthProvider());

      const userData = {
        name: data.user.displayName || "",
        email: data.user.email || "",
        phone: data.user.phoneNumber || "",
        profileImage: data.user.photoURL || "",
      };

      if (userData) {
        const result = await socialLogin(userData).unwrap();
        const user = verifyToken(result?.data?.token as string);
        dispatch(setUser({ user: user, token: result.data?.token as string }));

        toast.success(result?.message, {
          id: "social-login-google",
          duration: 2000,
          position: "top-right",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p className="text-center mb-2">or</p>
      <>
        <Button
          className="w-full space-x-2"
          onClick={handleGoogleLogin}
          size="lg"
          variant="outline"
        >
          <FcGoogle size={20} />
          <span>Continue with Google</span>
        </Button>
      </>
    </div>
  );
};

export default SocialLogin;
