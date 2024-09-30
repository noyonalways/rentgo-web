import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSigninMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { signInFormSchema } from "@/schemas";
import { TError } from "@/types";
import { verifyToken } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

interface IProps {}

const SignIn: React.FC<IProps> = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [signIn] = useSigninMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = async (data: z.infer<typeof signInFormSchema>) => {
    const toastId = toast.loading("Sign in User...", {
      duration: 2000,
      position: "top-right",
    });

    try {
      const result = await signIn(data).unwrap();
      if (result.success) {
        const user = verifyToken(result?.data?.token as string);
        dispatch(setUser({ user: user, token: result.data?.token as string }));

        toast.success(result?.message, {
          id: toastId,
          duration: 2000,
          position: "top-right",
        });
        navigate("/");
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message || "Something went wrong", {
        id: toastId,
        position: "top-right",
      });
    }

    // Reset the form after submission
    form.reset();
  };

  return (
    <section className="pt-2 pb-24 lg:pt-10">
      <div className="container">
        <div className="text-center space-y-2 mb-16">
          <h3 className="text-primary font-semibold tracking-[.15rem]">
            Sign In
          </h3>
          <h1 className="font-bold text-3xl">User Sign In</h1>
        </div>
        <div className="w-full lg:max-w-lg mx-auto">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="px-4 py-5"
                        placeholder="Email"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        className="px-4 py-5"
                        type={isPassword ? "password" : "text"}
                        placeholder="Password"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                    <button
                      className="absolute right-2 top-[1px] size-6 flex items-center justify-center text-muted-foreground"
                      onClick={() => setIsPassword(!isPassword)}
                      type="button"
                    >
                      {isPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                    </button>
                  </FormItem>
                )}
              />

              <Button size={"lg"} type="submit" className="w-full">
                Sign In
              </Button>
              <div className="flex justify-center space-x-1">
                <span className="text-center text-sm">
                  Don&apos;t have an account?
                </span>
                <Link to="/signup" className="text-primary text-sm">
                  Sign Up
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
