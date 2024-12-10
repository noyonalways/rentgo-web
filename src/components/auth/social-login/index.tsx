import { Button } from "@/components/ui/button";
import { app } from "@/config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

interface IProps {}

const SocialLogin = ({}: IProps) => {
  const auth = getAuth(app);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((_) => {
        // console.log(data.user);
      })
      .catch((error) => {
        console.log(error);
      });
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
